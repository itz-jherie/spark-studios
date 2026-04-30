import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const acceptHeader = request.headers.get('accept')

  // Support .md suffix
  if (url.pathname.endsWith('.md')) {
    const newPath = url.pathname.slice(0, -3) || '/'
    return NextResponse.rewrite(new URL(`/api/markdown?path=${newPath}`, request.url))
  }

  // Support Accept: text/markdown header
  if (acceptHeader?.includes('text/markdown')) {
    // Only apply to HTML pages, avoid assets
    if (!url.pathname.includes('.') || url.pathname.endsWith('.html')) {
      return NextResponse.rewrite(new URL(`/api/markdown?path=${url.pathname}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except api, _next, and common static files
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.txt$|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
