import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediaRecordWhereInput } from "./MediaRecordWhereInput";
import { Type } from "class-transformer";
import { MediaRecordOrderByInput } from "./MediaRecordOrderByInput";

@ArgsType()
class MediaRecordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MediaRecordWhereInput,
  })
  @Field(() => MediaRecordWhereInput, { nullable: true })
  @Type(() => MediaRecordWhereInput)
  where?: MediaRecordWhereInput;

  @ApiProperty({
    required: false,
    type: MediaRecordOrderByInput,
  })
  @Field(() => MediaRecordOrderByInput, { nullable: true })
  @Type(() => MediaRecordOrderByInput)
  orderBy?: MediaRecordOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MediaRecordFindManyArgs };
