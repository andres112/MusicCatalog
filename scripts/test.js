const { spawnSync } = require("child_process");
const path = require("path");

const vitestBin = path.join(
  __dirname,
  "..",
  "node_modules",
  ".bin",
  process.platform === "win32" ? "vitest.cmd" : "vitest"
);

const args = process.argv
  .slice(2)
  .filter(arg => !arg.startsWith("--watchAll"));

const result = spawnSync(vitestBin, ["--run", ...args], {
  stdio: "inherit",
  shell: process.platform === "win32"
});

process.exit(result.status === null ? 1 : result.status);
