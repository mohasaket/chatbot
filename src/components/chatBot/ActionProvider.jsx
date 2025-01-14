import { fetchPostData } from '../../utils/apiService'; 

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
      const title = await fetchPostData(); // Call the API service function
      const message = this.createChatBotMessage(`API Response: ${title}`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    } catch (error) {
      const errorMessage = this.createChatBotMessage(error.message);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;
