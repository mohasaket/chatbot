import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("سلام به شما چه طور میتوانم کمکتون کنم؟");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  async defaultResponse() {
    const loadingMessage = this.createChatBotMessage("در حال دریافت اطلاعات...");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, loadingMessage],
    }));

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      const message = this.createChatBotMessage(`API Response: ${response.data.title}`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      const errorMessage = this.createChatBotMessage("خطایی رخ داده است.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;
