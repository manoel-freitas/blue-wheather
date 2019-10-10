<template>
  <section id="cities-list" class="cities-list">
    <BWWheaterCard
      v-for="city in citiesWheater"
      :key="city.id"
      :location="city.location"
      :wheater="city.wheater"
      :date="city.dt"
    />
  </section>
</template>

<script>
import BWWheaterCard from 'molecules/BWWheaterCard'
export default {
  components: {
    BWWheaterCard
  },
  props: {
    cities: {
      type: Array,
      required: true
    }
  },
  computed: {
    citiesWheater() {
      return this.cities.map(city => ({
        wheater: city.main,
        location: this.formatCityName(city.name, city.sys.country),
        id: city.id
      }))
    }
  },
  methods: {
    formatCityName(cityName, country) {
      if (!cityName || !country) {
        return ''
      }
      const cityNameSplited = cityName.split(' ')
      return `${cityNameSplited[0]}, ${country}`
    }
  }
}
</script>
