import { FragmentAnnotation as TFragmentAnnotation } from "../api/fragmentAnnotation/FragmentAnnotation";

export const FRAGMENTANNOTATION_TITLE_FIELD = "selectorConformsTo";

export const FragmentAnnotationTitle = (
  record: TFragmentAnnotation
): string => {
  return record.selectorConformsTo || record.id;
};
