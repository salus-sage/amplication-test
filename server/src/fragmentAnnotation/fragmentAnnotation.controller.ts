import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FragmentAnnotationService } from "./fragmentAnnotation.service";
import { FragmentAnnotationControllerBase } from "./base/fragmentAnnotation.controller.base";

@swagger.ApiTags("fragment-annotations")
@common.Controller("fragment-annotations")
export class FragmentAnnotationController extends FragmentAnnotationControllerBase {
  constructor(
    protected readonly service: FragmentAnnotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
