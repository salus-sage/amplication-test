import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Project } from "../../project/base/Project";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FragmentAnnotation } from "../../fragmentAnnotation/base/FragmentAnnotation";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  contributor?: Array<Project>;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Project],
  })
  @ValidateNested()
  @Type(() => Project)
  @IsOptional()
  projects?: Array<Project>;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

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
  username!: string;
}
export { User };
