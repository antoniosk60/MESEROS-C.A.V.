import React, { useEffect, useState } from 'react';
import { DEFAULT_IMAGE_FALLBACK_SRC } from './imageFallback';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

const ImageWithFallback: React.FC<Props> = ({ src, fallbackSrc = DEFAULT_IMAGE_FALLBACK_SRC, onError, ...rest }) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...rest}
      src={currentSrc}
      onError={(e) => {
        onError?.(e);
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;

