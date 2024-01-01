// verifyToken.ts
import jwt from 'jsonwebtoken';

export default async function verifyToken(token: string): Promise<boolean> {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as { role: string };
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
}
