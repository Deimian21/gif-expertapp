const { getGif } = require("../../helpers/getGifts")

describe('Pruebas en getGif fetch', () => {
    test('debe traer 10 elementos ', async () => {
        const gifs= await getGif('Dargon Ball');
        expect(gifs.length).toBe(10);
    

    })
    
})
