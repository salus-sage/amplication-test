import { Module } from "@nestjs/common";
import { FragmentAnnotationModuleBase } from "./base/fragmentAnnotation.module.base";
import { FragmentAnnotationService } from "./fragmentAnnotation.service";
import { FragmentAnnotationController } from "./fragmentAnnotation.controller";
import { FragmentAnnotationResolver } from "./fragmentAnnotation.resolver";

@Module({
  imports: [FragmentAnnotationModuleBase],
  controllers: [FragmentAnnotationController],
  providers: [FragmentAnnotationService, FragmentAnnotationResolver],
  exports: [FragmentAnnotationService],
})
export class FragmentAnnotationModule {}
