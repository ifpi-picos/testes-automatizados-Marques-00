import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Testando classe ContaBancaria", () => {
  //criando duas contas
  let conta: ContaBancaria ;
  let segundaConta: ContaBancaria;
  beforeEach(() => { //antes de tudo tradução de beforeEach (antes de qualquer ccoisa, cria duas contas)
    conta = new ContaBancaria()
    segundaConta= new ContaBancaria
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
      //a expectativa é que eu saque 5 e fique com 5 na conta
    })
    test ("metodo sacar teste de erro", () => {
      conta.depositar (20) //depositei 20
      expect (()=>conta.sacar(30)).toThrow ('Valor inválido!')
      //a expectativa é que tente sacar 30 (mas é mais do que tem na conta), então não dê certo
   
    })
    test ("metodo transferir", ()=>{
      conta.depositar (200) //depositei 200 na minha conta
      expect (conta.transferir (100, segundaConta)).toBe (100)
    //a expectativa é que eu tranfira 100 pra segunda conta e fique com 100

    })
    test ("metodo transferir teste de erro" ,()=>{
      conta.depositar (200)
      expect (()=> conta.transferir (300, segundaConta)).toThrow("Valor inválido ou saldo de insuficiente")
      //a expectativa é que tente tranferir 300 (mas é mais do que tem na conta), então não dá certo
    })
});



// let conta: ContaBancaria;
// beforeEach(() => {
// conta = new ContaBancaria();