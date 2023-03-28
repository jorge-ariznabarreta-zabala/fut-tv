import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterComponent from '@/components/FooterComponent.vue'


describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(FooterComponent)
        expect(wrapper.exists()).toBe(true)
    })
});