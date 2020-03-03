const chai = require("chai");
var expect = chai.expect;
const parcela = require("../routines/parcela");

describe("Cálculo do valor final da parcela",() => {

    
    it("Valor = 1000, atraso = 30, valor final da parcela = 1050 ", () => {

        expect(parcela.calcularParcela(1000,30)).to.equals(1050);

    });

    it("Valor = 5500, atraso 60 dias, valor final da parcela = 6050 ", () => {

        expect(parcela.calcularParcela(5500,60));

    })

    it("Valor = 12000, atraso = 47, valor final da parcela = 13.200",() => {

        
        expect(parcela.calcularParcela(12000,47));
        
    })

    it("Valor = 2500, atraso > 60, valor final da parcela = 2875",() => {

        expect(parcela.calcularParcela(2500,61)).to.equals(2875);

    })

});