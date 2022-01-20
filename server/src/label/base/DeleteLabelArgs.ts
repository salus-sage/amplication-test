import { ArgsType, Field } from "@nestjs/graphql";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";

@ArgsType()
class DeleteLabelArgs {
  @Field(() => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
}

export { DeleteLabelArgs };
