import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Label } from "../../label/base/Label";
import { MediaRecord } from "../../mediaRecord/base/MediaRecord";
import { EnumFragmentAnnotationBodyPurpose } from "./EnumFragmentAnnotationBodyPurpose";
import { EnumFragmentAnnotationSelectorType } from "./EnumFragmentAnnotationSelectorType";
import { Tag } from "../../tag/base/Tag";
@ObjectType()
class FragmentAnnotation {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  creator?: User | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Label],
  })
  @ValidateNested()
  @Type(() => Label)
  @IsOptional()
  bodyLabels?: Array<Label>;

  @ApiProperty({
    required: false,
    type: () => [MediaRecord],
  })
  @ValidateNested()
  @Type(() => MediaRecord)
  @IsOptional()
  mediaRecord?: Array<MediaRecord>;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  selectorConformsTo!: string | null;

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
  selectorValue!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Tag],
  })
  @ValidateNested()
  @Type(() => Tag)
  @IsOptional()
  bodyTags?: Array<Tag>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetFormat!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetId!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  targetSrc!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { FragmentAnnotation };
