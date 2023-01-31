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

export interface VisibilityProps {
  isVisible: boolean | undefined;
}

export interface ActionProps {
  action: "prev" | "next" | "reset" | undefined;
}

export interface TransitionProps {
  isTransitioned: boolean | undefined;
}
