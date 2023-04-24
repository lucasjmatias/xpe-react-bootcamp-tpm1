import { getProducts } from './modules/products-api.js';
import { renderProduct } from './modules/render.js';
import { productSorter } from './modules/utils.js';

(async () => {
  let products = await getProducts();

  const nameElement = document.getElementById('name');
  const brandElement = document.getElementById('brand');
  const typeElement = document.getElementById('type');
  const sorterElement = document.getElementById('sort');

  nameElement.addEventListener('keydown', async function (elm) {
    renderProducts();
  });

  brandElement.addEventListener('change', async function (elm) {
    await filterProducts();
    renderProducts();
  });

  typeElement.addEventListener('change', async function (elm) {
    await filterProducts();
    renderProducts();
  });

  sorterElement.addEventListener('change', async function (elm) {
    renderProducts();
  });

  renderProducts();

  async function filterProducts() {
    const brandFilter = brandElement.value || null;
    const typeFilter = typeElement.value || null;
    products = await getProducts({ brandFilter, typeFilter });
  }

  function renderProducts() {
    const nameFilter = nameElement.value;
    let fnFilter = (i) => i;
    // Filtros não disponibilizados pela API
    if (nameFilter) {
      fnFilter = (i) =>
        i.name &&
        i.name.trim().toLowerCase().startsWith(nameFilter.trim().toLowerCase())
          ? 1
          : 0;
    }

    const sorterName = sorterElement.value;
    const sortedProducts = products
      .filter(fnFilter)
      .sort(productSorter(sorterName));

    const productsHtml = sortedProducts
      .map((p) => renderProduct(p, true))
      .join('');
    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.innerHTML = productsHtml;
    const productElements = mainElement.getElementsByClassName('product');
    for (const productElement of productElements) {
      productElement.addEventListener('click', function () {
        const detailElement = this.getElementsByClassName('product-details')[0];
        console.log(detailElement.style);
        if (
          detailElement.style.display &&
          detailElement.style.display.includes('none')
        ) {
          detailElement.style.display = 'inline';
        } else {
          detailElement.style.display = 'none';
        }
      });
    }
  }
})();
