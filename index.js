let item1 = {
  price: document.getElementById("1"),
  quantity: 0,
  inpunt: document.getElementById("form1"),
  total: 0,
};
item1.inpunt.addEventListener("change", (e) => {
  item1.quantity = e.target.value;
  let price = parseFloat(item1.price.textContent);
  item1.total = price * item1.quantity;
});
let item2 = {
  price: document.getElementById("2"),
  quantity: 0,
  inpunt: document.getElementById("form2"),
  total: 0,
};
item2.inpunt.addEventListener("change", (e) => {
  item2.quantity = e.target.value;
  let price = parseFloat(item2.price.textContent);
  item2.total = price * item2.quantity;
});
let item3 = {
  price: document.getElementById("3"),
  quantity: 0,
  inpunt: document.getElementById("form3"),
  total: 0,
};
item3.inpunt.addEventListener("change", (e) => {
  item3.quantity = e.target.value;
  let price = parseFloat(item3.price.textContent);
  item3.total = price * item3.quantity;
});

const btn = document.getElementById("checkout");
btn.addEventListener("click", () => {
  if (item1.quantity === 0) {
    let element = document.getElementById("element1");
    element.remove();
  }
  if (item2.quantity === 0) {
    let element = document.getElementById("element2");
    element.remove();
  }
  if (item3.quantity === 0) {
    let element = document.getElementById("element3");
    element.remove();
  }

  let total = item1.total + item2.total + item3.total;
  let result = document.getElementById("total");
  result.innerText = total;
});

const remove = (id) => {
  const element = document.getElementById(id);
  element.remove();
};
