import { ArgsType, Field } from "@nestjs/graphql";
import { FragmentAnnotationCreateInput } from "./FragmentAnnotationCreateInput";

@ArgsType()
class CreateFragmentAnnotationArgs {
  @Field(() => FragmentAnnotationCreateInput, { nullable: false })
  data!: FragmentAnnotationCreateInput;
}

export { CreateFragmentAnnotationArgs };
