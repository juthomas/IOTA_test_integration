import React from 'react';
import PropTypes from 'prop-types';

const ImageItem = ({
  ckey,
  source,
  alt,
  selected,
  download,
  onDownload
}) => {
  return (
    <div className="col-flex-start"
      style={{ height: '300px' }}
    >
      <img
        key={`ImageItem_${ckey}`}
        src={source}
        alt={alt}
        className="carousel-image"
      />
    </div>
  );
};

ImageItem.propTypes = {
  ckey: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  selected: PropTypes.bool,
};

ImageItem.defaultProps = {
  ckey: 'ImageItem',
  source: '',
  alt: '',
  selected: false,
};

export default ImageItem;
