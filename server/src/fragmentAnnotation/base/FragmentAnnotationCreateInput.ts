import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFragmentAnnotationBodyPurpose } from "./EnumFragmentAnnotationBodyPurpose";
import { IsEnum, IsOptional, IsString } from "class-validator";
@InputType()
class FragmentAnnotationCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumFragmentAnnotationBodyPurpose,
  })
  @IsEnum(EnumFragmentAnnotationBodyPurpose)
  @IsOptional()
  @Field(() => EnumFragmentAnnotationBodyPurpose, {
    nullable: true,
  })
  bodyPurpose?: "Tagging" | "Commenting" | null;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  targetSrc!: string;
}
export { FragmentAnnotationCreateInput };
