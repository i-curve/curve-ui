/* js
 * @Author: curve
 * @Date: 2021-04-08 22:12:01
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-09 00:00:05
 */
export default {
  mounted(el) {
    const oInput = el.querySelector('input'),
          oPlaceHolder = el.querySelector('label'),
          oIcon = el.querySelector('span')

    const oSelectorMenu = el.querySelector('.selector-menu')

    oInput.addEventListener('focus', function () {
      oPlaceHolder.style.display = 'none'
      oIcon.className = 'iconfont icon-search'
      
      setTimeout(() => {
        oSelectorMenu.style.display = 'block'
      }, 200)
    }, false)
    oInput.addEventListener('blur', function () {
      oIcon.className = 'iconfont icon-arrow-down'
      setTimeout(() => {
        oSelectorMenu.style.display = 'none'
        if (this.value.length === 0) {
          oPlaceHolder.style.display = 'block'
        }
      }, 200)
    }, false)
  }
}