// ========== Cookie Management ==========
function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  document.cookie = `${cname}=${cvalue};expires=${date.toUTCString()};path=/`;
}

function getCookie(cname) {
  let cookies = document.cookie.split(';');
  for (let c of cookies) {
    let [name, value] = c.trim().split('=');
    if (name === cname) return value;
  }
  return "";
}

// ========== Welcome Message ==========
let username = getCookie("username");
if (!username) {
  username = prompt("Please enter your name:");
  if (username) setCookie("username", username, 7);
}
document.getElementById("welcome").textContent = `Welcome, ${username}!`;

// ========== Shopping Cart ==========
let cartBtns = document.querySelectorAll(".CartBtn");
cartBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    btn.textContent = "Added to Cart ✅";
    addToCart(btn.getAttribute("data-item"));
  });
});

function addToCart(item) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(item); // Just push the item name
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart");
  cartList.innerHTML = ""; // Clear old items

  cart.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element; // element is just a string like "Product A"
    cartList.appendChild(li);
  });

  document.getElementById("cartCount").textContent = cart.length;
}

// Initial render on page load
renderCart();

// ========== Wishlist (localStorage) ==========

let wishBtn = document.querySelectorAll(".wishBtn");
wishBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        btn.textContent = "Added to Wishlist ❤️";
        addToWishlist(btn.getAttribute("data-item"));
    });
});

function addToWishlist(item){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if(!wishlist.includes(item)){
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }
}

function renderWishlist(){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let wishListEl = document.getElementById("wishlist");
    wishListEl.innerHTML = "";
    wishlist.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        wishListEl.appendChild(li);
    });
    document.getElementById("wishCount").textContent = wishlist.length;
}
// Initial render on page load
renderWishlist();
