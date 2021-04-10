/* js
 * @Author: curve
 * @Date: 2021-04-09 22:16:37
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-09 22:17:24
 */

export function getStyle(el, prop) {
  return parseInt(window.getComputedStyle(el, null)[prop])
}