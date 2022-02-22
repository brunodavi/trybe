def line(symbol, border=''):
    if border:
        print(f"{border}{symbol * 30}{border}")
    else:
        print(f" {symbol * 30}")


def tab(size):
    s = size // 2
    print(f"|{'-' * s}|{'-' * (s - 1)}|")


class Cafe:
    def __init__(self, nome, valor):
        self.nome = nome
        self.valor = valor


class Cafeteria:
    def __init__(self, nome, produtos = []):
        self.nome = nome
        self.produtos = produtos

        self.valor_da_compra = 0
        self.carrinho_de_compras = []

    def lista_de_pedidos(self):

        line('_')
        print(f"|{self.nome:^30}|")
        line('-', '|')

        print(f"|{'Nome':^15}|{'Preço':^14}|")
        tab(30)

        for produto in self.produtos:
            nome = produto.nome
            valor = f"{produto.valor:.2f}"

            print(f"|{nome:^15}|{valor:^14}|")

            if nome != self.produtos[-1].nome:
                tab(30)
            else:
                line('-')


    def adicionar_produto(self, cafe):
        self.produtos.append(cafe)

    def adicionar_ao_carrinho(self, produto):
        self.valor_da_compra += produto.valor
        self.carrinho_de_compras.append(produto)

    def finalizar_compra(self):
        if len(self.carrinho_de_compras) > 0:
            print(f"O valor total foi {self.valor_da_compra}")
        else:
            print("Adicione um produto ao no carrinho")


cafe_expresso = Cafe('Cafe Expresso', 3.50)
cafe_preto = Cafe('Cafe Preto', 1.00)
caputino = Cafe('Caputino', 4.50)
nescafe = Cafe('Nescafe', 5.00)

cafeteria_do_seu_ze = Cafeteria('Cafeteria do seu Zê', [
    cafe_expresso,
    cafe_preto,
    caputino,
    nescafe,
])

cafeteria_do_seu_ze.lista_de_pedidos()
