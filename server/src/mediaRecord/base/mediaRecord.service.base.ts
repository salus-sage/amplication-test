import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  MediaRecord,
  FragmentAnnotation,
  Label,
  Project,
  Tag,
} from "@prisma/client";

export class MediaRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MediaRecordFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordFindManyArgs>
  ): Promise<number> {
    return this.prisma.mediaRecord.count(args);
  }

  async findMany<T extends Prisma.MediaRecordFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordFindManyArgs>
  ): Promise<MediaRecord[]> {
    return this.prisma.mediaRecord.findMany(args);
  }
  async findOne<T extends Prisma.MediaRecordFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordFindUniqueArgs>
  ): Promise<MediaRecord | null> {
    return this.prisma.mediaRecord.findUnique(args);
  }
  async create<T extends Prisma.MediaRecordCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordCreateArgs>
  ): Promise<MediaRecord> {
    return this.prisma.mediaRecord.create<T>(args);
  }
  async update<T extends Prisma.MediaRecordUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordUpdateArgs>
  ): Promise<MediaRecord> {
    return this.prisma.mediaRecord.update<T>(args);
  }
  async delete<T extends Prisma.MediaRecordDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MediaRecordDeleteArgs>
  ): Promise<MediaRecord> {
    return this.prisma.mediaRecord.delete(args);
  }

  async findFragmentAnnotations(
    parentId: string,
    args: Prisma.FragmentAnnotationFindManyArgs
  ): Promise<FragmentAnnotation[]> {
    return this.prisma.mediaRecord
      .findUnique({
        where: { id: parentId },
      })
      .fragmentAnnotations(args);
  }

  async findLabels(
    parentId: string,
    args: Prisma.LabelFindManyArgs
  ): Promise<Label[]> {
    return this.prisma.mediaRecord
      .findUnique({
        where: { id: parentId },
      })
      .labels(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.prisma.mediaRecord
      .findUnique({
        where: { id: parentId },
      })
      .projects(args);
  }

  async findTags(
    parentId: string,
    args: Prisma.TagFindManyArgs
  ): Promise<Tag[]> {
    return this.prisma.mediaRecord
      .findUnique({
        where: { id: parentId },
      })
      .tags(args);
  }
}
