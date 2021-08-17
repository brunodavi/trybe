function func(resolve, error) {
  const list = [2,3,5,10];
  const arr = [54, 67, 84, 12];

  const { random, floor} = Math;
  const div1 = floor(random() * 4);
  const div2 = floor(random() * 4);

  const number = floor(arr[div1] / list[div2]);

  if (number > 10) {
    // Envia 'Resolvido' como argumento para a função que estiver no .then
    return resolve('Resolvido');
    //   ^ return serve apenas para parar a função
  }
  // Envia 'Erro' como argumento para a função que estiver no .catch
  error('Erro');
}

const promise = new Promise(func);

promise
.then(console.log)   // Mostra o que foi enviado como argumento   --> 'Resolvido' 
.then(console.log)   // Mostra o que foi retornado como argumento -->  undefined
.catch(console.log); // Mostra o que foi enviado como argumento   --> 'Erro'
