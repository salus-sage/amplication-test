import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFragmentAnnotationBodyPurpose } from "./EnumFragmentAnnotationBodyPurpose";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { EnumFragmentAnnotationSelectorType } from "./EnumFragmentAnnotationSelectorType";
@InputType()
class FragmentAnnotationUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumFragmentAnnotationBodyPurpose,
  })
  @IsEnum(EnumFragmentAnnotationBodyPurpose)
  @IsOptional()
  @Field(() => EnumFragmentAnnotationBodyPurpose, {
    nullable: true,
  })
  bodyPurpose?: "Tagging" | "Commenting" | "Describing" | null;

  @ApiProperty({
    required: false,
    enum: EnumFragmentAnnotationSelectorType,
  })
  @IsEnum(EnumFragmentAnnotationSelectorType)
  @IsOptional()
  @Field(() => EnumFragmentAnnotationSelectorType, {
    nullable: true,
  })
  selectorType?:
    | "FragmentSelector"
    | "CssSelector"
    | "XPathSelector"
    | "TextQuoteSelector"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  selectorValue?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetFormat?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetSrc?: string;
}
export { FragmentAnnotationUpdateInput };
