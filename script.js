// Author: Harri-Nicole Kinsman

// Array of product objects

const products = [
    {
      name: "Product 1",
      image: "img/product1.jpg",
      price: "$19.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "facial-care"
    },
    {
      name: "Product 2",
      image: "img/product2.jpg",
      price: "$24.99",
      description: "Praesent eu aliquam quam, eget pharetra arcu.",
      category: "facial-care"
    },
    {
        name: "Product 3",
        image: "img/product3.jpg",
        price: "$19.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "facial-care"
      },
      {
        name: "Product 4",
        image: "img/product4.jpg",
        price: "$24.99",
        description: "Praesent eu aliquam quam, eget pharetra arcu.",
        category: "facial-care"
      },
      {
        name: "Product 5",
        image: "img/product5.jpg",
        price: "$19.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "makeup"
      },
      {
        name: "Product 6",
        image: "img/product6.jpg",
        price: "$24.99",
        description: "Praesent eu aliquam quam, eget pharetra arcu.",
        category: "makeup"
      },
      {
        name: "Product 7",
        image: "img/product7.jpg",
        price: "$19.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "makeup"
      },
      {
        name: "Product 8",
        image: "img/product8.jpg",
        price: "$24.99",
        description: "Praesent eu aliquam quam, eget pharetra arcu.",
        category: "makeup"
      },
    // Add more product objects here
  ];

  const productList = document.querySelector(".product-list");
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');

function displayProducts() {
  productList.innerHTML = "";

  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  if (selectedCategories.length === 0) {
    products.forEach(product => {
      createProductCard(product);
    });
  } else {
    products.forEach(product => {
      if (selectedCategories.includes(product.category)) {
        createProductCard(product);
      }
    });
  }
}

function createProductCard(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const productImage = document.createElement("img");
  productImage.src = product.image;

  const productName = document.createElement("h2");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${product.price}`;

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";

  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(addToCartButton);

  productList.appendChild(productDiv);
}

displayProducts();

  categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", displayProducts);
  });