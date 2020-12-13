import React from 'react';
import { shallow } from 'enzyme';
import { GifItem } from '../../Components/GifItem';

describe('Pruebas', () => {
    const title='Prueba';
    const url='https://algo.jpg';
    const wrapper = shallow( <GifItem title={title} url={url} /> ); 
    test('debe devolver el componente ', () => {

        
        expect(wrapper).toMatchSnapshot();
   
});
test('debe de tener un parrafo con el title ', () => {
    const p =wrapper.find('p');
    expect(p.text().trim()).toBe(title);
})
test('debe tener la imagen igual al url y alt de los prots', () => {
    const img=wrapper.find('img');
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)  
})
 test('debe tener la clase faid int ', () => {
     const div= wrapper.find('div');
     expect(div.prop('className')).toBe('animate__fadeIn');

 })
 


})
 