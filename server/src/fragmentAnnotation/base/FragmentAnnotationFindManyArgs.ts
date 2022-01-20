import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FragmentAnnotationWhereInput } from "./FragmentAnnotationWhereInput";
import { Type } from "class-transformer";
import { FragmentAnnotationOrderByInput } from "./FragmentAnnotationOrderByInput";

@ArgsType()
class FragmentAnnotationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FragmentAnnotationWhereInput,
  })
  @Field(() => FragmentAnnotationWhereInput, { nullable: true })
  @Type(() => FragmentAnnotationWhereInput)
  where?: FragmentAnnotationWhereInput;

  @ApiProperty({
    required: false,
    type: FragmentAnnotationOrderByInput,
  })
  @Field(() => FragmentAnnotationOrderByInput, { nullable: true })
  @Type(() => FragmentAnnotationOrderByInput)
  orderBy?: FragmentAnnotationOrderByInput;

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

export { FragmentAnnotationFindManyArgs };
