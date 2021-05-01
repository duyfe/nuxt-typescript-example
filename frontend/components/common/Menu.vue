<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <nuxt-link :to="item.link">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      menuItems: [
        { label: 'Top', link: '/' },
        { label: 'About', link: '/about/' },
        { label: 'News', link: '/news/' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  ul {
    li {
      list-style: none;
      display: inline-block;
      margin: 10px;
    }
  }
}
</style>
