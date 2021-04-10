/* js
 * @Author: curve
 * @Date: 2021-04-09 18:06:31
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-09 18:09:59
 */
import { ref } from 'vue'
export function useStar(num, callback) {
  const starNum = ref(num)
  const setStar = (num) => {
    starNum.value = num
    callback()
  }
  return {
    starNum,
    setStar
  }
}