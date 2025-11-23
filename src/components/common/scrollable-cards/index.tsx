import dynamic from 'next/dynamic';
import { ScrollableContainerProps } from './container';

type ScrollableContainerType = <T>(props: ScrollableContainerProps<T>) => React.ReactNode;

export const ScrollableContainer : ScrollableContainerType = dynamic(async () => {
  const { ScrollableContainer } = await import('./container');
  return ScrollableContainer;
}, {
  ssr: false
}) as unknown as ScrollableContainerType;
