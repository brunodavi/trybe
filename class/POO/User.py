from Mailer import Mailer

# [ 1º Pilar ]
# Abistração - Criar entidades de acordo com suas responsabilidades

# [ 2º Pilar ]
# Encapsulamento - Desnecessidade de verificar o código para saber o que um método faz

# CLASSE/ENTIDADE
class User:
    # CONSTRUTOR
    def __init__(self, name, email, password):
        """
        Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!
        """

    # ATRIBUTOS
        self.name = name
        self.email = email
        self.password = password

    # MÉTODOS
    def sign(self):
        print(self.name, "Logado")


    def reset_password(self):
        meu_mailer = Mailer("password_reset@teste.com", "myverysafepassword", self.email)
        meu_mailer.send_email("Reset your password", "Instruções para resetar a senha, com o link de resetar")



# OBJETO/INSTÂNCIA
valentino = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")

print(valentino)
print(valentino.name)
print(valentino.email)
print(valentino.password)

valentino.sign()
valentino.reset_password()
