<template>
  <div class="home">
    <p>Hello World!</p>
    <p>讯盟小程序开发</p>

    <xmcard-render
      v-for="name in deps"
      :key="name"
      :name="name"
    />
  </div>
</template>

<script>
import deps from '../card-deps.json'

export default {
  name: 'Home',
  data () {
    return {
      deps
    }
  },
  components: {
  }
}
</script>
