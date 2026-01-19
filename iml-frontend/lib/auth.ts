import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
  database: {
    type: "sqlite",
    // Will use better-auth default SQLite setup
    // You can replace with your own database config
  },
});
