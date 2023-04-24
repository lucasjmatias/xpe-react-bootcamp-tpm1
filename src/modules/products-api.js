const baseUrl = 'https://makeup-api.herokuapp.com/api/v1';

const prepareProduct = (product) => {
  const preparedProduct = {};

  preparedProduct.id = product.id || 0;
  preparedProduct.image_link = product.image_link;
  preparedProduct.name = product.name || '';
  preparedProduct.brand = product.brand || '';
  preparedProduct.price = ((product.price || 0) * 5.5).toFixed(2);
  preparedProduct.category = product.category || '';
  preparedProduct.product_type = product.product_type || '';
  preparedProduct.rating = product.rating || 0;

  return preparedProduct;
};

function fetchJson(url, options) {
  return fetch(url, options)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error(r.statusText);
      }
    })
    .catch((error) => {
      // showError("Error loading data", error);
      throw error;
    });
}

const getProducts = async ({ nameFilter, brandFilter, typeFilter } = {}) => {
  let fnFilter = (i) => i;
  const filters = ``;
  if (brandFilter) {
    filters += `&brand=${brandFilter}`;
  }
  if (typeFilter) {
    filters += `&product_type=${typeFilter}`;
  }
  // Filtros não disponibilizados pela API
  if (nameFilter) {
    fnFilter = i.name && i.name.startsWith(nameFilter) ? 1 : 0;
  }
  const products = await fetchJson(`${baseUrl}/products.json`, {
    mode: 'cors',
  });

  const preparedProducts = products
    .filter(fnFilter)
    .map((p) => prepareProduct(p));
  return preparedProducts;
};

export { getProducts };
