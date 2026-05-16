import { Locale } from '@/i18n-config';

export interface LangParams {
  params: Promise<{ lang: Locale }>;
}
