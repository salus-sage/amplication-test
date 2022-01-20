import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FragmentAnnotation } from "../../fragmentAnnotation/base/FragmentAnnotation";
import { MediaRecord } from "../../mediaRecord/base/MediaRecord";
@ObjectType()
class Label {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  labelName!: string;

  @ApiProperty({
    required: false,
    type: () => [MediaRecord],
  })
  @ValidateNested()
  @Type(() => MediaRecord)
  @IsOptional()
  mediaRecords?: Array<MediaRecord>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Label };
