import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from '../node_modules/next/server';

export function middleware(req: NextRequest) {
  const res = withAuth(req);
  if (res) return res;
}

export const config = {
  matcher: ['/schedule'],
};
