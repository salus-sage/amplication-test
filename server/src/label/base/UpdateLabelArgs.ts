import { ArgsType, Field } from "@nestjs/graphql";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";
import { LabelUpdateInput } from "./LabelUpdateInput";

@ArgsType()
class UpdateLabelArgs {
  @Field(() => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
  @Field(() => LabelUpdateInput, { nullable: false })
  data!: LabelUpdateInput;
}

export { UpdateLabelArgs };
