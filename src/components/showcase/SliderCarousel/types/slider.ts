export interface SlideProps {
  index: number;
  backgroundImageUrl: string;
  muxVideoId: string;
  videoTitle: string;
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
