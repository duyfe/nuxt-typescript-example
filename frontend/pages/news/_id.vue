<template>
  <div class="page news-detail">
    <Breadcrumb />
    {{ news }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsDetail',
  async asyncData ({ params, app }) {
    const id: number = parseInt(params.id) || 0
    const news = await app.$content(`news/detail/${id}`)
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
