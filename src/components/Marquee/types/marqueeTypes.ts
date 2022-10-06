export interface MarqueeImageProps {
  url: string;
  altText: string;
  width: number;
}

export interface MarqueeProps {
  pt: string;
  pb: string;
  backwardScroll?: boolean;
  images: MarqueeImageProps[];
}

export interface SectionContainerProps {
  pt: string;
  pb: string;
}

export interface MarqueeWrapperProps {
  backwardScroll: boolean;
  marqueeSpeed: number;
}
