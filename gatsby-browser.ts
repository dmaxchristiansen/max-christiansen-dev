export {};
/*
 * Anchor link bug encountered when updating from Gatsby v4 to v5
 *
 * TS solutions adapted from
 * https://github.com/gatsbyjs/gatsby/issues/21120#issuecomment-581141246
 * and
 * https://github.com/gatsbyjs/gatsby/issues/25778#issuecomment-734067757
 *
 */

// interface LocationProps {
//   location: {
//     hash: string;
//   };
// }

// interface TargetElementProps extends Element {
//   offsetTop: number;
// }

// const scrollToAnchor = (location: { hash: string }) => {
//   if (location && location.hash) {
//     const targetElement: TargetElementProps | null = document.querySelector(
//       location.hash,
//     );

//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   } else {
//     window.scrollTo(0, 0);
//   }

//   return true;
// };

// export const onRouteUpdate = ({ location }: LocationProps) =>
//   scrollToAnchor(location);
