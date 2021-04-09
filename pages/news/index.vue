<template>
  <div class="page news">
    {{ news }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'News',
  async asyncData ({ app }) {
    const news = await app.$content('news/detail')
      .only(['slug', 'title'])
      .fetch()
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    return { news }
  },
  data () {
    return {
      news: []
    }
  }
})
</script>

<style lang="scss" scoped>
.page.news {
  position: relative;
}
</style>
