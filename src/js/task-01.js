const categoriesList = document.querySelectorAll("#categories .item");

const numberOfCategories = categoriesList.length;
console.log("Number of categories: " + numberOfCategories);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  const numberOfElements = categoryElements.length;
  console.log("Category: " + categoryName);
  console.log("Elements: " + numberOfElements);
});
