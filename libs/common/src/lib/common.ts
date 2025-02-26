import { parser } from '@foo/parser';

export function common(): string {
  return 'common hello' + parser();
}
