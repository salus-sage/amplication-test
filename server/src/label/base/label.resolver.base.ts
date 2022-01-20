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
import { CreateLabelArgs } from "./CreateLabelArgs";
import { UpdateLabelArgs } from "./UpdateLabelArgs";
import { DeleteLabelArgs } from "./DeleteLabelArgs";
import { LabelFindManyArgs } from "./LabelFindManyArgs";
import { LabelFindUniqueArgs } from "./LabelFindUniqueArgs";
import { Label } from "./Label";
import { MediaRecordFindManyArgs } from "../../mediaRecord/base/MediaRecordFindManyArgs";
import { MediaRecord } from "../../mediaRecord/base/MediaRecord";
import { LabelService } from "../label.service";

@graphql.Resolver(() => Label)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LabelResolverBase {
  constructor(
    protected readonly service: LabelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "read",
    possession: "any",
  })
  async _labelsMeta(
    @graphql.Args() args: LabelFindManyArgs
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

  @graphql.Query(() => [Label])
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "read",
    possession: "any",
  })
  async labels(
    @graphql.Args() args: LabelFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Label",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Label, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "read",
    possession: "own",
  })
  async label(
    @graphql.Args() args: LabelFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Label",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Label)
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "create",
    possession: "any",
  })
  async createLabel(
    @graphql.Args() args: CreateLabelArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Label",
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
        `providing the properties: ${properties} on ${"Label"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Label)
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "update",
    possession: "any",
  })
  async updateLabel(
    @graphql.Args() args: UpdateLabelArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Label",
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
        `providing the properties: ${properties} on ${"Label"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Label)
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "delete",
    possession: "any",
  })
  async deleteLabel(
    @graphql.Args() args: DeleteLabelArgs
  ): Promise<Label | null> {
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

  @graphql.ResolveField(() => [MediaRecord])
  @nestAccessControl.UseRoles({
    resource: "Label",
    action: "read",
    possession: "any",
  })
  async mediaRecords(
    @graphql.Parent() parent: Label,
    @graphql.Args() args: MediaRecordFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MediaRecord",
    });
    const results = await this.service.findMediaRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
