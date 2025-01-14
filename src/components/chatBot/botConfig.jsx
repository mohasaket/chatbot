import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Logo from '../../assets/img/logo.png'
const botName = "امید بانک";

const botConfig = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`سلام امید بانکی عزیز. چه طور میتوانم کمکتون کنم؟`),
    createCustomMessage('Test', 'custom'),
  ],
  
  customComponents: {
    header: () => (
      <div style={{ 
        backgroundColor: '#fff',
        padding: "12px",
        borderRadius: "3px",
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent:'flex-end'
      }}>
        <img 
          src={Logo} 
          alt={botName+'Logo'} 
          style={{ height: 'auto',width:'150px' }}
        />
        {/* <span style={{ fontWeight: 'bold' }}>{botName}</span> */}
      </div>
    ),
  },
};

export default botConfig;
