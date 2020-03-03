function calcularMedia(nota1,nota2,segchmd){

    let media;

    if(nota1 != null && nota2 != null){

        media = (nota1+nota2)/2;

    }else {

        if(nota1 == null && nota2 == null && segchmd != null){

            media = segchmd/2;

        }else if(nota1 != null && segchmd != null) {

            media = (nota1+segchmd)/2;

        }else {

            media = (nota2+segchmd)/2
        }

    }

    return media;
 


}

module.exports.calcularMedia = calcularMedia;