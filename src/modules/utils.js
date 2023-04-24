const identity = (i) => i;

const propertyCompare =
  (propertyName, desc = false) =>
  (a, b) => {
    const aProperty =
      typeof a[propertyName] === 'string'
        ? a[propertyName].toLowerCase().trim()
        : a[propertyName];
    const bProperty =
      typeof b[propertyName] === 'string'
        ? b[propertyName].toLowerCase().trim()
        : b[propertyName];
    if (aProperty > bProperty) {
      return desc ? 0 : 1;
    }
    if (aProperty < bProperty) {
      return desc ? 1 : -1;
    }
    return 0;
  };

const sorters = {
  'rating-desc': propertyCompare('rating', true),
  'maiores-precos': propertyCompare('price', true),
  'menores-precos': propertyCompare('price'),
  nome: propertyCompare('name'),
  'nome-desc': propertyCompare('name', true),
};

const productSorter = (sorterName) => {
  return sorters[sorterName] || identity;
};

export { productSorter };
