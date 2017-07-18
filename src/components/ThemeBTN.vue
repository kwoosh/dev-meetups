<template lang="pug">
  ul
    li( v-for="(them, i) in themes" :key="i")
      v-btn( :class="them") {{ them }}
</template>


<script>
export default {
  name: 'theme-btn',
  data() {
    return {
      themes: [
        'lol',
        'kek',
        'primary',
        'accent',
        'secondary',
        'info',
        'warning',
        'error',
        'success'
      ]
    }
  }
}
</script>