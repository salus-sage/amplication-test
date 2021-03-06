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
import { CreateFragmentAnnotationArgs } from "./CreateFragmentAnnotationArgs";
import { UpdateFragmentAnnotationArgs } from "./UpdateFragmentAnnotationArgs";
import { DeleteFragmentAnnotationArgs } from "./DeleteFragmentAnnotationArgs";
import { FragmentAnnotationFindManyArgs } from "./FragmentAnnotationFindManyArgs";
import { FragmentAnnotationFindUniqueArgs } from "./FragmentAnnotationFindUniqueArgs";
import { FragmentAnnotation } from "./FragmentAnnotation";
import { LabelFindManyArgs } from "../../label/base/LabelFindManyArgs";
import { Label } from "../../label/base/Label";
import { MediaRecordFindManyArgs } from "../../mediaRecord/base/MediaRecordFindManyArgs";
import { MediaRecord } from "../../mediaRecord/base/MediaRecord";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { User } from "../../user/base/User";
import { FragmentAnnotationService } from "../fragmentAnnotation.service";

@graphql.Resolver(() => FragmentAnnotation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FragmentAnnotationResolverBase {
  constructor(
    protected readonly service: FragmentAnnotationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async _fragmentAnnotationsMeta(
    @graphql.Args() args: FragmentAnnotationFindManyArgs
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

  @graphql.Query(() => [FragmentAnnotation])
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async fragmentAnnotations(
    @graphql.Args() args: FragmentAnnotationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => FragmentAnnotation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "own",
  })
  async fragmentAnnotation(
    @graphql.Args() args: FragmentAnnotationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FragmentAnnotation",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => FragmentAnnotation)
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "create",
    possession: "any",
  })
  async createFragmentAnnotation(
    @graphql.Args() args: CreateFragmentAnnotationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FragmentAnnotation",
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
        `providing the properties: ${properties} on ${"FragmentAnnotation"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        creator: args.data.creator
          ? {
              connect: args.data.creator,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FragmentAnnotation)
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async updateFragmentAnnotation(
    @graphql.Args() args: UpdateFragmentAnnotationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
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
        `providing the properties: ${properties} on ${"FragmentAnnotation"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          creator: args.data.creator
            ? {
                connect: args.data.creator,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => FragmentAnnotation)
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "delete",
    possession: "any",
  })
  async deleteFragmentAnnotation(
    @graphql.Args() args: DeleteFragmentAnnotationArgs
  ): Promise<FragmentAnnotation | null> {
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
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async bodyLabels(
    @graphql.Parent() parent: FragmentAnnotation,
    @graphql.Args() args: LabelFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Label[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Label",
    });
    const results = await this.service.findBodyLabels(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [MediaRecord])
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async mediaRecord(
    @graphql.Parent() parent: FragmentAnnotation,
    @graphql.Args() args: MediaRecordFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MediaRecord[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MediaRecord",
    });
    const results = await this.service.findMediaRecord(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async bodyTags(
    @graphql.Parent() parent: FragmentAnnotation,
    @graphql.Args() args: TagFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tag[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tag",
    });
    const results = await this.service.findBodyTags(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  async creator(
    @graphql.Parent() parent: FragmentAnnotation,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getCreator(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
