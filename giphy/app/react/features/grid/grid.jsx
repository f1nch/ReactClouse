import React from 'react';
import './grid.scss';

export const Grid = ({ images, handleLoadMore }) => {
  if (images.length) {
    return (
      <div className="grid">
        <div className="grid__images">
          {images.map((img) => (
            <a
              href={img.url} key={img.id} target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img.images.fixed_height_small.url} alt={img.title} />
            </a>
          ))}
        </div>
        <div className="grid__load-more">
          <button type="button" onClick={handleLoadMore}>Load More</button>
        </div>
      </div>
    );
  }

  return <div className="grid__no-results">No Results</div>;
};
