const latestAPIURL = "https://clasificados-app.herokuapp.com/api/search/latest/5";

/**
 * Method to get the latest publications
 */
function getProducts() {
  toggleSpinner(true);

  fetch(latestAPIURL, { method: "GET" })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      renderProducts(products);
    })
    .catch((error) => {
      toggleSpinner(false);
      toggleAlert(true);
    });
}

/**
 * Method to check the user credentials are valid
 */
function init() {
  getProducts();
}

init();
