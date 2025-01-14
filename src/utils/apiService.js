// apiService.js
import axios from "axios";
import translations from "./translations";
export const fetchPostData = async () => {

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return response.data.title;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error(translations.fa.error);
  }
};
