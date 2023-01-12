// Anchor link bug encountered when updating from Gatsby v4 to v5
// Solution adapted from https://github.com/gatsbyjs/gatsby/issues/21120#issuecomment-581141246

interface LocationProps {
  location: {
    hash: string;
  };
}

interface ElementProps extends Element {
  offsetTop: number;
}

const scrollToAnchor = (location: { hash: string }) => {
  if (location && location.hash) {
    const element: ElementProps | null = document.querySelector(location.hash);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return true;
};

export const onRouteUpdate = ({ location }: LocationProps) =>
  scrollToAnchor(location);
