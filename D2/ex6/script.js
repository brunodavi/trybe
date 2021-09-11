const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => (
  `Olá ${order.name}, `
  + `entrega para: ${order.order.delivery.deliveryPerson}, `
  + `Telefone: ${order.phoneNumber}, `
  + `${order.address.street}, `
  + `Nº: ${order.address.number}, `
  + `AP: ${order.address.apartment}`
)

out = customerInfo(order);
console.log(out);

const orderModifier = (order) => (
  `Olá João Kleber, `
  + `o total do seu pedido de muzzarella, `
  + `calabresa e ${order.order.drinks.coke.type} é R$ 50,00.`
)

out = orderModifier(order);
console.log(out);
