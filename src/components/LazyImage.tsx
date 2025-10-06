import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/600/400' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback vers placeholder en cas d'erreur
    e.currentTarget.src = placeholder;
    setIsLoaded(true);
  };

  return (
    <div className={`lazy-image-container ${className}`} ref={imgRef}>
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
            loading="lazy"
          />
          {!isLoaded && (
            <div className="image-loading">
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;