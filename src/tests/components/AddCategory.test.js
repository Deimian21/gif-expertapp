import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../Components/AddCategory")
import React from 'react';
describe('Pruebas con AddCategory', () => {
    const setCategory= jest.fn();
    let wrapper= shallow( <AddCategory  setCategory={setCategory}/>);
    beforeEach(()=>{
      jest.clearAllMocks();
      wrapper= shallow( <AddCategory  setCategory={setCategory}/>);
    });
    test('debe tener la categoria  ', () => {
         
         expect(wrapper).toMatchSnapshot();
    })
    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target:{ value } });
        expect( wrapper.find('p').text().trim()).toBe(value);
    })
    test('no debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategory).not.toHaveBeenCalled();
    })
    
    test('debe llamar el setCategorys y limpiar la caja de texto', () => {
        const value='Hola Mundo';
        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategory).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    
    
})
