// for the category.
let filter = document.querySelectorAll(".filter");
let filterValue = "";
for (let value of filter) {
  let p = value.querySelector("p");
  value.addEventListener("click", () => {
    // console.log(p.innerText.split(" ").join(""));
    filterValue = p.innerText.split(" ").join("");
  });

}


