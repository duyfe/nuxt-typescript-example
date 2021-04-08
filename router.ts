
export default {
  topPage: (): string => '/',
  newsPage: (): string => '/news/',
  newsDetailPage: (slug: number): string => `/news/${slug}/`
}
