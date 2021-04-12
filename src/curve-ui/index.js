/* js
 * @Author: curve
 * @Date: 2021-04-08 21:05:33
 * @Last Modified by: curve
 * @Last Modified time: 2021-04-10 19:23:30
 */
import Stars from './components/Stars/index.vue'
import Selector from './components/Selector/index.vue'
import Magnifier from './components/Magnifier/index.vue'
import Carousel from './components/Carousel/index.vue'
import CarouselItem from './components/Carousel/item.vue'
import Button from './components/Button/index.vue'
import Message from './components/Message/index.vue'

import './assets/css/iconfont.css'
const UIPool = [
  Stars,
  Selector,
  Magnifier,
  Carousel,CarouselItem,
  Button,
  Message
]

export default {
  install(app, options) {
    if (options) {
      UIPool.map((item) => {
        if (options.indexOf(item.name) >= 0) {
          app.component(item.name, item)
        }
      })
    } else {
      UIPool.map((item) => {
        app.component(item.name, item)
      })
    }
  }
}