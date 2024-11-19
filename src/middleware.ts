import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('middleware');
    if (request.nextUrl.pathname === '/products/1004') {
        console.log('middleware - redirecting');
        return NextResponse.redirect(new URL('/products', request.url));
    }
}

// config for when to run the middleware
export const config = {
    matcher: [
        '/products/:path*',
    ]
}