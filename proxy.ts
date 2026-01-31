import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/content";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return NextResponse.next();

	const acceptLanguage = request.headers.get("accept-language") || "";
	const preferredLocale = acceptLanguage.includes("ru") ? "ru" : defaultLocale;

	request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
