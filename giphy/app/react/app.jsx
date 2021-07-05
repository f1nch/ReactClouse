import React, { useEffect, useState } from 'react';
import { getSearchResults } from '../http/search';
import { getTrending } from '../http/trending';
import { Search } from './features/search/search';
import { Grid } from './features/grid/grid';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMore = () => {
    setIsLoading(true);
    const loadMoreFn = searchTerm !== '' ? getTrending : getSearchResults;
    loadMoreFn(images.length, searchTerm).then((imgResp) => {
      setImages((prevImgs) => [...prevImgs, ...imgResp]);
      setIsLoading(false);
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const imageResp = await getSearchResults(images.length, searchTerm);
    setImages(imageResp);
    setIsLoading(false);
  };

  const onInputChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    (async function initImages() {
      const imageResp = await getTrending();

      if (imageResp.length) {
        setImages(imageResp);
      }

      setIsLoading(false);
    }());
  }, []);

  return (
    <div>
      <h1>Giphy Search App</h1>
      <Search searchTerm={searchTerm} onFormSubmit={onFormSubmit} onInputChange={onInputChange} />

      {isLoading ? (
        <div className="app__loading">Loading!</div>
      ) : (
        <Grid images={images} handleLoadMore={handleLoadMore} />
      )}

    </div>
  );
};
