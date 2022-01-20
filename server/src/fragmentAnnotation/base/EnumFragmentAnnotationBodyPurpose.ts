import { registerEnumType } from "@nestjs/graphql";

export enum EnumFragmentAnnotationBodyPurpose {
  Tagging = "Tagging",
  Commenting = "Commenting",
}

registerEnumType(EnumFragmentAnnotationBodyPurpose, {
  name: "EnumFragmentAnnotationBodyPurpose",
});
