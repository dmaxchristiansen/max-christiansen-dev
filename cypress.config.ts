import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: false,
  video: false,
  retries: 1,
  e2e: {
    baseUrl: "http://localhost:8000",
  },
});
