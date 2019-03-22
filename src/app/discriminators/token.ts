/**
 * @file App discriminators token 有效性判定器
 * @module app/discriminators/token
 * @since 2019-03-12
 */

import { TOKEN } from '../constants/auth';

// 检查 token 的存在和有效性
export function checkTokenIsOk(): boolean {
  const token: string = localStorage.getItem(TOKEN);
  const tokenIsOk = token && token.split('.').length === 3;
  return tokenIsOk;
}
