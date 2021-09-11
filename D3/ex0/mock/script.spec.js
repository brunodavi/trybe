const math = require('./script')

test('Testando Subtração', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
})

test('Testando Multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar()
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 5)).toBe(10);
})

test('Testando Somar', () => {
    math.somar = jest.fn((a, b) => a + b)
    math.somar(1, 5);
    math.somar(5, 10);

    expect(math.somar).toHaveBeenCalled();

    expect(math.somar(5, 5)).toBe(10);
    expect(math.somar(10, 10)).toBe(20);

    expect(math.somar).toHaveBeenCalledWith(5, 5);
    expect(math.somar).toHaveBeenCalledWith(10, 10);
})

describe('Testando Divisão', () => {
    beforeEach(() => {
        math.dividir = jest.fn().mockReturnValue(15);
        math.dividir(5);
        math.dividir(10);
    });

    it('Chamando Função', () => {
        expect(math.dividir).toHaveBeenCalledTimes(2)
    });

    it('Retornando Função', () => {
        expect(math.dividir(5)).toBe(15)
        expect(math.dividir(10)).toBe(15)
    });

    it('Parametros Usados', () => {
        expect(math.dividir).toHaveBeenCalledWith(5)
        expect(math.dividir).toHaveBeenCalledWith(10)
    });
})

test('spyOn', () => {
    jest.spyOn(math, 'subtrair')
        .mockReturnValue(20);
    math.subtrair(5, 5);
    math.subtrair(10, 10);
    expect(math.subtrair).toHaveBeenCalledTimes(3);
    expect(math.subtrair(5)).toBe(20);
    expect(math.subtrair(10)).toBe(20);
    math.subtrair.mockRestore();
    expect(math.subtrair(1, 1)).toBe(undefined);
})
