// Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label
// const stock = product.stock
// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, price, stock, salePrice } = product) => {
  console.log(type, label, stock);
};

transaction("order", product);
