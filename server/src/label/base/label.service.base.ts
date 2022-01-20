import { PrismaService } from "nestjs-prisma";
import { Prisma, Label, FragmentAnnotation, MediaRecord } from "@prisma/client";

export class LabelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LabelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelFindManyArgs>
  ): Promise<number> {
    return this.prisma.label.count(args);
  }

  async findMany<T extends Prisma.LabelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelFindManyArgs>
  ): Promise<Label[]> {
    return this.prisma.label.findMany(args);
  }
  async findOne<T extends Prisma.LabelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelFindUniqueArgs>
  ): Promise<Label | null> {
    return this.prisma.label.findUnique(args);
  }
  async create<T extends Prisma.LabelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelCreateArgs>
  ): Promise<Label> {
    return this.prisma.label.create<T>(args);
  }
  async update<T extends Prisma.LabelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelUpdateArgs>
  ): Promise<Label> {
    return this.prisma.label.update<T>(args);
  }
  async delete<T extends Prisma.LabelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LabelDeleteArgs>
  ): Promise<Label> {
    return this.prisma.label.delete(args);
  }

  async findFragmentAnnotations(
    parentId: string,
    args: Prisma.FragmentAnnotationFindManyArgs
  ): Promise<FragmentAnnotation[]> {
    return this.prisma.label
      .findUnique({
        where: { id: parentId },
      })
      .fragmentAnnotations(args);
  }

  async findMediaRecords(
    parentId: string,
    args: Prisma.MediaRecordFindManyArgs
  ): Promise<MediaRecord[]> {
    return this.prisma.label
      .findUnique({
        where: { id: parentId },
      })
      .mediaRecords(args);
  }
}
