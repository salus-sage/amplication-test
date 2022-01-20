import { FragmentAnnotation as TFragmentAnnotation } from "../api/fragmentAnnotation/FragmentAnnotation";

export const FRAGMENTANNOTATION_TITLE_FIELD = "selectorValue";

export const FragmentAnnotationTitle = (
  record: TFragmentAnnotation
): string => {
  return record.selectorValue || record.id;
};
