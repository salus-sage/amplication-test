import { Module } from "@nestjs/common";
import { MediaRecordModuleBase } from "./base/mediaRecord.module.base";
import { MediaRecordService } from "./mediaRecord.service";
import { MediaRecordController } from "./mediaRecord.controller";
import { MediaRecordResolver } from "./mediaRecord.resolver";

@Module({
  imports: [MediaRecordModuleBase],
  controllers: [MediaRecordController],
  providers: [MediaRecordService, MediaRecordResolver],
  exports: [MediaRecordService],
})
export class MediaRecordModule {}
