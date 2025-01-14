import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import {
  ActionProvider,
  botConfig,
  MessageParser,
} from "./components/chatBot/index";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-screen bg-white shadow-lg rounded-lg p-4">
        <Chatbot
          config={botConfig}
          placeholderText="متن پیام خود را اینجا وارد کنید..."
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default App;