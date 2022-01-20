import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateMediaRecordArgs } from "./CreateMediaRecordArgs";
import { UpdateMediaRecordArgs } from "./UpdateMediaRecordArgs";
import { DeleteMediaRecordArgs } from "./DeleteMediaRecordArgs";
import { MediaRecordFindManyArgs } from "./MediaRecordFindManyArgs";
import { MediaRecordFindUniqueArgs } from "./MediaRecordFindUniqueArgs";
import { MediaRecord } from "./MediaRecord";
import { LabelFindManyArgs } from "../../label/base/LabelFindManyArgs";
import { Label } from "../../label/base/Label";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { MediaRecordService } from "../mediaRecord.service";

@graphql.Resolver(() => MediaRecord)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MediaRecordResolverBase {
  constructor(
    protected readonly service: MediaRecordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  async _mediaRecordsMeta(
    @graphql.Args() args: MediaRecordFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [MediaRecord])
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  async mediaRecords(
    @graphql.Args() args: MediaRecordFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MediaRecord",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => MediaRecord, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "own",
  })
  async mediaRecord(
    @graphql.Args() args: MediaRecordFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "MediaRecord",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => MediaRecord)
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "create",
    possession: "any",
  })
  async createMediaRecord(
    @graphql.Args() args: CreateMediaRecordArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"MediaRecord"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MediaRecord)
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async updateMediaRecord(
    @graphql.Args() args: UpdateMediaRecordArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"MediaRecord"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MediaRecord)
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "delete",
    possession: "any",
  })
  async deleteMediaRecord(
    @graphql.Args() args: DeleteMediaRecordArgs
  ): Promise<MediaRecord | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Label])
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  async labels(
    @graphql.Parent() parent: MediaRecord,
    @graphql.Args() args: LabelFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Label",
    });
    const results = await this.service.findLabels(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Project])
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  async projects(
    @graphql.Parent() parent: MediaRecord,
    @graphql.Args() args: ProjectFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Project[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Project",
    });
    const results = await this.service.findProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  async tags(
    @graphql.Parent() parent: MediaRecord,
    @graphql.Args() args: TagFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tag[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tag",
    });
    const results = await this.service.findTags(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
