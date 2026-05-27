import {
  createProperty,
  deleteProperty,
  fetchCurrentUser,
  fetchInbox,
  fetchMyProperties,
  markMessageAsRead,
  session,
  updateProperty,
  verifyProperty
} from "./api.js";

const placeholderImage =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#dff6ef" />
          <stop offset="100%" stop-color="#ffe6de" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#173630" font-family="Arial" font-size="56" font-weight="700">RoomRadar</text>
    </svg>
  `);

const elements = {
  body: document.body,
  appToast: document.getElementById("appToast"),
  userBadge: document.getElementById("userBadge"),
  logoutButton: document.getElementById("logoutButton"),
  statTotalListings: document.getElementById("statTotalListings"),
  statVerifiedListings: document.getElementById("statVerifiedListings"),
  statPendingListings: document.getElementById("statPendingListings"),
  statUnreadMessages: document.getElementById("statUnreadMessages"),
  dashboardListingsMeta: document.getElementById("dashboardListingsMeta"),
  dashboardListings: document.getElementById("dashboardListings"),
  dashboardInboxMeta: document.getElementById("dashboardInboxMeta"),
  dashboardInbox: document.getElementById("dashboardInbox"),
  refreshInboxButton: document.getElementById("refreshInboxButton"),
  propertyForm: document.getElementById("propertyForm"),
  ownerFormHeading: document.getElementById("ownerFormHeading"),
  clearOwnerFormButton: document.getElementById("clearOwnerFormButton"),
  clearOwnerFormButtonInline: document.getElementById("clearOwnerFormButtonInline"),
  reviewMeta: document.getElementById("reviewMeta"),
  reviewFilters: document.getElementById("reviewFilters"),
  reviewQueue: document.getElementById("reviewQueue")
};

const state = {
  user: session.getUser(),
  role: document.body.dataset.dashboardRole,
  properties: [],
  messages: [],
  editingPropertyId: null,
  reviewFilter: "pending"
};

const getRoleHome = (role) => {
  if (role === "owner") {
    return "/owner";
  }

  if (role === "admin") {
    return "/admin";
  }

  return "/";
};

const showToast = (message, isError = false) => {
  elements.appToast.textContent = message;
  elements.appToast.style.background = isError ? "rgba(193, 67, 67, 0.95)" : "rgba(23, 54, 48, 0.92)";
  elements.appToast.classList.remove("hidden");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.appToast.classList.add("hidden");
  }, 3200);
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderEmptyState = (target, message) => {
  target.innerHTML = `<div class="empty-state">${escapeHtml(message)}</div>`;
};

const truncateText = (value = "", maxLength = 140) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 1).trim()}...` : value;

const formatPrice = (price, listingMode) => {
  const amount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price || 0);

  return listingMode === "rent" ? `${amount}/month` : amount;
};

const formatDate = (value) => {
  if (!value) {
    return "Recently";
  }

  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};

const getPrimaryImage = (property) => property.images?.[0] || placeholderImage;

const sanitizePayload = (payload) =>
  Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== "")
  );

const updateStats = () => {
  const totalListings = state.properties.length;
  const verifiedListings = state.properties.filter((property) => property.verificationStatus === "verified").length;
  const pendingListings = state.properties.filter((property) => property.verificationStatus === "pending").length;
  const unreadMessages = state.messages.filter((message) => message.status === "new").length;

  if (elements.statTotalListings) {
    elements.statTotalListings.textContent = String(totalListings);
  }

  if (elements.statVerifiedListings) {
    elements.statVerifiedListings.textContent = String(verifiedListings);
  }

  if (elements.statPendingListings) {
    elements.statPendingListings.textContent = String(pendingListings);
  }

  if (elements.statUnreadMessages) {
    elements.statUnreadMessages.textContent = String(unreadMessages);
  }
};

const syncNavUI = () => {
  if (!state.user) {
    return;
  }

  elements.userBadge.classList.remove("hidden");
  elements.userBadge.textContent = `${state.user.name} - ${state.user.role}`;
};

const hydrateUser = async () => {
  if (!session.getToken()) {
    window.location.replace("/login");
    return false;
  }

  try {
    const data = await fetchCurrentUser();
    state.user = {
      id: data.user._id,
      name: data.user.name,
      email: data.user.email,
      phone: data.user.phone,
      role: data.user.role
    };
    session.set({ token: session.getToken(), user: state.user });
  } catch (_error) {
    session.clear();
    window.location.replace("/login");
    return false;
  }

  if (state.user.role !== state.role) {
    window.location.replace(getRoleHome(state.user.role));
    return false;
  }

  syncNavUI();
  return true;
};

const resetOwnerForm = () => {
  if (!elements.propertyForm) {
    return;
  }

  elements.propertyForm.reset();
  elements.ownerFormHeading.textContent = "Add a property";
  elements.clearOwnerFormButton.classList.add("hidden");
  elements.clearOwnerFormButtonInline.classList.add("hidden");
  state.editingPropertyId = null;
};

const populateOwnerForm = (propertyId) => {
  const property = state.properties.find((item) => item._id === propertyId);
  if (!property || !elements.propertyForm) {
    return;
  }

  Object.entries({
    title: property.title,
    listingMode: property.listingMode,
    propertyType: property.propertyType,
    price: property.price,
    description: property.description,
    address: property.address,
    city: property.city,
    state: property.state,
    landmark: property.landmark,
    nearbyCollege: property.nearbyCollege,
    distanceFromCollege: property.distanceFromCollege,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    furnishing: property.furnishing,
    contactPhone: property.contactPhone,
    contactEmail: property.contactEmail,
    images: property.images?.join(", "),
    amenities: property.amenities?.join(", "),
    latitude: property.location?.coordinates?.[1],
    longitude: property.location?.coordinates?.[0]
  }).forEach(([key, value]) => {
    const input = elements.propertyForm.elements.namedItem(key);
    if (input) {
      input.value = value ?? "";
    }
  });

  state.editingPropertyId = propertyId;
  elements.ownerFormHeading.textContent = "Edit property";
  elements.clearOwnerFormButton.classList.remove("hidden");
  elements.clearOwnerFormButtonInline.classList.remove("hidden");
  elements.propertyForm.scrollIntoView({ behavior: "smooth", block: "start" });
};

const renderOwnerListings = () => {
  elements.dashboardListingsMeta.textContent = `${state.properties.length} listing${state.properties.length === 1 ? "" : "s"}`;

  if (!state.properties.length) {
    renderEmptyState(elements.dashboardListings, "You have not added any listings yet.");
    return;
  }

  elements.dashboardListings.innerHTML = state.properties
    .map(
      (property) => `
        <article class="owner-card">
          <img src="${escapeHtml(getPrimaryImage(property))}" alt="${escapeHtml(property.title)}" />
          <div class="owner-card-body">
            <div class="owner-card-top">
              <div>
                <p class="card-kicker">${escapeHtml(property.city || "Unknown city")} / ${escapeHtml(property.propertyType)}</p>
                <h3>${escapeHtml(property.title)}</h3>
                <p class="muted">${escapeHtml(truncateText(property.description || "", 110))}</p>
              </div>
              <span class="status-badge status-${escapeHtml(property.verificationStatus)}">${escapeHtml(property.verificationStatus)}</span>
            </div>
            <p class="price-tag">${escapeHtml(formatPrice(property.price, property.listingMode))}</p>
            <div class="chip-row">
              <span class="chip">${escapeHtml(property.listingMode)}</span>
              <span class="chip">${escapeHtml(property.bedrooms || 0)} bed</span>
              <span class="chip">${escapeHtml(property.bathrooms || 0)} bath</span>
              <span class="chip">${escapeHtml(property.distanceFromCollege || 0)} km to campus</span>
            </div>
            <div class="owner-card-actions">
              <button class="button button-secondary" type="button" data-edit-property="${property._id}">Edit</button>
              <button class="button button-ghost" type="button" data-delete-property="${property._id}">Delete</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderAdminReviewQueue = () => {
  if (!elements.reviewQueue || !elements.reviewMeta) {
    return;
  }

  const filteredProperties =
    state.reviewFilter === "all"
      ? state.properties
      : state.properties.filter((property) => property.verificationStatus === state.reviewFilter);

  elements.reviewMeta.textContent = `${filteredProperties.length} listing${filteredProperties.length === 1 ? "" : "s"} in ${state.reviewFilter} view`;

  if (!filteredProperties.length) {
    renderEmptyState(elements.reviewQueue, "No listings match the current review filter.");
    return;
  }

  elements.reviewQueue.innerHTML = filteredProperties
    .map(
      (property) => `
        <article class="owner-card">
          <img src="${escapeHtml(getPrimaryImage(property))}" alt="${escapeHtml(property.title)}" />
          <div class="owner-card-body">
            <div class="owner-card-top">
              <div>
                <p class="card-kicker">Owner: ${escapeHtml(property.owner?.name || "Unknown owner")}</p>
                <h3>${escapeHtml(property.title)}</h3>
                <p class="muted">${escapeHtml(property.address || "")}, ${escapeHtml(property.city || "")}</p>
              </div>
              <span class="status-badge status-${escapeHtml(property.verificationStatus)}">${escapeHtml(property.verificationStatus)}</span>
            </div>
            <p class="price-tag">${escapeHtml(formatPrice(property.price, property.listingMode))}</p>
            <p class="muted">${escapeHtml(truncateText(property.description || "", 140))}</p>
            <div class="chip-row">
              <span class="chip">${escapeHtml(property.propertyType)}</span>
              <span class="chip">${escapeHtml(property.listingMode)}</span>
              <span class="chip">${escapeHtml(property.nearbyCollege || "College not set")}</span>
            </div>
            <div class="owner-card-actions">
              <button class="button button-secondary" type="button" data-verify-property="${property._id}" data-status="verified">Approve</button>
              <button class="button button-ghost" type="button" data-verify-property="${property._id}" data-status="rejected">Reject</button>
              <button class="button button-ghost" type="button" data-verify-property="${property._id}" data-status="pending">Set pending</button>
              <button class="button button-ghost" type="button" data-delete-property="${property._id}">Delete</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderAdminListings = () => {
  elements.dashboardListingsMeta.textContent = `${state.properties.length} listing${state.properties.length === 1 ? "" : "s"} across the marketplace`;

  if (!state.properties.length) {
    renderEmptyState(elements.dashboardListings, "No listings are available yet.");
    return;
  }

  elements.dashboardListings.innerHTML = state.properties
    .map(
      (property) => `
        <article class="owner-card">
          <div class="owner-card-body">
            <div class="owner-card-top">
              <div>
                <p class="card-kicker">${escapeHtml(property.owner?.name || "Unknown owner")} / ${escapeHtml(property.owner?.email || "No email")}</p>
                <h3>${escapeHtml(property.title)}</h3>
                <p class="muted">${escapeHtml(property.city || "")}, ${escapeHtml(property.state || "State not set")}</p>
              </div>
              <span class="status-badge status-${escapeHtml(property.verificationStatus)}">${escapeHtml(property.verificationStatus)}</span>
            </div>
            <p class="price-tag">${escapeHtml(formatPrice(property.price, property.listingMode))}</p>
            <div class="chip-row">
              <span class="chip">${escapeHtml(property.propertyType)}</span>
              <span class="chip">${escapeHtml(property.listingMode)}</span>
              <span class="chip">Updated ${escapeHtml(formatDate(property.updatedAt || property.createdAt))}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderInbox = () => {
  const unreadCount = state.messages.filter((message) => message.status === "new").length;
  elements.dashboardInboxMeta.textContent = `${state.messages.length} message${state.messages.length === 1 ? "" : "s"} / ${unreadCount} unread`;

  if (!state.messages.length) {
    renderEmptyState(elements.dashboardInbox, "No student inquiries yet.");
    return;
  }

  elements.dashboardInbox.innerHTML = state.messages
    .map(
      (message) => `
        <article class="message-card">
          <div class="message-card-body">
            <div class="owner-card-top">
              <div>
                <p class="card-kicker">${escapeHtml(formatDate(message.createdAt))}</p>
                <h3>${escapeHtml(message.property?.title || "Listing inquiry")}</h3>
                <p class="muted">${escapeHtml(message.student?.name || message.name)} / ${escapeHtml(message.student?.email || message.email)}</p>
              </div>
              <span class="status-badge ${message.status === "read" ? "status-verified" : "status-pending"}">${escapeHtml(message.status)}</span>
            </div>
            ${
              state.role === "admin"
                ? `<p class="message-meta">Owner: ${escapeHtml(message.owner?.name || "Unknown owner")} / ${escapeHtml(message.owner?.email || "No email")}</p>`
                : ""
            }
            <p>${escapeHtml(message.message)}</p>
            <p class="message-meta">Phone: ${escapeHtml(message.phone || "Not shared")}</p>
            ${
              message.status === "new"
                ? `<div class="message-actions"><button class="button button-secondary" type="button" data-message-read="${message._id}">Mark as read</button></div>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
};

const loadProperties = async () => {
  try {
    const data = await fetchMyProperties();
    state.properties = data.properties || [];
    updateStats();

    if (state.role === "owner") {
      renderOwnerListings();
      return;
    }

    renderAdminReviewQueue();
    renderAdminListings();
  } catch (error) {
    renderEmptyState(elements.dashboardListings, error.message);
    if (elements.reviewQueue) {
      renderEmptyState(elements.reviewQueue, error.message);
    }
    showToast(error.message, true);
  }
};

const loadInbox = async () => {
  try {
    const data = await fetchInbox();
    state.messages = data.messages || [];
    updateStats();
    renderInbox();
  } catch (error) {
    renderEmptyState(elements.dashboardInbox, error.message);
    showToast(error.message, true);
  }
};

const submitOwnerForm = async (event) => {
  event.preventDefault();

  const payload = sanitizePayload(Object.fromEntries(new FormData(elements.propertyForm).entries()));

  try {
    if (state.editingPropertyId) {
      await updateProperty(state.editingPropertyId, payload);
      showToast("Listing updated successfully.");
    } else {
      await createProperty(payload);
      showToast("Listing created and sent for verification.");
    }

    resetOwnerForm();
    await loadProperties();
  } catch (error) {
    showToast(error.message, true);
  }
};

const bindEvents = () => {
  elements.logoutButton.addEventListener("click", () => {
    session.clear();
    state.user = null;
    window.location.href = "/";
  });

  elements.propertyForm?.addEventListener("submit", submitOwnerForm);
  elements.clearOwnerFormButton?.addEventListener("click", resetOwnerForm);
  elements.clearOwnerFormButtonInline?.addEventListener("click", resetOwnerForm);
  elements.refreshInboxButton?.addEventListener("click", loadInbox);

  elements.reviewFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-filter]");
    if (!button) {
      return;
    }

    state.reviewFilter = button.dataset.reviewFilter;
    [...elements.reviewFilters.querySelectorAll("[data-review-filter]")].forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderAdminReviewQueue();
  });

  document.body.addEventListener("click", async (event) => {
    const editButton = event.target.closest("[data-edit-property]");
    if (editButton) {
      populateOwnerForm(editButton.dataset.editProperty);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-property]");
    if (deleteButton) {
      const confirmed = window.confirm("Delete this listing permanently?");
      if (!confirmed) {
        return;
      }

      try {
        await deleteProperty(deleteButton.dataset.deleteProperty);
        showToast("Listing deleted.");
        await loadProperties();
      } catch (error) {
        showToast(error.message, true);
      }
      return;
    }

    const verifyButton = event.target.closest("[data-verify-property]");
    if (verifyButton) {
      try {
        await verifyProperty(verifyButton.dataset.verifyProperty, verifyButton.dataset.status);
        showToast(`Listing marked ${verifyButton.dataset.status}.`);
        await loadProperties();
      } catch (error) {
        showToast(error.message, true);
      }
      return;
    }

    const markReadButton = event.target.closest("[data-message-read]");
    if (markReadButton) {
      try {
        await markMessageAsRead(markReadButton.dataset.messageRead);
        showToast("Inquiry marked as read.");
        await loadInbox();
      } catch (error) {
        showToast(error.message, true);
      }
    }
  });
};

const init = async () => {
  bindEvents();

  const hasAccess = await hydrateUser();
  if (!hasAccess) {
    return;
  }

  await Promise.all([loadProperties(), loadInbox()]);
};

init();
