import { ArgsType, Field } from "@nestjs/graphql";
import { MediaRecordWhereUniqueInput } from "./MediaRecordWhereUniqueInput";

@ArgsType()
class DeleteMediaRecordArgs {
  @Field(() => MediaRecordWhereUniqueInput, { nullable: false })
  where!: MediaRecordWhereUniqueInput;
}

export { DeleteMediaRecordArgs };
