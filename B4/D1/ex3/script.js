let nota = 67

if (nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!')
}
else if (nota < 80 && nota >= 60) {
  console.warn('Você está na nossa lista de espera')
}
else {
  console.error('Você foi reprovada(o)!!!')
}
