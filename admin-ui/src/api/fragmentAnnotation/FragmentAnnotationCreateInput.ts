export type FragmentAnnotationCreateInput = {
  bodyPurpose?: "Tagging" | "Commenting" | null;
  targetFormat?: string | null;
  targetId?: string | null;
  targetSrc: string;
};
