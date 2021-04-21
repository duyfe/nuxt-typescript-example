<template>
  <div class="container">
    <div id="keyVisualCanvas" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    import('~/assets/animation/index').then((module) => {
      const KeyVisual = module.default

      const elWrapper = document.getElementById('keyVisualCanvas')
      if (elWrapper) {
        const app = new KeyVisual({
          width: window.innerWidth,
          height: 600,
          resource: {
            spineBoy: '/data/spine_boy-pro.json',
            buggy: '/images/buggy.png'
          }
        })
        app.init(elWrapper)
      }
    })
  }
})
</script>

<style lang="scss" scroped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
//
//.space {
//  height: 200vh;
//  width: 100%;
//}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
