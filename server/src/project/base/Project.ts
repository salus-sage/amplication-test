import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/base/User";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MediaRecord } from "../../mediaRecord/base/MediaRecord";
@ObjectType()
class Project {
  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  collaborators?: Array<User>;

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
    type: () => [MediaRecord],
  })
  @ValidateNested()
  @Type(() => MediaRecord)
  @IsOptional()
  media?: Array<MediaRecord>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  owner?: User;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Project };
