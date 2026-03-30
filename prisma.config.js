const { defineConfig } = require("prisma/config");
require("dotenv/config");

module.exports = defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
});
