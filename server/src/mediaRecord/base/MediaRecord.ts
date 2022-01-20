import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FragmentAnnotation } from "../../fragmentAnnotation/base/FragmentAnnotation";
import { Label } from "../../label/base/Label";
import { Project } from "../../project/base/Project";
import { Tag } from "../../tag/base/Tag";
@ObjectType()
class MediaRecord {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filename!: string | null;

  @ApiProperty({
    required: false,
    type: () => [FragmentAnnotation],
  })
  @ValidateNested()
  @Type(() => FragmentAnnotation)
  @IsOptional()
  fragmentAnnotations?: Array<FragmentAnnotation>;

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
  labels?: Array<Label>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  projects?: Array<Project>;

  @ApiProperty({
    required: false,
    type: () => [Tag],
  })
  @ValidateNested()
  @Type(() => Tag)
  @IsOptional()
  tags?: Array<Tag>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  type!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  url!: string;
}
export { MediaRecord };
