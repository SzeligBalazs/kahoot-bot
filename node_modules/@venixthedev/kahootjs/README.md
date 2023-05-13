# @venixthedev/KahootJS
Just an working fix to replace old kahoot.js-updated.


# About
Kahoot.js-updated was a library to interact with the Kahoot API. KahootJS now fixed the only thing that was blocking the old one from working

**Installation requires Node.js v12 or higher.**

![NPM](https://nodei.co/npm/@venixthedev/kahootjs.png)

# Install
```bash
npm install @venixthedev/kahootjs
```
or
```bas
yarn add @venixthedev/kahootjs
```

# Basic Example
```js
const Kahoot = require("@venixthedev/kahootjs");
const client = new Kahoot();
console.log("Joining kahoot...");
client.join(9802345 /* Or any other kahoot game pin */, "kahoot.js");
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
```