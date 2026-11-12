import type { Response, Request, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
export function validate(schema: ZodObject) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.parseAsync(req.body);
      req.body = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "error de validacion",
          details: error.issues,
        });
      }
      next(error);
    }
  };
}
