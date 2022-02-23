class Estatistica:
    def __init__(self, media, mediana, moda):
        self.media = media
        self.mediana = mediana
        self.moda = moda

    def calcular_media(self):
        quantidade = len(self.media)
        soma_de_todos = sum(self.media)
        return soma_de_todos // quantidade

    def calcular_mediana(self):
        mediana = sorted(self.mediana)
        quantidade = len(mediana)
        index = quantidade // 2
        par = quantidade % 2 == 0

        if par:
            termo_1 = mediana[index - 1]
            termo_2 = mediana[index]

            return (termo_1 + termo_2) // 2
        else:
            return mediana[index]


    def calcular_moda(self):
        tmp = {}
        modas = []
        novo_moda = 0
        
        for m in self.moda:
            if not tmp.get(m):
                tmp[m] = 1
            else:
                tmp[m] += 1

        maior = max(tmp.values())

        for key in tmp:
            if tmp[key] == maior:
                modas.append(key)

        if len(modas) == 1:
            return modas[0]
        else:
            return modas

