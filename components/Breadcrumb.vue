<template>
  <ul class="breadcrumb">
    <li v-for="(item, index) in bItems" :key="index" class="breadcrumb__item">
      <a :href="item.link">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

interface BreadcrumbItem {
  label: string,
  link: string
}

export default Vue.extend({
  name: 'Breadcrumb',
  props: {
    bItems: {
      type: Array,
      required: true
    } as PropOptions<BreadcrumbItem[]>
  }
})
</script>

<style lang='scss' scoped>
/*
| --SCOPED--
| // components/Breadcrumb.vue
| ------------------------
*/
.breadcrumb {
  position: relative;
}
</style>
