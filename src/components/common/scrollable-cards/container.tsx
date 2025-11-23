"use client"
import { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { ScrollObserver, valueAtPercentage } from "aatjs";


function idGen() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  return Array.from({
    length: 5
  }).map(() => {
    const i = Math.floor(Math.random() * chars.length);
    return chars[i];
  }).join('')
}

interface ItemProps<T> {
  item: T;
}

export interface ScrollableContainerProps<T> {
  data: T[];
  renderItem: ({ item }: ItemProps<T>) => React.ReactNode;
  extractKey: (item: T) => string;
}
export function ScrollableContainer<T>({ data, renderItem, extractKey }: ScrollableContainerProps<T>) {

  const cardClassName = useMemo(() => `card-${idGen()}`, []);

  useEffect(() => {

    const cards = document.querySelectorAll<HTMLDivElement>(`.${cardClassName}`);

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 100 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.05;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector<HTMLDivElement>('.card__inner');

      ScrollObserver.Element(nextCard, { offsetTop, offsetBottom: window.innerHeight - card.clientHeight }).onScroll(({ percentageY }) => {
        cardInner!.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY
        });
        cardInner!.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.9,
          percentage: percentageY

        })})`

      })



    })


  }, [cardClassName]);


  return (
    <div className="w-full flex flex-col">
      {data.map(item => (
        <div className={twMerge(cardClassName, "sticky top-0")} key={extractKey(item)}>
          <div className="card__inner origin-top">
            {renderItem({ item })}
          </div>
        </div>
      ))}
    </div>
  );
}
