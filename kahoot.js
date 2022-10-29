const Kahoot = require("@venixthedev/kahootjs");
const client = new Kahoot();

// Checks for --pin and if it has a value
const pinIndex = process.argv.indexOf('--pin');
let pinValue;

if (pinIndex > -1) {
  // Retrieve the value after --pin
  pinValue = process.argv[pinIndex + 1];
}

const pin = (pinValue || 'bot');

// Checks for --name and if it has a value
const nameIndex = process.argv.indexOf('--name');
let nameValue;

if (nameIndex > -1) {
  // Retrieve the value after --name
  nameValue = process.argv[nameIndex + 1];
}

const name = (nameValue || 'bot');

console.log("Joining kahoot...");
client.join(`${pin}`/* Or any other kahoot game pin */, `${name}`);
client.on("Joined", () => {
  console.log("I joined the Kahoot!");
});
client.on("QuizStart", () => {
  console.log("The quiz has started!");
});
client.on("QuestionStart", question => {
  console.log("A new question has started, answering the first answer.");
  question.answer(0);
});
client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

