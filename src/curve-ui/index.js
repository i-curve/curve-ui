/* js
 * @Author: curve
 * @Date: 2021-04-08 21:05:33
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-10 16:03:17
 */
import Stars from './components/Stars/index.vue'
import Selector from './components/Selector/index.vue'
import Magnifier from './components/Magnifier/index.vue'
import Carousel from './components/Carousel/index.vue'
import Button from './components/Button/index.vue'
import Message from './components/Message/index.vue'

import './assets/css/iconfont.css'
const UIPool = [
  Stars,
  Selector,
  Magnifier,
  Carousel,
  Button,
  Message
]

export default {
  install(app, options) {
    UIPool.map((item) => {
      
      app.component(item.name, item)
    })
  }
}