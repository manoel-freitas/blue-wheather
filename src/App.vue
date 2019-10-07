<template>
  <main class="main-body">
    <BW-CitiesList></BW-CitiesList>
  </main>
</template>

<script>
import BWCitiesList from 'organisms/BWCitiesList'

export default {
  components: {
    BWCitiesList
  },
  mounted() {}
}
</script>

<style lang="scss">
.main-body {
  padding: {
    top: 20px;
    bottom: 20px;
  }
}
</style>
