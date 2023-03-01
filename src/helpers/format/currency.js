function formatCurrency(value, decimals = 0) {
  const currency = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "IDR",
  });

  return currency.format(value);
}

export default formatCurrency;
