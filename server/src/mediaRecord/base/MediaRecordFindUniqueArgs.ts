import { ArgsType, Field } from "@nestjs/graphql";
import { MediaRecordWhereUniqueInput } from "./MediaRecordWhereUniqueInput";

@ArgsType()
class MediaRecordFindUniqueArgs {
  @Field(() => MediaRecordWhereUniqueInput, { nullable: false })
  where!: MediaRecordWhereUniqueInput;
}

export { MediaRecordFindUniqueArgs };
