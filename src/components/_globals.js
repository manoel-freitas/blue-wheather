import Vue from 'vue'

const requireComponent = require.context('./atoms', true, /BW[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(\w+)\//, '').replace(/\.\w+$/, ''))
  )
  // eslint-disable-next-line no-console
  console.log(componentName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function camelCase(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}
