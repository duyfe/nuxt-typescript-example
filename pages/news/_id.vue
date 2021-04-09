<template>
  <div class="page news-detail">
    {{ news }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsDetail',
  async asyncData ({ params, $content }) {
    const id: number = parseInt(params.id) || 0
    const news = await $content(`news/detail/${id}`)
      .fetch()
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    return { news }
  },
  data () {
    return {
      news: {}
    }
  }
})
</script>

<style lang="scss" scoped>
.page.news-detail {
  position: relative;
}
</style>
