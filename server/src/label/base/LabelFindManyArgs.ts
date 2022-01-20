import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LabelWhereInput } from "./LabelWhereInput";
import { Type } from "class-transformer";
import { LabelOrderByInput } from "./LabelOrderByInput";

@ArgsType()
class LabelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LabelWhereInput,
  })
  @Field(() => LabelWhereInput, { nullable: true })
  @Type(() => LabelWhereInput)
  where?: LabelWhereInput;

  @ApiProperty({
    required: false,
    type: LabelOrderByInput,
  })
  @Field(() => LabelOrderByInput, { nullable: true })
  @Type(() => LabelOrderByInput)
  orderBy?: LabelOrderByInput;

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

export { LabelFindManyArgs };
