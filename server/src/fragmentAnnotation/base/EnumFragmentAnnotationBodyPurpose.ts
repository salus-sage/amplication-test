import { registerEnumType } from "@nestjs/graphql";

export enum EnumFragmentAnnotationBodyPurpose {
  Tagging = "Tagging",
  Commenting = "Commenting",
  Describing = "Describing",
}

registerEnumType(EnumFragmentAnnotationBodyPurpose, {
  name: "EnumFragmentAnnotationBodyPurpose",
});
