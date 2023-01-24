export interface SlideProps {
  index: number;
  attribution: string;
  title: string;
  quote: string;
  thumbnailImageUrl: string;
  videoPreviewImageUrl: string;
  videoPlaybackId: string;
}

export interface SliderProps {
  slideConfig: SlideProps[];
}

export interface SliderLengthProps {
  sliderLength: number;
}

export interface ActiveIndexProps {
  activeIndex: number;
}

export interface SlideIndexProps {
  slideIndex: number;
}
