import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PartidosVivo from '@/components/PartidosVivo.vue'


describe('PartidosVivo.vue', () => {
      it('render the title correc', ()=>{
        const wrapper = mount(PartidosVivo);
        const title = wrapper.get('th');
        console.log(title.html());

        expect(title.text()).toBe('LOCAL');
      })
});