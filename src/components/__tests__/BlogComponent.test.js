import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogComponent from '@/components/BlogComponent.vue'


describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(BlogComponent)
        expect(wrapper.exists()).toBe(true)
    })
});