import type { Response, Request } from "express";
import { prisma } from "../config/prisma";

export async function getPost(req: Request, res: Response) {
  const { title, content, published, authorId } = req.query;
  try {
    const users = await prisma.post.findMany({
      where: {
        // en caso de q manden el nombre buscara las coincidencias parciales mar
        title: title
          ? {
              contains: String(title),
              mode: "insensitive", // ignorar minusculas y mayusculas
            }
          : undefined,
        content: content
          ? {
              contains: String(content),
              mode: "insensitive",
            }
          : undefined,
        published: published !== undefined ? published === "true" : undefined,
        authorId: authorId ? Number(authorId) : undefined,
      },
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
export async function getPostWhitId(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const posts = await prisma.post.findMany({
      where: { id: Number(id) },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(200).json({ data: posts });
  } catch (error) {}
}
export async function createPost(req: Request, res: Response) {
  const { title, content, published, authorId } = req.body;
  try {
    const newUser = await prisma.post.create({
      data: { title, content, published, authorId },
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
