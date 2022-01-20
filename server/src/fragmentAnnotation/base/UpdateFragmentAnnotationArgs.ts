import { ArgsType, Field } from "@nestjs/graphql";
import { FragmentAnnotationWhereUniqueInput } from "./FragmentAnnotationWhereUniqueInput";
import { FragmentAnnotationUpdateInput } from "./FragmentAnnotationUpdateInput";

@ArgsType()
class UpdateFragmentAnnotationArgs {
  @Field(() => FragmentAnnotationWhereUniqueInput, { nullable: false })
  where!: FragmentAnnotationWhereUniqueInput;
  @Field(() => FragmentAnnotationUpdateInput, { nullable: false })
  data!: FragmentAnnotationUpdateInput;
}

export { UpdateFragmentAnnotationArgs };
