import {  Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization;
  
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');
  
  try {
    const { sub } = verify(token, '2322973b28bde5bf39fd958edce7fe94') as IPayload;
    
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}