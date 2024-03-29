const filterAPIURL = "https://clasificados-app.herokuapp.com/api/search/filter";
  const filterMeAPIURL = "https://clasificados-app.herokuapp.com/api/search/me";

/**
 * Get the query params and get the products with filters
 */
function getProducts() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("category");
  const cityId = urlParams.get("city");
  const myPublications = urlParams.get("me");
  const totalItems = document.querySelector("#total-items");
  let url = `${filterAPIURL}/${cityId}/${categoryId}`;

  if (myPublications && userData.id) {
    url = `${filterMeAPIURL}/${userData.id}`;
  }

  toggleSpinner(true);

  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      totalItems.innerHTML = products.length;
      renderProducts(products);
    })
    .catch((error) => {
      totalItems.innerHTML = "0";
      toggleSpinner(false);
      toggleAlert(true);
    });
}

/**
 * Get product list using the filters
 */
function init() {
  getProducts();
}

init();
