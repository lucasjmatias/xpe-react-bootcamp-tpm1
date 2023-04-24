import { getProducts } from './modules/products-api.js';
import { renderProduct } from './modules/render.js';
import { productSorter } from './modules/utils.js';

(async () => {
  let products = await getProducts();

  const nameElement = document.getElementById('name');
  const brandElement = document.getElementById('brand');
  const typeElement = document.getElementById('type');
  const sorterElement = document.getElementById('sort');

  nameElement.addEventListener('focusout', function (elm) {
    renderProducts();
  });

  sorterElement.addEventListener('change', function (elm) {
    renderProducts();
  });

  renderProducts();

  async function filterProducts() {
    const nameFilter = nameElement.value || null;
    const brandFilter = brandElement.value || null;
    const typeFilter = typeElement.value || null;
    products = await getProducts({ nameFilter, brandFilter, typeFilter });
  }

  function renderProducts() {
    const sorterName = sorterElement.value;
    console.log(productSorter(sorterName));
    const sortedProducts = products.sort(productSorter(sorterName));

    console.log([...new Set(products.map((p) => p.product_type))]);

    const productsHtml = sortedProducts
      .map((p) => renderProduct(p, true))
      .join('');
    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.innerHTML = productsHtml;
  }
})();
