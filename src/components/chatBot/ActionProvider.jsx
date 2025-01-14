import { fetchPostData } from '../../utils/apiService'; 
import translations from '../../utils/translations';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, language = 'fa') {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.language = Object.prototype.hasOwnProperty.call(translations, language) ? language : 'fa';
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
    const loadingMessage = this.createChatBotMessage(this.getTranslation('loading'));
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, loadingMessage],
    }));

    try {
      console.log("Fetching data from API...");
      const title = await fetchPostData();
      console.log("API response received:", title);
      const message = this.createChatBotMessage(`${this.getTranslation('apiResponse')} ${title}`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.error("Error fetching data:", error);
      const errorMessage = this.createChatBotMessage(this.getTranslation('error'));
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;