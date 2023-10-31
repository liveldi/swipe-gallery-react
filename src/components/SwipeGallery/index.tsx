import { useState, useRef, useEffect } from 'react';

import { Button } from '../Button';
import { Counter } from '../Counter';

import { useUpdateActiveIndex } from './hooks/useUpdateActiveIndex';

import './index.scss';

interface SwipeGalleryProps {
  images: {
    url: string;
    description: string;
  }[]
}

const increaseIndex = (index: number, size: number) => Math.min(index + 1, size - 1);

const decreaseIndex = (index: number) => Math.max(0, index - 1);

export const SwipeGallery = ({ images }: SwipeGalleryProps) => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollActiveIndex = useUpdateActiveIndex(containerRef);

  useEffect(() => {
    setActiveIndex(scrollActiveIndex)
  }, [ scrollActiveIndex ]);

  const move = (newActiveElement: number) => {
    const currentNode = containerRef?.current;

    if (!currentNode) {
      return;
    }

    const dataContainer = currentNode.getBoundingClientRect();
    setActiveIndex(newActiveElement);

    currentNode.scrollTo({
      left: newActiveElement * dataContainer.width,
      behavior: 'smooth',
    })
  }

  const isLoaded = (index: number) => (
    activeIndex - 1 === index
    || activeIndex + 1 === index
    || activeIndex === index
  );

  return (
    <div className="gallery">
      <div
        className="gallery-container"
        ref={containerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-container-item"
          >
            <img
              src={image.url}
              alt={image.description}
              loading={isLoaded(index) ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>
      <div className="navigation">
          <Button
            iconName="arrow-left"
            disabled={activeIndex === 0}
            onClick={() => move(decreaseIndex(activeIndex))}
          />
          <Counter
            activeIndex={activeIndex + 1}
            size={images.length}
          />
          <Button
            iconName="arrow-right"
            disabled={activeIndex === images.length - 1}
            onClick={() => move(increaseIndex(activeIndex, images.length))}
          />
      </div>
    </div>
  );
}