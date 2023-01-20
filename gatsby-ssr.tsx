import { GatsbySSR } from "gatsby";
import { wrapWithComponentViewContext } from "src/utils/providers/ComponentViewContextProvider";
import { wrapWithWindowResizeContext } from "src/utils/providers/WindowResizeContextProvider";
import { wrapRootWithProviders } from "src/utils/helpers/wrapRootWithProviders";

export const wrapRootElement: GatsbySSR["wrapRootElement"] =
  wrapRootWithProviders([
    wrapWithWindowResizeContext,
    wrapWithComponentViewContext,
  ]);

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: "en" });
};
