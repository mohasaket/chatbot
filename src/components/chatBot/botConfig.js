import { createChatBotMessage } from "react-chatbot-kit";

const botConfig = {
  botName: "MyBot",
  initialMessages: [createChatBotMessage("سلام به شما چه طور میتوانم کمکتون کنم؟")],
};

export default botConfig;
