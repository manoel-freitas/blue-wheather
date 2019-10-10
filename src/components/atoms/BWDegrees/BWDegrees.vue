<template>
  <span :class="state" class="degrees__text">
    {{ degrees }}
    <div class="degrees__text__indicator"></div>
  </span>
</template>

<script>
const BLUE_LIMIT_DEGREES = 5
const ORANGE_LIMIT_DEGREES = 25

export default {
  props: {
    degrees: {
      type: Number,
      required: true
    }
  },
  computed: {
    state() {
      let textState = ''
      if (this.degrees <= BLUE_LIMIT_DEGREES) {
        textState = 'cold'
      } else if (
        this.degrees > BLUE_LIMIT_DEGREES &&
        this.degrees <= ORANGE_LIMIT_DEGREES
      ) {
        textState = 'warm'
      } else {
        textState = 'hot'
      }
      return [`is__${textState}`]
    }
  }
}
</script>
