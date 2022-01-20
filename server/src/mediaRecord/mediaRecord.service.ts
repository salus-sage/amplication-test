import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MediaRecordServiceBase } from "./base/mediaRecord.service.base";

@Injectable()
export class MediaRecordService extends MediaRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
