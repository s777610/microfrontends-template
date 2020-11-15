import faker from 'faker';

// central point to load our app and render our app into that parent element
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  //document.querySelector('#dev-products').innerHTML
  el.innerHTML = products;
};

// run this file in development in isolation
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}

// run this file in parent container
export { mount };
