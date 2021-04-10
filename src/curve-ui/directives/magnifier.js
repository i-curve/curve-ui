/* js
 * @Author: curve
 * @Date: 2021-04-09 21:25:18
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-09 22:19:52
 */
import { getStyle } from '../utils/tools'

export default {
  mounted(el) {
    const oImgStatic = el.querySelector('.img-static'),
          oMagWrap = el.querySelector('.mag-wrap'),
          oMagImg = el.querySelector('.mag-wrap img'),
          imgX = getStyle(oImgStatic, 'width'),
          imgY = getStyle(oImgStatic,'height'),
          magX = getStyle(oMagWrap, 'width'),
          magY = getStyle(oMagWrap,'height')

    el.addEventListener('mouseover', function () {
      oMagWrap.style.display = 'block'

      document.addEventListener('mousemove', handleMouseMove,false)
    }, false)

    el.addEventListener('mouseout', function () {
      oMagWrap.style.display = 'none'

      document.removeEventListener('mousemove', handleMouseMove, false)
    }, false)

    function handleMouseMove(e) {
      const { x, y, mouseX, mouseY} = getXY(e)

      showMsg( x, y, mouseX, mouseY)

    }
    function showMsg(x, y, mouseX, mouseY) {
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'
      oMagImg.style.left = -x + 'px'
      oMagImg.style.top = -y + 'px'
      
      if (mouseX < 0 || mouseY < 0 || mouseX > imgX || mouseY > imgY) {
        oMagWrap.style.display = 'none'

        document.removeEventListener('mousemove', handleMouseMove, false)
      }
    }
    function getXY(e) {
      return {
        x: e.pageX - el.offsetLeft - magX /2,
        y: e.pageY - el.offsetTop - magY /2,
        mouseX: e.pageX - el.offsetLeft,
        mouseY: e.pageY - el.offsetTop
      }
    }
  }
}