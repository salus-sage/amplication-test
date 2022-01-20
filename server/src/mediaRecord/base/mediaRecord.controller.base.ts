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
import { MediaRecordService } from "../mediaRecord.service";
import { MediaRecordCreateInput } from "./MediaRecordCreateInput";
import { MediaRecordWhereInput } from "./MediaRecordWhereInput";
import { MediaRecordWhereUniqueInput } from "./MediaRecordWhereUniqueInput";
import { MediaRecordFindManyArgs } from "./MediaRecordFindManyArgs";
import { MediaRecordUpdateInput } from "./MediaRecordUpdateInput";
import { MediaRecord } from "./MediaRecord";
import { FragmentAnnotationWhereInput } from "../../fragmentAnnotation/base/FragmentAnnotationWhereInput";
import { FragmentAnnotation } from "../../fragmentAnnotation/base/FragmentAnnotation";
import { LabelWhereInput } from "../../label/base/LabelWhereInput";
import { Label } from "../../label/base/Label";
import { ProjectWhereInput } from "../../project/base/ProjectWhereInput";
import { Project } from "../../project/base/Project";
import { TagWhereInput } from "../../tag/base/TagWhereInput";
import { Tag } from "../../tag/base/Tag";
@swagger.ApiBearerAuth()
export class MediaRecordControllerBase {
  constructor(
    protected readonly service: MediaRecordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: MediaRecord })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: MediaRecordCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MediaRecord> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "MediaRecord",
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
        `providing the properties: ${properties} on ${"MediaRecord"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        filename: true,
        id: true,
        location: true,
        type: true,
        updatedAt: true,
        url: true,
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
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [MediaRecord] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => MediaRecordFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MediaRecord[]> {
    const args = plainToClass(MediaRecordFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MediaRecord",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        filename: true,
        id: true,
        location: true,
        type: true,
        updatedAt: true,
        url: true,
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
    resource: "MediaRecord",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: MediaRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MediaRecord | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "MediaRecord",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        filename: true,
        id: true,
        location: true,
        type: true,
        updatedAt: true,
        url: true,
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
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: MediaRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body()
    data: MediaRecordUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MediaRecord | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
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
        `providing the properties: ${properties} on ${"MediaRecord"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          filename: true,
          id: true,
          location: true,
          type: true,
          updatedAt: true,
          url: true,
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
    resource: "MediaRecord",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: MediaRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: MediaRecordWhereUniqueInput
  ): Promise<MediaRecord | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          filename: true,
          id: true,
          location: true,
          type: true,
          updatedAt: true,
          url: true,
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
  @common.Get("/:id/fragmentAnnotations")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => FragmentAnnotationWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyFragmentAnnotations(
    @common.Req() request: Request,
    @common.Param() params: MediaRecordWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FragmentAnnotation[]> {
    const query: FragmentAnnotationWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FragmentAnnotation",
    });
    const results = await this.service.findFragmentAnnotations(params.id, {
      where: query,
      select: {
        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        id: true,
        bodyPurpose: true,
        selectorConformsTo: true,
        selectorType: true,
        selectorValue: true,
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
  @common.Post("/:id/fragmentAnnotations")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async createFragmentAnnotations(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fragmentAnnotations: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/fragmentAnnotations")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async updateFragmentAnnotations(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fragmentAnnotations: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/fragmentAnnotations")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async deleteFragmentAnnotations(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      fragmentAnnotations: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/labels")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => LabelWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyLabels(
    @common.Req() request: Request,
    @common.Param() params: MediaRecordWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Label[]> {
    const query: LabelWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Label",
    });
    const results = await this.service.findLabels(params.id, {
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
  @common.Post("/:id/labels")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async createLabels(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      labels: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/labels")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async updateLabels(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      labels: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/labels")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async deleteLabels(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      labels: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => ProjectWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyProjects(
    @common.Req() request: Request,
    @common.Param() params: MediaRecordWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Project[]> {
    const query: ProjectWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Project",
    });
    const results = await this.service.findProjects(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

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
  @common.Post("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async createProjects(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      projects: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async updateProjects(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      projects: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async deleteProjects(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      projects: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/tags")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => TagWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyTags(
    @common.Req() request: Request,
    @common.Param() params: MediaRecordWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Tag[]> {
    const query: TagWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tag",
    });
    const results = await this.service.findTags(params.id, {
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
  @common.Post("/:id/tags")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async createTags(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      tags: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/tags")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async updateTags(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      tags: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/tags")
  @nestAccessControl.UseRoles({
    resource: "MediaRecord",
    action: "update",
    possession: "any",
  })
  async deleteTags(
    @common.Param() params: MediaRecordWhereUniqueInput,
    @common.Body() body: MediaRecordWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      tags: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MediaRecord",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"MediaRecord"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
