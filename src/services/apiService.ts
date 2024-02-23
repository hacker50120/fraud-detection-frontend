import API from '../api/api';
import {API_ENDPOINTS} from '../api/endPoints';


export const shortenUrl = async (url) => {
  try {
    const response = await API.post(API_ENDPOINTS.SHORTEN_URL, {url});
    return response.data;
  } catch (error) {
    throw error;
  }
};