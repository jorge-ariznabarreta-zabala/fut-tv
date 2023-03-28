import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutComponent from '@/components/AboutComponent.vue'


describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(AboutComponent)
        expect(wrapper.exists()).toBe(true)
    })
});
