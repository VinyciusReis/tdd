const chai = require("chai");
var expect = chai.expect;
const media = require("../routines/media");

describe("Calcular Média", () => {

    
    describe("Nota principal ", () => {

        it("Média tem que dar 8",() => {
        
            expect(media.calcularMedia(7,9)).to.equal(8);
        })
    
        
        it("Média tem dar 4",() => {
            
            expect(media.calcularMedia(4,4)).to.equals(4);
            
        })


    });
   
    describe("Nota com segunda-chamada",() => {

        
        it("Nota1 com segunda chama a média tem dar 7",() => {

            expect(media.calcularMedia(7,null,7)).to.equals(7);


        })

        it("Nota2 com segunda chamda a média é 10", () => {

            expect(media.calcularMedia(null,10,10)).to.equals(10);
        });

        it("somente nota da segunda-chamada tem que dar 6",() =>{

            expect(media.calcularMedia(null,null,10)).to.equals(5);

        })

    });
    
   
});