export const discountPercentage = (originalPrice, discountedPrice) => {
  const dPrice = originalPrice - discountedPrice;
  const dPercentage = Math.ceil((dPrice / originalPrice) * 100);
  return dPercentage;
};
