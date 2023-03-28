import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavbarComponent from '@/components/NavbarComponent.vue'


describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(NavbarComponent)
        expect(wrapper.exists()).toBe(true)
    })
});


