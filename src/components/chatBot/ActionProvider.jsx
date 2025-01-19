import { fetchPostData } from '../../utils/apiService'; 
import translations from '../../utils/translations';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, language = 'fa') {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.language = Object.prototype.hasOwnProperty.call(translations, language) ? language : 'fa';
    this.isLoading = false;
  }

  getTranslation(key) {
    if (!translations[this.language] || !translations[this.language][key]) {
        console.error(`Translation missing for key "${key}" in language "${this.language}"`);
        return translations['fa'][key] || 'Translation error';
    }
    return translations[this.language][key];
  }

  greet() {
    const message = this.createChatBotMessage(this.getTranslation('greeting'));
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  async defaultResponse() {
    const loadingMessage = this.createChatBotMessage(
      "⏳...",
      {
        loading: true,
        withAvatar: true,
      }
    );
    
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, loadingMessage],
    }));

    try {
      const title = await fetchPostData();
      this.setState((prev) => ({
        ...prev,
        messages: prev.messages.map((msg, index) => {
          if (index === prev.messages.length - 1) {
            return this.createChatBotMessage(`${this.getTranslation('apiResponse')} ${title}`, {
              loading: false,
              withAvatar: true,
            });
          }
          return msg;
        }),
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState((prev) => ({
        ...prev,
        messages: prev.messages.map((msg, index) => {
          if (index === prev.messages.length - 1) {
            return this.createChatBotMessage(this.getTranslation('error'), {
              loading: false,
              withAvatar: true,
            });
          }
          return msg;
        }),
      }));
    }
  }
}

export default ActionProvider;