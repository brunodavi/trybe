class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        lado = self.lado
        return lado * lado

    def calcular_perimetro(self):
        return 4 * self.lado

quadrado = Quadrado(24)

print(quadrado.calcular_area())
print(quadrado.calcular_perimetro())
