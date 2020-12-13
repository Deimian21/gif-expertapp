import { shallow } from 'enzyme';
import React from 'react';
import{GifGrid} from '../../Components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('Pruebas en GifGrid', () => {
    const category='Dragon Ball';
   
 test('debe tener un snapshot', () => {
     useFetchGifs.mockReturnValue({
         data:[],
         loading:true
     });
    const wrapper= shallow(<GifGrid category={ category }/>);
    expect(wrapper).toMatchSnapshot();
 });
     
    test('debe de mostrar items cuando se cargan imagenes en use fetch git  ', () => {
        const gifs=[{
            id:'ABC',
            url:'https://localhost/imagenes/imagen.png',
            title:'una cosa'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wrapper= shallow(<GifGrid category={ category }/>);
        expect(wrapper.find('p').exists()).toBe(false);
        //expect(wrapper.find('GifGrid').length).toBe(gifs.length);
    })

})
