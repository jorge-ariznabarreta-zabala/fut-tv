import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import NavbarComponent from '@/components/NavbarComponent.vue'
import AboutComponent from '@/components/NavbarComponent.vue'


describe('NavbarComponent', () => {
  it('renders', () => {
    const wrapper = mount(NavbarComponent)
    expect(wrapper.exists()).toBe(true)
  }),

  it("exite un routerlink", () => {
    const wrapper = mount(NavbarComponent)
    expect(wrapper.find('RouterLink').exists()).toBe(true)
  }),
  it("exite un routerlink", () => {
    const wrapper = mount(AboutComponent)
    expect(wrapper.find('RouterLink').exists()).toBe(true)
  })
});


