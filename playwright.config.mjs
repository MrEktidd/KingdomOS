import {defineConfig,devices} from "@playwright/test";

export default defineConfig({
  testDir:"./tests/ui",
  timeout:60_000,
  expect:{timeout:10_000},
  retries:0,
  workers:process.env.CI?1:undefined,
  reporter:process.env.CI?"github":"list",
  use:{
    baseURL:"http://127.0.0.1:4173",
    trace:"retain-on-failure",
    screenshot:"only-on-failure"
  },
  projects:[{name:"chrome",use:{...devices["Desktop Chrome"],channel:"chrome"}}],
  webServer:{
    command:"node scripts/serve.mjs",
    url:"http://127.0.0.1:4173",
    reuseExistingServer:!process.env.CI,
    timeout:30_000
  }
});
