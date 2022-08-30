const os = require("os");

exports.os = {
  type: os.type(),
  arch: os.arch(),
  freemem: os.freemem(),
  platform: os.platform(),
  release: os.release(),
  uptime: os.uptime(),
  user: os.userInfo(),
};
