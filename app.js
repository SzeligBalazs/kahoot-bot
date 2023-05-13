const Kahoot = require("@venixthedev/kahootjs");
const clients = new Kahoot();
let kahoots = [];
clients.setMaxListeners(0);
console.log("Joining kahoot...");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter game PIN: ", (gp) => {
  
  readline.close();
  for (let i = 0; i < 256; i++) {
    kahoots.push(new Kahoot());

    kahoots[i].join(gp, "Pigeon " + i).catch((error) => {
      console.log(error);
      if(error) {
        
      }
    });

    kahoots[i].on("Joined", () => {
      console.log("I joined the Kahoot!");
    });
    kahoots[i].on("QuizStart", () => {
      console.log("The quiz has started!");
    });
    kahoots[i].on("QuestionStart", (question) => {
      question.answer(Math.floor(Math.random() * 4));
    });
    kahoots[i].on("QuizEnd", () => {
      console.log("The quiz has ended.");
    });
  }
});

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
