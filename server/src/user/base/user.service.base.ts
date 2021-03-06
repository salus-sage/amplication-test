import { PrismaService } from "nestjs-prisma";
import { Prisma, User, FragmentAnnotation, Project } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findContributor(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .contributor(args);
  }

  async findFragmentAnnotations(
    parentId: string,
    args: Prisma.FragmentAnnotationFindManyArgs
  ): Promise<FragmentAnnotation[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .fragmentAnnotations(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .projects(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
