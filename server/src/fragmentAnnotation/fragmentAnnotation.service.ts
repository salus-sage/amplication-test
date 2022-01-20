import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FragmentAnnotationServiceBase } from "./base/fragmentAnnotation.service.base";

@Injectable()
export class FragmentAnnotationService extends FragmentAnnotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
