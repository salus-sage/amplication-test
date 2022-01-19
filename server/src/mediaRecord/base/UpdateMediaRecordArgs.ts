import { ArgsType, Field } from "@nestjs/graphql";
import { MediaRecordWhereUniqueInput } from "./MediaRecordWhereUniqueInput";
import { MediaRecordUpdateInput } from "./MediaRecordUpdateInput";

@ArgsType()
class UpdateMediaRecordArgs {
  @Field(() => MediaRecordWhereUniqueInput, { nullable: false })
  where!: MediaRecordWhereUniqueInput;
  @Field(() => MediaRecordUpdateInput, { nullable: false })
  data!: MediaRecordUpdateInput;
}

export { UpdateMediaRecordArgs };
