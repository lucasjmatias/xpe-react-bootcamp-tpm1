const renderProduct = (product, renderDetail = false) => {
  const { id, image_link, name, brand, price, category, product_type, rating } =
    product;

  const productHtml = `
        <div class="product" data-name="${name}" data-brand="${brand}"
        data-type="${product_type}" tabindex="${id}" style="display: block;">
        <figure class="product-figure">
          <img
            src="${image_link}"
            width="215" height="215" alt="${name}"
            onerror="javascript:this.src='img/unavailable.jpg'" />
        </figure>
        <section class="product-description">
          <h1 class="product-name">
          ${name}
          </h1>
          <div class="product-brands">
            <span class="product-brand background-brand">${brand}</span>
            <span class="product-brand background-price">R$ ${price}</span>
          </div>
        </section>
        ${
          renderDetail
            ? `
            <section class="product-details">
              <div class="detail-rows">
                <div>Brand</div>
                <div class="details-bar">
                  <div class="details-bar-bg">${brand}</div>
                </div>
              </div>
              <div class="detail-rows">
                <div>Price</div>
                <div class="details-bar">
                  <div class="details-bar-bg">R$ ${price}</div>
                </div>
              </div>
              <div class="detail-rows">
                <div>Rating</div>
                <div class="details-bar">
                  <div class="details-bar-bg">${rating}</div>
                </div>
              </div>
              <div class="detail-rows">
                <div>Category</div>
                <div class="details-bar">
                  <div class="details-bar-bg">${category}</div>
                </div>
              </div>
              <div class="detail-rows">
                <div>Product_type</div>
                <div class="details-bar">
                  <div class="details-bar-bg">${product_type}</div>
                </div>
              </div>
            </section> `
            : ''
        } 
      </div>
  `;

  return productHtml;
};

export { renderProduct };
