// apiService.js
import axios from "axios";
import { dataModelChat } from '../models/dataModelChat';
import translations from "./translations";

export const fetchPostData = async () => {
  try {
    const response = await axios.post(
      "http://185.124.172.93:8000/api/chatbot/chat",
      dataModelChat
    );
    // console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    // console.error("Error in API call:", error);
    throw error;
  }
};
