import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabelService } from "./label.service";
import { LabelControllerBase } from "./base/label.controller.base";

@swagger.ApiTags("labels")
@common.Controller("labels")
export class LabelController extends LabelControllerBase {
  constructor(
    protected readonly service: LabelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
