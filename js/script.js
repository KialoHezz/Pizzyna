// User logic
$(document).ready(function () {
  $(".toggle").click(function () {
    $("#smallImgToggle").toggle();
    $("#HiddenParagraph").toggle();
  });
  $("#secontoggle").click(function () {
    $("#secondToggle-img").toggle();
    $("#Paragraphhidden").toggle();
  });
  $(".thirdToggle").click(function () {
    $("#thirdImageToggle").toggle();
    $("#hiddenThirdParagraph").toggle();
  });
});

// business logic

//getting option button,order,checkout

const optionPizza = document.getElementById("pizza").value;
const optionToppings = document.getElementById("toppings").value;
const optionCrust = document.getElementById("crust").value;
const order = document.getElementById("orderBtn");
const checkOut = document.getElementById("checkOutBnt");

//create an object pizzaSize
const pizzaSize = {
  small: "100",
  medium: "250",
  larger: "350",
};

//create an object toppings
const toppings = {
  olive: "150",
  chesse: "300",
  Pepperoni: "400",
};

//create an object crust
const crust = {
  stuffed: "100",
  glutterFree: "150",
  crispy: "500",
};

//event listener to order and checkout button

order.addEventListener("click", function(){
  
})