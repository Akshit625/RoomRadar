require("dotenv").config();

const connectDB = require("../src/config/db");
const User = require("../src/models/User");
const Property = require("../src/models/Property");
const { demoUsers, dehradunProperties } = require("./dehradunSeedData");

const ensureUser = async (userData) => {
  let user = await User.findOne({ email: userData.email });

  if (!user) {
    user = new User(userData);
  } else {
    user.name = userData.name;
    user.email = userData.email;
    user.role = userData.role;
    user.phone = userData.phone;
    user.password = userData.password;
  }

  await user.save();
  return user;
};

const syncDehradunListings = async () => {
  await connectDB();

  const usersByKey = {};
  for (const userData of demoUsers) {
    usersByKey[userData.key] = await ensureUser(userData);
  }

  const deleteResult = await Property.deleteMany({
    city: { $not: /^dehradun$/i }
  });

  for (const propertyData of dehradunProperties) {
    const owner = usersByKey[propertyData.ownerKey];

    await Property.findOneAndUpdate(
      {
        title: propertyData.title,
        address: propertyData.address,
        city: "Dehradun"
      },
      {
        ...propertyData,
        owner: owner._id,
        contactPhone: owner.phone,
        contactEmail: owner.email
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );
  }

  const totalDehradunProperties = await Property.countDocuments({
    city: /^dehradun$/i
  });

  console.log(`Removed ${deleteResult.deletedCount} non-Dehradun properties.`);
  console.log(`Synced ${dehradunProperties.length} curated Dehradun listings.`);
  console.log(`Database now has ${totalDehradunProperties} Dehradun properties.`);
  process.exit(0);
};

syncDehradunListings().catch((error) => {
  console.error("Dehradun sync failed:", error);
  process.exit(1);
});
