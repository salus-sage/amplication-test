import { ArgsType, Field } from "@nestjs/graphql";
import { LabelCreateInput } from "./LabelCreateInput";

@ArgsType()
class CreateLabelArgs {
  @Field(() => LabelCreateInput, { nullable: false })
  data!: LabelCreateInput;
}

export { CreateLabelArgs };
