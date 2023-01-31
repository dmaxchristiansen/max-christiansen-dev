export interface PreviewCarouselCardProps {
  internalId: string;
  index: number;
  attribution: string;
  title: string;
  quote: string;
  thumbnailImageUrl: string;
  backgroundImageUrl: string;
  muxVideoId: string;
}

export interface PreviewCarouselProps {
  slideConfig: PreviewCarouselCardProps[];
}
