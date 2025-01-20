class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      if (lowerCaseMessage.trim() === '') {
        return;
      }
      
      this.actionProvider.defaultResponse(message);
    }
  }
  
  export default MessageParser;
  