import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import InputTextWithBorders from '../Atoms/InputTextWithBorders';
import ButtonDownload from '../Atoms/Buttons/ButtonDownload';


const InputImage = ({
  ckey,
  /** image */
  source,
  alt,
  selected,
  download,
  canDl,
  /** input */
  onChange,
  onDownload,
  inputs
}) => {

  return (
    <div key={`InputImage_${ckey}`} className="col-flex-between"
      style={{ height: '100%' }}
    >
      <ImageItem
        ckey={`${ckey}_image`}
        source={source}
        alt={alt}
        selected={selected}
        download={download}
        canDl={canDl}
      />
      <div key={`DragAndDropItem_${ckey}`} className="row-flex-centered mt-4"
        style={{ width: '100%' }}
      >
        {inputs?.map((input, index) => <InputTextWithBorders
          key={`InputImagecall_${ckey}_${input.key}_${index}`}
          ckey={`InputImage_${ckey}_${input.key}_${index}`}
          value={input.value}
          name={input.key}
          placeholder={input.placeholder}
          onChange={(value) => onChange(value)}
        />
        )}
      </div>
      {download ? (
        <div
          className="row-flex-centered mt-4"
          style={{ width: '100%' }}
        >
          <ButtonDownload data={source} /*onValidate={onDownload}*/ />
        </div>
      ) : (
        <div
          className="col-flex-centered"
          style={{ width: '100%', height: '70px' }}
        />
      )}
    </div>
  );
};

InputImage.propTypes = {
  ckey: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

InputImage.defaultProps = {
  ckey: 'InputImage',
  source: '',
  alt: '',
  selected: false,
  onSelect: () => { console.log("Try to select") }
};

export default InputImage;
