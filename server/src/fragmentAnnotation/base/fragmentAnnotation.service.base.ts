import { PrismaService } from "nestjs-prisma";
import { Prisma, FragmentAnnotation } from "@prisma/client";

export class FragmentAnnotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FragmentAnnotationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationFindManyArgs>
  ): Promise<number> {
    return this.prisma.fragmentAnnotation.count(args);
  }

  async findMany<T extends Prisma.FragmentAnnotationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationFindManyArgs>
  ): Promise<FragmentAnnotation[]> {
    return this.prisma.fragmentAnnotation.findMany(args);
  }
  async findOne<T extends Prisma.FragmentAnnotationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationFindUniqueArgs>
  ): Promise<FragmentAnnotation | null> {
    return this.prisma.fragmentAnnotation.findUnique(args);
  }
  async create<T extends Prisma.FragmentAnnotationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationCreateArgs>
  ): Promise<FragmentAnnotation> {
    return this.prisma.fragmentAnnotation.create<T>(args);
  }
  async update<T extends Prisma.FragmentAnnotationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationUpdateArgs>
  ): Promise<FragmentAnnotation> {
    return this.prisma.fragmentAnnotation.update<T>(args);
  }
  async delete<T extends Prisma.FragmentAnnotationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FragmentAnnotationDeleteArgs>
  ): Promise<FragmentAnnotation> {
    return this.prisma.fragmentAnnotation.delete(args);
  }
}
