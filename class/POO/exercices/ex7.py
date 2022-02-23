from abc import ABC, abstractmethod

class FiguraGeometrica:
    @abstractmethod
    def area(self):
        raise NotImplementedError()

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError()


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        pass

    def perimetro(self):
        pass

class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base 
        self.altura = altura

    def area(self):
        pass

    def perimetro(self):
        pass

class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        pass

    def perimetro(self):
        pass
