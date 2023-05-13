const Kahoot = require("@venixthedev/kahootjs");
const clients = new Kahoot();
let kahoots = [];
clients.setMaxListeners(0);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter game PIN: ", (gp) => {
  readline.question("Enter a name for all bots: ", (name) => {
    readline.question("Enter the number of bots: ", (number) => {
      readline.close();
      if (name != null) {
        console.log("Joining kahoot...");
        for (let i = 0; i < number; i++) {
          kahoots.push(new Kahoot());

          kahoots[i].join(gp, name + " " + i).catch((error) => {
            console.log(error);
          });

          kahoots[i].on("Joined", () => {
            console.log("A bot joined the Kahoot quiz!");
          });
          kahoots[i].on("QuizStart", () => {
            console.log("The quiz started!");
          });
          kahoots[i].on("QuestionStart", (question) => {
            // picking a random answer to the question each bot
            question.answer(Math.floor(Math.random() * 4));
          });
          kahoots[i].on("QuizEnd", () => {
            console.log("The quiz has ended.");
          });
        }
      }
    });
  });
});
