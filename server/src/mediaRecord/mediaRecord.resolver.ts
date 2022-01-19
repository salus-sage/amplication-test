import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MediaRecordResolverBase } from "./base/mediaRecord.resolver.base";
import { MediaRecord } from "./base/MediaRecord";
import { MediaRecordService } from "./mediaRecord.service";

@graphql.Resolver(() => MediaRecord)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MediaRecordResolver extends MediaRecordResolverBase {
  constructor(
    protected readonly service: MediaRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
