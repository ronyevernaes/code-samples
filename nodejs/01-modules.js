const secret = "SECRET_VAR";
const message = "This is a standard message";
const amount = 10;

// Export something
module.exports.message = message;

// A shorter way of export something
exports.amount = amount;

// This overrides the whole thing
module.exports = {
  message: "This is another message",
  amount: 11
};
