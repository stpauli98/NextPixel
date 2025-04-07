import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'

acceptLanguage.languages(['sr', 'en', 'de'])

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

const cookieName = 'i18next'
const defaultLocale = 'sr'

export function middleware(req: NextRequest) {
  let lng
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = defaultLocale

  // Redirect if lng in path is not supported
  if (
    !acceptLanguage.isAccepted(lng) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${req.nextUrl.pathname}`, req.url)
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '')
    const lngInReferer = acceptLanguage.get(refererUrl.pathname.split('/')[1])
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
