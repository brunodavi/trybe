class Canal:
    def __init__(self, nome, numero):
        self.nome = nome
        self.numero = numero

class TV:
    canal_atual = 1
    ligada = False
    volume = 0

    def __init__(self, polegadas, marca, *canais, smart = False):
        self.polegadas = polegadas
        self.canais = canais
        self.marca = marca
        self.smart = smart


    def mudar_estado(self):
        self.ligada = not self.ligada

        if self.ligada:
            print('A tv esta ligada')
        else:
            print('A tv esta desligada')

    def proximo_canal(self):
        if self.ligada:
            if len(self.canais) - 1 > self.canal_atual:
                self.canal_atual += 1
            else:
                self.canal_atual = 0

            print(self.canais[self.canal_atual].numero)

    def canal_anterior(self):
        if self.ligada:
            if self.canal_atual > 0:
                self.canal_atual -= 1
            else:
                self.canal_atual = len(self.canais) - 1

            print(self.canais[self.canal_atual].numero)

    def mudar_canal(self, novo_canal):
        if self.ligada:
            for index, canal in enumerate(self.canais):
                if canal.numero == novo_canal:
                    self.canal_atual = index
            raise ValueError("Canal não encontrado")

    def aumentar_volume(self):
        if self.ligada:
            if self.volume < 100:
                self.volume += 1

            print(self.volume)

    def abaixar_volume(self):
        if self.ligada:
            if self.volume > 0:
                self.volume -= 1

            print(self.volume)

    def netflix(self):
        if self.ligada:
            if self.smart:
                print('Iniciando NetFlix')
            else:
                print('Sua não possue essa função')

    def informacoes_do_canal(self):
        if self.ligada:
            canal = self.canais[self.canal_atual]

            print('Nome:', canal.nome)
            print('Número:', canal.numero)


tv = TV(128, 'Philips',
    Canal('Cultura', 2.1),
    Canal('SBT', 4.1),
    Canal('Globo', 5.1),
    Canal('Record', 7.1),
    Canal('RedeTV', 9.1),
    Canal('Band', 13.1),
    Canal('Rede Brasil', 19.1),
    Canal('MTV', 32.1)
)

tv.mudar_estado()

tv.canal_anterior()
tv.canal_anterior()

tv.proximo_canal()
tv.proximo_canal()
tv.proximo_canal()

tv.canal_anterior()

tv.aumentar_volume()
tv.aumentar_volume()

tv.informacoes_do_canal()
