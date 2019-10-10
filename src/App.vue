<template>
  <div id="app">
    <BW-Header />
    <main class="main-container">
      <BW-CitiesList :cities="citiesWeather"></BW-CitiesList>
    </main>
  </div>
</template>

<script>
import BWCitiesList from 'organisms/BWCitiesList'
import BWHeader from 'organisms/BWHeader'
import { EventBus } from '@/event-bus'

const NUUK_ID = 3421319
const URUBICI_ID = 3445709
const NAIROBIID = 184736

export default {
  components: {
    BWCitiesList,
    BWHeader
  },
  data() {
    return {
      citiesWeatherIds: [NUUK_ID, URUBICI_ID, NAIROBIID],
      citiesWeather: []
    }
  },
  async mounted() {
    EventBus.$emit('isAppLoading', true)
    try {
      for (const cityWeatherId of this.citiesWeatherIds) {
        console.log(cityWeatherId)
        const cityWheater = await this.$services.getTodaysWheater(cityWeatherId)
        this.citiesWeather.push(cityWheater)
      }
      EventBus.$emit('isAppLoading', false)
    } catch (error) {
      EventBus.$emit('isAppLoading', false)
      EventBus.$emit('errorAppear', error)
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
