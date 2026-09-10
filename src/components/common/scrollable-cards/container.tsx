"use client"
import { useEffect, useRef } from "react";

interface ItemProps<T> {
  item: T;
}

export interface ScrollableContainerProps<T> {
  data: T[];
  renderItem: ({ item }: ItemProps<T>) => React.ReactNode;
  extractKey: (item: T) => string;
}
export function ScrollableContainer<T>({ data, renderItem, extractKey }: ScrollableContainerProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLDivElement>('[data-stacked-card]'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCards = () => {
      const isMobile = window.innerWidth < 768;
      const baseOffset = isMobile ? 72 : 100;
      const offsetStep = isMobile ? 12 : 20;
      const scaleStep = isMobile ? 0.025 : 0.05;

      cards.forEach((card, index) => {
        const offsetTop = baseOffset + index * offsetStep;
        const cardInner = card.querySelector<HTMLDivElement>('.card__inner');
        const nextCard = cards[index + 1];

        card.style.paddingTop = `${offsetTop}px`;
        if (!cardInner) return;

        if (!nextCard || prefersReducedMotion.matches) {
          cardInner.style.transform = '';
          cardInner.style.filter = '';
          return;
        }

        const start = offsetTop + cardInner.offsetHeight;
        const progress = Math.min(1, Math.max(0, (start - nextCard.getBoundingClientRect().top) / Math.max(cardInner.offsetHeight, 1)));
        const targetScale = 1 - (cards.length - 1 - index) * scaleStep;
        const scale = 1 - (1 - targetScale) * progress;

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${1 - 0.1 * progress})`;
      });
    };

    updateCards();
    window.addEventListener('scroll', updateCards, { passive: true });
    window.addEventListener('resize', updateCards);
    prefersReducedMotion.addEventListener('change', updateCards);

    return () => {
      window.removeEventListener('scroll', updateCards);
      window.removeEventListener('resize', updateCards);
      prefersReducedMotion.removeEventListener('change', updateCards);
    };
  }, [data]);


  return (
    <div ref={containerRef} className="flex w-full flex-col">
      {data.map(item => (
        <div data-stacked-card className="sticky top-0" key={extractKey(item)}>
          <div className="card__inner origin-top will-change-transform">
            {renderItem({ item })}
          </div>
        </div>
      ))}
    </div>
  );
}
