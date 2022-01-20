import { ArgsType, Field } from "@nestjs/graphql";
import { FragmentAnnotationWhereUniqueInput } from "./FragmentAnnotationWhereUniqueInput";

@ArgsType()
class DeleteFragmentAnnotationArgs {
  @Field(() => FragmentAnnotationWhereUniqueInput, { nullable: false })
  where!: FragmentAnnotationWhereUniqueInput;
}

export { DeleteFragmentAnnotationArgs };
