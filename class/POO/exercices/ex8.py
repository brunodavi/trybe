from abc import ABC, abstractmethod

class ManipuladorDeLog:

    def formatar(self):
        pass

    @abstractmethod
    def log(self):
        raise NotImplementedError

class LogEmArquivo(ManipuladorDeLog):
    def log(self):
        pass

class LogEmTela(ManipuladorDeLog):
    def log(self):
        pass

class Log:
    manipuladores = [LogEmTela()]

    def adicionar_manipulador(self, manipulador):
        manipuladores.append(manipulador)

    def info(self):
        pass

    def alerta(self):
        pass

    def error(self):
        pass

    def debug(self):
        pass

