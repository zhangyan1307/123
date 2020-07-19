/**   
 * api接口统一管理
 */
import { get, post } from './http'
//登入接口
export const list = p => post('business/outpatRegistinfo/list', p);