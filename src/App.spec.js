/// <reference types="jest" />

import { shallowMount } from '@vue/test-utils'
import App from './App'

test('App has to be mounted', () => {
  const app = shallowMount(App)
  expect(app.isVueInstance()).toBeTruthy()
})
