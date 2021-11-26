//Update point got by user
function updateCurrentPoint(prevPoint) {
  currentPoint += prevPoint;
  storeCurrentPoint.textContent = currentPoint;
}

//Info Store Item
let storeArrow = new Map();
storeArrow
  .set(0, { name: "毛利元就", price: 2, arrowQty: 2 })
  .set(1, { name: "武田信玄", price: 4, arrowQty: 4 })
  .set(2, { name: "上杉謙信", price: 8, arrowQty: 8 })
  .set(3, { name: "織田信長", price: 10, arrowQty: 12 });
let itemInfo;
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const itemQty = document.getElementById("itemQty");
const mainItemImg = document.getElementById("mainItemImg");
const storeItems = document.querySelectorAll(".storeItem");
const btnBuy = document.getElementById("btnBuy");

//Click item and show info
storeItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemInfo = storeArrow.get(index);
    itemName.textContent = itemInfo.name;
    itemPrice.textContent = itemInfo.price;
    itemQty.textContent = itemInfo.arrowQty;
    let itemImg = item.src;
    mainItemImg.src = itemImg;
  });
});

//Btn buy
btnBuy.addEventListener("click", () => {
  if (itemInfo === undefined) {
    alert("Pls pick your favorite item !!!");
  } else {
    if (confirm("Are you sure you want to buy ?")) {
      if (currentPoint >= itemInfo.price) {
        let txtTurn = defaultTurn + itemInfo.arrowQty;
        let txtPrice = itemInfo.price * -1;
        updateCurrentPoint(txtPrice);
        defaultTurn = txtTurn;
        turn.textContent = defaultTurn;
      } else {
        alert("You can't buy !!!");
      }
    }
  }
});
