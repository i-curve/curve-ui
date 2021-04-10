<template>
  <div class="stars">
    <span
      class="iconfont icon-star"
      v-for="index in 5"
      :key="index"
      :style="{
        fontSize: size + 'px',
        color: index <= starNum ? 'yellow':''
      }"
      @click="setStar(index)"
    >
    </span>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStar } from '../../hooks/star'

export default {
  name: 'CuStars',
  props: {
    num: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 16
    }
  },
  setup(props, ctx) {
    const { starNum, setStar } = useStar(props.num, (num) => {
      ctx.emit("getStarNum", starNum.value)
    })

    return {
      starNum,
      setStar
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2464560_wzd8sob7a4.eot?t=1617626037938'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2464560_wzd8sob7a4.eot?t=1617626037938#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMwAAsAAAAABzAAAALkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCFIF4ATYCJAMMCwgABCAFhG0HORtBBsgOJS0SwYBJAAFhPDytsd6fmV1UmlokmmSSaBSvRCoJYoO7ki97vryDblkq5plq7i9IoAEPeXWfjheTyaYf5v7P5fRGeYHNb1lOc2y8FwUYWBrgXtimKVIgAXkKw6sOcTd2E2g3Kp3TbmN7P/BU2IMC8YBFBngW/IoiplqFGswsHfGh0pre0gsAvEffj38gN1pJqsweeXDVwIPqn67/buXFzWLnAUIwnxXiPDKWAYW4hPZjLkl8mYt2Xepq1AK1IqS5Qs0kEd9Q1jv94yWiZhd3gnmaSPx09dgEv27NkUAGddJ6AHie4ZwkMTntfTawI2xgz51192KGdkUMnbq05GLi4ODeu2tvR/ZvD+0/fn7xhSHAxdpd6/rwXN2OxYjbco/ta3eGD+5NHNy5c8muOez0MZYbG2F4kuLAXKFkP/6a//Uztgs5Gy84kH9g/lNNffKlSnkiOagOaf3KJdNsvOELtoc/eP5uNt9IJ16bK6Z4Tl1O37Ths2Q3//H8OIztzxu+S8s7PTtAwdfcpmv1d2pp0KSRu2/ocL+Z5lfZBNB8ZodL9U//jdvVH2HTAsr/t3YU8GPL9I2oT/NaYH5F6y05gl+cVSBAIDJE1JCLxsNyIDmz/ZHRhHYnRMN29/s1XjnUu5jQaiiDpMUIZK2m0UJehkqHFai12oB2S5rmdxhAuIjShkUrCIRelyDp9glZr5doIf+EyrD/UOuNDO0OI2TFDrNx611HEEMRD9k5EHO6Jrgm6h2X9iJxhsKQvCiiDSJi4RDMycwup5qQhsgcY6yZYi6lAhSIrsJGsh9SFB0aRJcQRzMnKDVKs7IEdKNMTleBtx0EwqAQHsSaA8I4Oo0QNKe8K5/vhYhmUDBIC6HOOQghLLh9KEem7B5ok1zrRbiXQywziXJRlAASEDoV1EisiOLEdZCBu0kQDpVpYkTUUCqLNRL6yjPXV6ofkCfWYXfOkSJH0fqCNdHLdbUoQwAA') format('woff2'),
  url('//at.alicdn.com/t/font_2464560_wzd8sob7a4.woff?t=1617626037938') format('woff'),
  url('//at.alicdn.com/t/font_2464560_wzd8sob7a4.ttf?t=1617626037938') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2464560_wzd8sob7a4.svg?t=1617626037938#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.icon-star:before {
    content: "\e7b7";
  }
}




</style>