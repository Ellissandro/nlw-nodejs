import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(request: Request, response: Response, next) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}