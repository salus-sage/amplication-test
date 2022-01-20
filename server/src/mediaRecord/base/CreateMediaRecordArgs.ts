import { ArgsType, Field } from "@nestjs/graphql";
import { MediaRecordCreateInput } from "./MediaRecordCreateInput";

@ArgsType()
class CreateMediaRecordArgs {
  @Field(() => MediaRecordCreateInput, { nullable: false })
  data!: MediaRecordCreateInput;
}

export { CreateMediaRecordArgs };
