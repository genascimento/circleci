import { TestScheduler } from 'jest'
import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve valir baixa de estoque da venda de uma unidade' , () => {
  let produto = new Product('celular' , 500.00, 900.00, 10 )
  sell( produto , 1)

  expect(produto.stock).toBe(9)
})

test('deve valir baixa de estoque da venda de uma unidade' , () => {
  let produto = new Product('celular' , 500.00, 900.00, 10 )
  sell( produto , 3)

  expect(produto.stock).toBe(7)
})