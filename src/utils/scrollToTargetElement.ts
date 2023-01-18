export const scrollToTargetElement = (
  elementId: string,
  offsetTopValue: number,
) => {
  const targetElement = document.getElementById(elementId);
  const motionQuery = window.matchMedia("(prefers-reduced-motion)");
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - offsetTopValue,
      behavior: motionQuery.matches ? "auto" : "smooth",
    });
  }
};
