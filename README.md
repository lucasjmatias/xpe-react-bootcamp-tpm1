# Bootcamp React - TPM1 - Trabalho Prático do Módulo 1

Trabalho prático do módulo 1 do bootcamp react, Pós-graduação em Desenvolvimento Full Stack - XP Educação

Construção de uma aplicação de catálogo de produtos de maquiagem a ser consumido de uma API utilizando JavaScript puro e HTML.

## Atividades

- [x] Implementar em JavaScript puro, HTML e CSS uma aplicação para apresentação do catálogo de produtos de maquiagem;

  > **API**:  
  > https://makeup-api.herokuapp.com/

- [x] Carregar as informações necessárias para a aplicação;

  > **Rota**:  
  > http://makeup-api.herokuapp.com/api/v1/products.json

- [x] A aplicação deverá possuir **3 filtros**, sendo eles **Nome, Marca e Tipo**;

  > Relacionados aos campos **name, brand e product_type**, respectivamente.

- [x] A aplicação deverá incluir a **ordenação** dos produtos na página por **Melhor Avaliados**, por **Menores Preços e Maiores Preços**, e por **A-Z e Z-A** relacionados;

  > Relacionados aos campos **rating, price e name**, respectivamente.

- [x] Na apresentação para cada um dos produtos deve ser apresentada sua **imagem, o nome do produto abaixo da imagem, a marca e o preço**;

  > Conforme trecho de HTML abaixo:

  ```html
  <div
    class="product"
    data-name="CoverGirl Ultimate Finish Liquid Powder Makeup"
    data-brand="CoverGirl"
    data-type="foundation"
    tabindex="384"
    style="display: block;"
  >
    <figure class="product-figure">
      <img
        src="https://d3t32hsnjxo7q6.cloudfront.net/i/1aa7e9e399d24c2a747137df51026ed2_ra,w158,h184_pa,w158,h184.jpeg"
        width="215"
        height="215"
        alt="CoverGirl Ultimate Finish Liquid Powder Makeup"
        onerror="javascript:this.src='img/unavailable.jpeg'"
      />
    </figure>
    <section class="product-description">
      <h1 class="product-name">
        CoverGirl Ultimate Finish Liquid Powder Makeup
      </h1>
      <div class="product-brands">
        <span class="product-brand background-brand">Covergirl</span>
        <span class="product-brand background-price">R$ 9.99</span>
      </div>
    </section>
    ....
  </div>
  ```

- [x] Para o preço do produto deverá ser aplicado um fator de conversão de R$5,50 e exibido o seu preço com 2 casas decimais;

  > **Exemplo:** Um price de 10.49 aplicado a um fator de 5,50, o produto apresentará o valor de R$ 57,70.

- [x] Ao clicar no produto seus detalhes como **Marca, Preço, Avaliação
      , Categoria e Tipo**;

  > Relacionados aos campos **brand, price, rating, category e product_type**, respectivamente.

  > Conforme trecho de HTML abaixo:

  ```html
  <div
    class="product"
    data-name="CoverGirl Ultimate Finish Liquid Powder Makeup"
    data-brand="CoverGirl"
    data-type="foundation"
    tabindex="384"
    style="display: block;"
  >
    <figure class="product-figure">
      <img
        src="https://d3t32hsnjxo7q6.cloudfront.net/i/1aa7e9e399d24c2a747137df51026ed2_ra,w158,h184_pa,w158,h184.jpeg"
        width="215"
        height="215"
        alt="CoverGirl Ultimate Finish Liquid Powder Makeup"
        onerror="javascript:this.src='img/unavailable.jpeg'"
      />
    </figure>
    <section class="product-details">
      <div class="detail-rows">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width:250px">covergirl</div>
        </div>
      </div>
      <div class="detail-rows">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width:250px">9.99</div>
        </div>
      </div>
      <div class="detail-rows">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width:250px">5</div>
        </div>
      </div>
      <div class="detail-rows">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width:250px">cream</div>
        </div>
      </div>
      <div class="detail-rows">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width:250px">foundation</div>
        </div>
      </div>
    </section>
  </div>
  ```

- [x] A página inicial deverá carregar todos os produtos considerando a ordenação por **Melhor Avaliados**, não sendo necessário realizar nenhuma paginação e nenhum filtro.

## Dicas:

> Utilizem o fetch para consumo da API e os conceitos apresentados nas videosaulas para implementação do trabalho

> Algumas informações dos produtos estão como null, portanto para estes casos será necessário desconsiderar a exibição da informação nos detalhes dos produtos bem como nos critérios para ordenações e filtros. Exemplo: Para informação numérica (rating, price, ...) considerar o valor 0 como default e para informações textuais (brand, product_type,..) considerar o valor “” como default.

> Alguns produtos não terão sua imagem carregada, utilizem a imagem default disponibilizada no projeto base para caso de erro no carregamento da imagem.

> Caso tenham dificuldades com a API, poderá ser utilizado como alternativa o json-server com o .json dos dados disponibilizado no projeto base.
