import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterComponent from '@/components/FooterComponent.vue'


 describe('TestesDeUnit', () => {
     it('3 iconos', () => {
         const wrapper = mount( FooterComponent );
         const iconos = wrapper.findqAll('#iconos')
         expect(iconos).toBeTruthy()
    });

    



describe('TestesDeUnit', () => {
    it('renders', () => {
        const wrapper = mount(FooterComponent)
        expect(wrapper.exists()).toBe(true)
    })
});
 })