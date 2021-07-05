import { giphyApiKey, giphyBaseUrl } from './httpUtils';

export const getTrending = async (imgOffset = 0) => {
  try {
    const resp = await fetch(`${giphyBaseUrl}/gifs/trending?api_key=${giphyApiKey}&limit=50&offset=${imgOffset}`, { method: 'get' });
    const images = await resp.json();
    return images.data;
  } catch (e) {
    return [];
  }
};
