import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FragmentAnnotationResolverBase } from "./base/fragmentAnnotation.resolver.base";
import { FragmentAnnotation } from "./base/FragmentAnnotation";
import { FragmentAnnotationService } from "./fragmentAnnotation.service";

@graphql.Resolver(() => FragmentAnnotation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FragmentAnnotationResolver extends FragmentAnnotationResolverBase {
  constructor(
    protected readonly service: FragmentAnnotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
