import { FragmentAnnotation as TFragmentAnnotation } from "../api/fragmentAnnotation/FragmentAnnotation";

export const FRAGMENTANNOTATION_TITLE_FIELD = "targetFormat";

export const FragmentAnnotationTitle = (
  record: TFragmentAnnotation
): string => {
  return record.targetFormat || record.id;
};
