import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import tarjetaCarousel from '@/components/tarjetaCarousel.vue'

describe ('tarjetaCarousel', () => {
    it ('testeamos un span', () => {
        const wrapper = mount(tarjetaCarousel)
        expect(wrapper.find('span').exists()).toBe(true)
    }),
    it ('testeamos un span', () => {
        const wrapper = mount(tarjetaCarousel)
        expect(wrapper.find('button').exists()).toBe(true)
    })
});
    
  
    
