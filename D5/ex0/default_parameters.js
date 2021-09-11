const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

const multiply=(number = 0, value = 0)=>(
      `${number} + ${value} = ${number + value}`
);

console.log(multiply(8));

