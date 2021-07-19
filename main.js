menu_list_array = [
  "Pepparoni Pizza",
  "Plain Cheese Pizza",
  "Chicken Pizza",
  "Veggie Pizza",
  "Deluxe Veggie Pizza",
];

function getmenu() {
  var htmldata;
  htmldata = "<ol class=menu_list>";
  menu_list_array.sort();
  for (let x = 0; x < menu_list_array.length; x++) {
    htmldata = htmldata + "<li>" + menu_list_array[x] + "</li>";
  }
  htmldata = htmldata + "<ol>";
  document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
  var htmldata;
  var item = document.getElementById("add_item").value;
  menu_list_array.sort();
  htmldata = "<section class='cards'>";
  for (let i = 0; i < menu_list_array.length; i++) {
    htmldata =
      htmldata +
      "<div class='card'>" +
      '<img src="images/pizzaImg.png"/>' +
      menu_list_array[i] +
      "</div>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
  }
}

function add_top() {
  var item = document.getElementById("add_item").value;
  menu_list_array.push(item);
  add_item();
}
