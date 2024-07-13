import axios from "axios";

const accessKey = 'HNh41ViAzvzccaIznC1RSnL6Udn725Y-OYS1HAbxdFc';
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (topic, currentPage) => {
    const response = await axios.get(`search/photos`, {
        params: { 
          query: topic,
          page: currentPage,
          per_page: 10,
        },
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      });
      return response.data.results
}
   