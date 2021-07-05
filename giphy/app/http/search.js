import { giphyApiKey, giphyBaseUrl } from './httpUtils';

export const getSearchResults = async (imgOffset = 0, searchTerm = '') => {
  try {
    const resp = await fetch(`${giphyBaseUrl}/gifs/search?api_key=${giphyApiKey}&limit=50&offset=${imgOffset}&q=${searchTerm}`);
    const images = await resp.json();
    return images.data;
  } catch {
    return [];
  }
};
