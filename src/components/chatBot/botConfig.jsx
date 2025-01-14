import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Logo from '../../assets/img/logo.png'
import FlightBotAvatar from '../../assets/img/bot.png';
import UserAvatar from '../../assets/img/user.png';
import translations from '../../utils/translations';

const botName = "امید بانک";

const botConfig = {
  language: translations.fa,
  botName: botName,
  initialMessages: [
    createChatBotMessage(translations.fa.greeting),
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
    botAvatar: (props) =>  
    <div className="flex justify-center items-center p-2">
    <img className="h-10 w-10  mx-1 rounded-full" src={FlightBotAvatar} {...props} />
    </div>,

     userAvatar: (props) => <div className="flex justify-center items-center p-2">
     <img className="h-10 w-10  mx-1 rounded-full" src={UserAvatar} {...props} />
     </div>,
  },

  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #000",
    },
    // Overrides the chat button styles
    chatButton: { // Change this color as needed
      borderRadius: "50%", // Add border radius for rounded corners
      color: "#fff", // Change text color
      padding: "5px", // Adjust padding
      fontSize: "16px", // Change font size
      fontWeight: "bold", // Make text bold
      cursor: "pointer", // Change cursor to pointer
      border: "none",
      width: "50px",
      height: "50px", // Remove border
    },
  }
};

export default botConfig;

