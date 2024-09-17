import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Testando classe ContaBancaria", () => {
  let conta: ContaBancaria ;
  beforeEach(() => { //antes de tudo tradução de beforeEach
    conta = new ContaBancaria()
  })

    test("método depositar", () =>{
      expect(conta.depositar(200)).toBe(200)
      //a expectativa é que seja depositado 200 e realmente fique 200
})

    test("método depositar teste de erro", () =>{
      expect(() => conta.depositar(-100)).toThrow('Valor inválido!')
      //expectativa que tente depositar -100 (mas foi foi feita a verificação dos números), então dará inválido
    })

    test("método sacar", () => {
      conta.depositar(10)
      expect(conta.sacar(5)).toBe(5);
    })
    test ("metodo sacar teste de erro", () => {
      conta.depositar (20)
      expect (()=>conta.sacar(30)).toThrow ('Valor inválido!')
   
    })
});



// let conta: ContaBancaria;
// beforeEach(() => {
// conta = new ContaBancaria();