'use client';
import { useEffect, useRef } from 'react';
import styles from './Tiles.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';

export default function Tiles({ sponsors }) {
  const scrollRef = useRef(null);
  const itemsRef = useRef([]);

  const { isMobile } = useWindowSize();

  // Scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.5;

    const animate = () => {
      container.scrollLeft += speed;

      const singleContentWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= singleContentWidth) {
        container.scrollLeft -= singleContentWidth;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate sponsors for infinite scroll
  const sponsorsWithDuplicates = !isMobile
    ? [...sponsors, ...sponsors]
    : sponsors;

  return (
    <div className={styles.scrollContainer} ref={scrollRef}>
      {sponsorsWithDuplicates.map((mediaItem, index) => {
        return (
          <div
            key={`${mediaItem.src}-${index}`}
            className={clsx(styles.logo)}
            ref={el => (itemsRef.current[index] = el)}
          >
            <Image
              src={mediaItem.src}
              alt={mediaItem.alt}
              className={styles.image}
            />
          </div>
        );
      })}
    </div>
  );
}
