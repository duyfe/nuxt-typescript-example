<template>
  <div class="page news">
    <Breadcrumb :b-items="bItems" />
    {{ news }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BreadcrumbItem } from '@common/interface'

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
  },
  computed: {
    bItems () : BreadcrumbItem[] {
      return [
        { label: 'Home', link: '/' },
        // @ts-ignore
        { label: 'News', link: (this as any).$link.newsPage() as string }
      ]
    }
  },
  mounted () {
    console.log((this as any).$link)
  }
})
</script>

<style lang="scss" scoped>
.page.news {
  position: relative;
}
</style>
