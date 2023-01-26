export interface SlideProps {
  index: number;
  imageUrl: string;
  videoUrl: string;
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
