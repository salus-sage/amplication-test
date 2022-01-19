import { ArgsType, Field } from "@nestjs/graphql";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";

@ArgsType()
class LabelFindUniqueArgs {
  @Field(() => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
}

export { LabelFindUniqueArgs };
