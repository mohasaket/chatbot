class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      if (message.toLowerCase().includes("سلام")) {
        this.actionProvider.greet();
      } else {
        this.actionProvider.defaultResponse();
      }
    }
  }
  
  export default MessageParser;
  