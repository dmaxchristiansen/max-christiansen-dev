export interface PreviewCarouselCardProps {
  index: number;
  thumbnailImageUrl: string;
  backgroundImageUrl: string;
  muxVideoId: string;
  videoTitle: string;
}

export interface VisibilityProps {
  isVisible: boolean | undefined;
}

export interface ActionProps {
  action: "prev" | "next" | "reset" | undefined;
}

export interface TransitionProps {
  isTransitioned: boolean | undefined;
}
