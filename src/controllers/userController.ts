import type { Response, Request } from "express";
import { prisma } from "../config/prisma";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      // select * from user order by asc
      orderBy: { id: "asc" },
    });
    res.status(200).json({ data: users });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ error: "erro al obtener usuarios", message: error.message });
  }
}

export async function createUser(req: Request, res: Response) {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json({
      data: newUser,
    });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ error: "erro al crear usuarios", message: error.message });
  }
}

export async function getUserWhitPost(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        posts: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }
    res.status(200).json({ data: user });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ error: "erro al crear usuarios", message: error.message });
  }
}
