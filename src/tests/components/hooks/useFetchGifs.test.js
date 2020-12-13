const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifs } = require("../../../hooks/useFetchGifs")

describe('Pruebas en hooks', () => {
    test('debe de retornar el estado inicial', async() => {
        const {result,waitForNextUpdate} =renderHook( () => useFetchGifs('Daragon Ball'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    
    });
    test('debe retornar un arreglo de imagenes y el loading en false', async () => {
        const {result,waitForNextUpdate} =renderHook( () => useFetchGifs('Daragon Ball'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toEqual(false);  
    })
    
    
})
