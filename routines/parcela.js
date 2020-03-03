calcularParcela = function(parcela, diasAtraso){

    let parcelaFinal;

    if(diasAtraso <= 30){

        parcelaFinal = (parcela*0.05)+parcela;

    }else if(diasAtraso >= 31 && diasAtraso <= 60) {

        parcelaFinal = (parcela*0.1)+parcela;

    }else if(diasAtraso > 60){

        parcelaFinal = (parcela*0.15)+parcela;

    }

    return parcelaFinal


}

module.exports.calcularParcela = calcularParcela;