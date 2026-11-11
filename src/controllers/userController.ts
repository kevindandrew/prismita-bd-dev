import type { Response, Request } from "express";
import { prisma } from "../config/prisma";
import { UserModel } from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await UserModel.findAll(req.query);
    res.status(200).json({ data: users });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ error: "erro al obtener usuarios", message: error.message });
  }
}

export async function createUser(req: Request, res: Response) {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      role,
      name,
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
    const user = await UserModel.findByIdWhitPost(Number(id));

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
