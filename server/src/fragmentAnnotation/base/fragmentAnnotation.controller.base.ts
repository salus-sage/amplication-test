import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { FragmentAnnotationService } from "../fragmentAnnotation.service";
import { FragmentAnnotationCreateInput } from "./FragmentAnnotationCreateInput";
import { FragmentAnnotationWhereInput } from "./FragmentAnnotationWhereInput";
import { FragmentAnnotationWhereUniqueInput } from "./FragmentAnnotationWhereUniqueInput";
import { FragmentAnnotationFindManyArgs } from "./FragmentAnnotationFindManyArgs";
import { FragmentAnnotationUpdateInput } from "./FragmentAnnotationUpdateInput";
import { FragmentAnnotation } from "./FragmentAnnotation";
import { LabelWhereInput } from "../../label/base/LabelWhereInput";
import { Label } from "../../label/base/Label";
import { TagWhereInput } from "../../tag/base/TagWhereInput";
import { Tag } from "../../tag/base/Tag";
@swagger.ApiBearerAuth()
export class FragmentAnnotationControllerBase {
  constructor(
    protected readonly service: FragmentAnnotationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FragmentAnnotation })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FragmentAnnotationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FragmentAnnotation"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        bodyPurpose: true,
        createdAt: true,
        id: true,
        targetFormat: true,
        targetId: true,
        targetSrc: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FragmentAnnotation] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => FragmentAnnotationFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation[]> {
    const args = plainToClass(FragmentAnnotationFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        bodyPurpose: true,
        createdAt: true,
        id: true,
        targetFormat: true,
        targetId: true,
        targetSrc: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FragmentAnnotation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FragmentAnnotation",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        bodyPurpose: true,
        createdAt: true,
        id: true,
        targetFormat: true,
        targetId: true,
        targetSrc: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FragmentAnnotation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body()
    data: FragmentAnnotationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FragmentAnnotation"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          bodyPurpose: true,
          createdAt: true,
          id: true,
          targetFormat: true,
          targetId: true,
          targetSrc: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FragmentAnnotation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FragmentAnnotationWhereUniqueInput
  ): Promise<FragmentAnnotation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bodyPurpose: true,
          createdAt: true,
          id: true,
          targetFormat: true,
          targetId: true,
          targetSrc: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/bodyLabels")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => LabelWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyBodyLabels(
    @common.Req() request: Request,
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Label[]> {
    const query: LabelWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Label",
    });
    const results = await this.service.findBodyLabels(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        labelName: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/bodyLabels")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async createBodyLabels(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyLabels: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/bodyLabels")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async updateBodyLabels(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyLabels: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/bodyLabels")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async deleteBodyLabels(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyLabels: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/bodyTags")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => TagWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyBodyTags(
    @common.Req() request: Request,
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tag[]> {
    const query: TagWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tag",
    });
    const results = await this.service.findBodyTags(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
        value: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/bodyTags")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async createBodyTags(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyTags: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/bodyTags")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async updateBodyTags(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyTags: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/bodyTags")
  @nestAccessControl.UseRoles({
    resource: "FragmentAnnotation",
    action: "update",
    possession: "any",
  })
  async deleteBodyTags(
    @common.Param() params: FragmentAnnotationWhereUniqueInput,
    @common.Body() body: FragmentAnnotationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      bodyTags: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FragmentAnnotation"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
