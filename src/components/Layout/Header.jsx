import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const CustomHeader = () => {
  return (
    <div className="flex items-center bg-blue-500 text-white px-4 py-2">
      <img
        src="/path/to/logo.png"
        alt="Logo"
        className="w-8 h-8 mr-2"
      />
      <h1 className="text-lg font-semibold">گفتگو با ربات من</h1>
    </div>
  );
};

const botConfig = {
  botName: "MyBot",
  initialMessages: [createChatBotMessage("سلام! چطور می‌توانم کمکتان کنم؟")],
  customComponents: {
    header: () => <CustomHeader />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f1f1f1",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
};

export default botConfig;
