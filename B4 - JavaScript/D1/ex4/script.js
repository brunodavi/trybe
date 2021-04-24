let selection = 'none';

switch (selection) {
  case 'aprovada':
    console.log('Parabéns, você passou');
    break;

  case 'recuperação':
    console.warn('Você ainda tem chance de continuar');
    break;

  case 'reprovado':
    console.error('Não foi dessa vez')
    break;

  default:
    console.error('Valor Inválido')
    break;
}