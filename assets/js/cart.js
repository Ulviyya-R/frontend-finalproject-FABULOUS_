
let trparent = document.querySelector(".product-table-body");
let basket = JSON.parse(localStorage.getItem("basket"));


basket.forEach((baskets) => {
  let task = `
<tr id="${baskets.id}">
<td class="text-center"><div class="cart-image">
<img style="width: 104px;" src="${baskets.src}" alt="">
</div></td>
 <td class="text-left">${baskets.name}</td>
<td class="text-left"><span class="me-2">Product</span>${baskets.id}</td>
 <td class="text-left"><div class="d-flex"  style="max-width: 200px;">
 <input type="text" value="${
    baskets.count
 }" size="1" class="form-control" style="height: 33px;" >
        <span class="input-group-btn">
       <div class="buttons m-0 p-0">
       <p class="first"><i class="fa fa-refresh"></i></p>
       <p class="second"><i class="fa fa-times-circle"></i></p>

       </div>

        </span></div></td>
    <td class="text-right unit-price">${baskets.price}€</td>
    <td class="text-right total-price">${
      parseInt(baskets.price) * baskets.count
    }€</td>
</tr>
`;
  trparent.innerHTML += task;
});

let delbtn = document.querySelectorAll(".fa-times-circle");

delbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let tr =
      this.parentElement.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    console.log(tr);
    let id = tr.getAttribute("id");
    basket = basket.filter((baskets) => baskets.id != id);
    tr.remove();
    ShowCount(basket);
    ShowTotalPrice(basket);
    localStorage.setItem("basket", JSON.stringify(basket));
    SearchLenght();
  });
});

$(".wouldlike-title").click(function () {
  $(this).next().slideToggle();
  $(".wouldlike-info").not($(this).next()).slideUp();
});

let section_cart = document.getElementById("carts");
let empty = document.getElementById("empty-body");
let accordion = document.getElementById("accordions");

if (!basket || basket.length <= 0) {
  accordion.style.display = "none";
  section_cart.style.display = "none";
  empty.classList.remove("passiv");
} else {
  accordion.style.display = "block";
  section_cart.style.display = "block";
  empty.classList.add("passiv");
}
SearchLenght();
function SearchLenght() {
  if (trparent.children.length == 0) {
    accordion.style.display = "none";
    section_cart.style.display = "none";
    empty.classList.remove("passiv");
  } else {
    accordion.style.display = "block";
    section_cart.style.display = "block";
    empty.classList.add("passiv");
  }
}
