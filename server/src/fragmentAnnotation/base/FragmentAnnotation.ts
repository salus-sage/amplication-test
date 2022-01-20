import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Label } from "../../label/base/Label";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Tag } from "../../tag/base/Tag";
@ObjectType()
class FragmentAnnotation {
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
    type: () => [Tag],
  })
  @ValidateNested()
  @Type(() => Tag)
  @IsOptional()
  bodyTags?: Array<Tag>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
