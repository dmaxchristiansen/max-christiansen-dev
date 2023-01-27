export interface SlideProps {
  internalId: string;
  index: number;
  attribution: string;
  title: string;
  quote: string;
  thumbnailImageUrl: string;
  videoPreviewImageUrl: string;
  videoPlaybackId: string;
}

export interface VideoCarouselProps {
  header?: string;
  slideConfig: SlideProps[];
}
