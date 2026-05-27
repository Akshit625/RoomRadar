require("dotenv").config();

const connectDB = require("../src/config/db");
const User = require("../src/models/User");
const Property = require("../src/models/Property");
const { demoUsers, dehradunProperties } = require("./dehradunSeedData");

const seed = async () => {
  await connectDB();

  await Promise.all([User.deleteMany({}), Property.deleteMany({})]);

  const users = await User.create(
    demoUsers.map(({ key, ...userData }) => userData)
  );

  const usersByKey = demoUsers.reduce((accumulator, userData, index) => {
    accumulator[userData.key] = users[index];
    return accumulator;
  }, {});

  await Property.create(
    dehradunProperties.map((propertyData) => {
      const owner = usersByKey[propertyData.ownerKey];

      return {
        ...propertyData,
        owner: owner._id,
        contactPhone: owner.phone,
        contactEmail: owner.email
      };
    })
  );

  console.log("Seed data inserted.");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
