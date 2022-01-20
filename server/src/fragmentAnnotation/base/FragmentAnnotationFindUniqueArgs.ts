import { ArgsType, Field } from "@nestjs/graphql";
import { FragmentAnnotationWhereUniqueInput } from "./FragmentAnnotationWhereUniqueInput";

@ArgsType()
class FragmentAnnotationFindUniqueArgs {
  @Field(() => FragmentAnnotationWhereUniqueInput, { nullable: false })
  where!: FragmentAnnotationWhereUniqueInput;
}

export { FragmentAnnotationFindUniqueArgs };
