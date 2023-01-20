export type ElementWrapper = ({
  element,
}: {
  element: React.ReactElement;
}) => React.ReactElement;

const wrapperFunctionReducer = (
  wrapper: ElementWrapper,
  currentWrapper: ElementWrapper,
): ElementWrapper => {
  return ({ element }) => wrapper({ element: currentWrapper({ element }) });
};

export const wrapRootWithProviders = (
  wrappers: ElementWrapper[],
): ElementWrapper => {
  return ({ element }: { element: React.ReactElement }) => {
    return wrappers?.length
      ? wrappers.reduce(wrapperFunctionReducer)({ element })
      : element;
  };
};
