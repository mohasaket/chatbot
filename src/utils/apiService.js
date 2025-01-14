// apiService.js
import axios from "axios";

export const fetchPostData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
    return response.data.title;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("خطایی رخ داده است.");
  }
};
