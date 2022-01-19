import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MediaRecordService } from "./mediaRecord.service";
import { MediaRecordControllerBase } from "./base/mediaRecord.controller.base";

@swagger.ApiTags("media-records")
@common.Controller("media-records")
export class MediaRecordController extends MediaRecordControllerBase {
  constructor(
    protected readonly service: MediaRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
