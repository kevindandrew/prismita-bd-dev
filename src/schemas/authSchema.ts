import { email, z } from "zod";

export const registerSchema = z.strictObject({
  email: z
    .string()
    .trim()
    .email("el formato del email es invalido")
    .toLowerCase(),
  password: z
    .string()
    .trim()
    .min(6, "la contraseña debe tener almenos 6 caracteres"),
  name: z.string().trim().min(2, "el nombre es muy corto"),
});

export const loginSchema = z.strictObject({
  email: z.string().email(),
  password: z.string().min(1, "la contraseña es obligatoria"),
});
