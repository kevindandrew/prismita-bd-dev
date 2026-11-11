import type { Role } from "../../generated/prisma/enums";
import { prisma } from "../config/prisma";

export const UserModel = {
  async findAll(filters: {
    name?: string | undefined;
    email?: string | undefined;
  }) {
    const { name, email } = filters;
    return await prisma.user.findMany({
      where: {
        // en caso de q manden el nombre buscara las coincidencias parciales mar
        name: name
          ? {
              contains: String(name),
              mode: "insensitive", // ignorar minusculas y mayusculas
            }
          : undefined,
        email: email
          ? {
              contains: String(email),
              mode: "insensitive",
            }
          : undefined,
      },
      orderBy: { id: "asc" },
    });
  },
  async findByIdWhitPost(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    });
  },
  async create(data: {
    name: string;
    email: string;
    password: string;
    role: Role;
  }) {
    return await prisma.user.create({
      data: data,
    });
  },
};
