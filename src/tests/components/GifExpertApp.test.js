import { shallow }  from 'enzyme';
import React from 'react';
import GifExpertApp from '../../GifExpertApp';
describe('Pruebas en GifExpertApp', () => {
    test('debe contener el snapshot ', () => {
        const wrapper=shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    test('debe mosttar una lista de categorias', () => {
        const categories=['One Punch'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
})
