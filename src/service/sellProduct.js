/**
 * A quantidade vendida pode ser  de 1 ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançada
 * -->  O vaor de venda não pode ser maior do que o valor de compra
 * @param {*} product 
 * @param {*} ammout 
 */

export default function sellProduct(product, ammout) {

  product.stock -= ammout
  return product
}