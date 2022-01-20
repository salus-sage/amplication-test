import { registerEnumType } from "@nestjs/graphql";

export enum EnumFragmentAnnotationSelectorType {
  FragmentSelector = "FragmentSelector",
  CssSelector = "CssSelector",
  XPathSelector = "XPathSelector",
  TextQuoteSelector = "TextQuoteSelector",
}

registerEnumType(EnumFragmentAnnotationSelectorType, {
  name: "EnumFragmentAnnotationSelectorType",
});
