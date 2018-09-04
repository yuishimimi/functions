var hamburger = {
 meat: "beef",
 veg: "lettuce",
 cheese: "mozzarella",
 mayo: true,
 pepper: true,
 price: 7,
 quantity: 1
}
var askQuantity= prompt("how many burgers?");
window.alert(askQuantity + " " + "burgers");
window.alert("your total is" + " " + hamburger.price * askQuantity + "$");