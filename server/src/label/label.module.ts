import { Module } from "@nestjs/common";
import { LabelModuleBase } from "./base/label.module.base";
import { LabelService } from "./label.service";
import { LabelController } from "./label.controller";
import { LabelResolver } from "./label.resolver";

@Module({
  imports: [LabelModuleBase],
  controllers: [LabelController],
  providers: [LabelService, LabelResolver],
  exports: [LabelService],
})
export class LabelModule {}
