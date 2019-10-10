<template>
  <BWCard>
    <template #header>
      {{ location }}
    </template>
    <template #body>
      <div class="wheater__degrees">
        <BWDegrees :degrees="degrees"></BWDegrees>
      </div>
    </template>
    <template #footer>
      <div class="wheater__stats">
        <div>
          <span> HUMIDITY</span>
          <span> {{ humidity }}</span>
        </div>
        <div>
          <span> PRESSURE </span>
          <span> {{ pressure }}</span>
        </div>
      </div>
      updated at {{ updatedAt }}
    </template>
  </BWCard>
</template>

<script>
import BWCard from '../BWCard'
import dayjs from 'dayjs'

export default {
  components: {
    BWCard
  },
  props: {
    location: {
      type: String,
      required: true
    },
    wheater: {
      type: Number,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
  },
  computed: {
    degrees() {
      return Math.floor(this.wheater.temp)
    },
    humidity() {
      return `${this.wheater.humidity}%`
    },
    pressure() {
      return `${this.wheater.pressure} hPa`
    },
    updatedAt() {
      return dayjs(this.date).format('HH:mm:ss A')
    }
  }
}
</script>
