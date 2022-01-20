import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFragmentAnnotationBodyPurpose } from "./EnumFragmentAnnotationBodyPurpose";
import { IsEnum, IsOptional } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class FragmentAnnotationWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumFragmentAnnotationBodyPurpose,
  })
  @IsEnum(EnumFragmentAnnotationBodyPurpose)
  @IsOptional()
  @Field(() => EnumFragmentAnnotationBodyPurpose, {
    nullable: true,
  })
  bodyPurpose?: "Tagging" | "Commenting";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  targetFormat?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  targetId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  targetSrc?: StringFilter;
}
export { FragmentAnnotationWhereInput };
