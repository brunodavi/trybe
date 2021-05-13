const promise = new Promise((resolve, reject) => {
  const counter = [1,2,3,4,5,6,7,8,9,0].reduce((r) => {
    const { random, floor } = Math;
    return r + floor((random() * 49) + 1) ** 2
  })

  if (counter <= 8000) {
    return reject(counter);
  }
  resolve(counter);
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));

