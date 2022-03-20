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
const order = document.getElementById("orderBtn");
const checkOut = document.getElementById("checkOutBnt");

//create an object pizzaSize ,toppings and crust
const foodStuff = {
  pizzaSize: {
    small: "100",
    medium: "250",
    large: "350",
  },
  toppings: {
    olive: "150",
    chesse: "300",
    Pepperoni: "400",
  },
  crust: {
    stuffed: "100",
    glutterFree: "150",
    crispy: "500",
  },
};

//event listener to order and checkout button

order.addEventListener("click", function () {
  const optionPizza = document.getElementById("pizza").value;
  const optionToppings = document.getElementById("toppings").value;
  const optionCrust = document.getElementById("crust").value;
  const food = foodStuff[optionPizza.select][optionToppings.select][optionCrust];
});

checkOut.addEventListener("click", function (yes, no) {});

// function to display to the user.
function outPutToUser(){
  document.querySelector(".container-display").innerHTML = "Your Snacks Are:" + foodStuff;
}