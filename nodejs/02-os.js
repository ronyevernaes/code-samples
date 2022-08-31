const os = require("os");

// Some of the OS module operations as readers for attributes.
// More info: https://nodejs.org/dist/latest-v16.x/docs/api/os.html
exports.os = {
  // Type of operative system
  type: os.type(),
  // CPU architecture
  arch: os.arch(),
  // Total system memory
  totalmem: os.totalmem(),
  // Total system free memory
  freemem: os.freemem(),
  // Platform name
  platform: os.platform(),
  // Platform release
  release: os.release(),
  // Platform version
  version: os.version(),
  // System uptime in seconds
  uptime: os.uptime(),
  // System user info
  user: os.userInfo(),
};
