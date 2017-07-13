let customer = document.querySelector("#customer");
let results = customers.results;
let template = ("");

console.log(customer);

for (var i = 0; i < results.length; i++) {
  template +=  `
  <div class="container">
  <img src=${results[i].picture.large}>
  <h3>${results[i].name.first} ${results[i].name.last}</h3>
  <hr>
  <p class="email">${results[i].email}</p>
  <p class="street">${results[i].location.street}</p>
  <p class="address">${results[i].location.city}. ${results[i].location.state} ${results[i].location.postcode}</p>
  <p class="phone">${results[i].phone}</p>
  <p class="ssn">${results[i].id.value}</p>
  </div>`

  console.log(template);

}

customer.innerHTML = template;
