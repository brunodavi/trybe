class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        area = f'{3.14 * self.raio ** 2:.2f}'
        return float(area)

    def calcular_circunferencia(self):
        circunferencia = f'{2 * 3.14 * self.raio:.2f}'
        return circunferencia


circulo = Circulo(5)

area = circulo.calcular_area()
print(area)

circunferencia = circulo.calcular_circunferencia()
print(circunferencia)
