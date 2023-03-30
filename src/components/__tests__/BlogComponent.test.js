import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogComponent from '@/components/BlogComponent.vue'


describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(BlogComponent)
        expect(wrapper.exists()).toBe(true)
    }),
    it ('testeamos un parafo', () => {
        const wrapper = mount (BlogComponent)
        const patata = wrapper.get('p')
        expect(patata.text()).toBe('This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.')
    })
});