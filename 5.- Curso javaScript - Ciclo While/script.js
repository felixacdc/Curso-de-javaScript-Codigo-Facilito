var contador = 0;

while ( contador < 10 ) {
    contador++;

    if ( contador % 2 != 0 ) {
        continue;
    }

    console.log(contador);
}

contador = 0;

while ( true ) {
    contador++;

    console.log(contador);

    if ( contador > 10 ) {
        break;
    }
}
// break: rompe o termina el ciclo
// continue: permite saltar a la siguiente iteracion del ciclo

contador = 0;

do {
    contador++;

    console.log(contador);

    if ( contador > 10 ) {
        break;
    }
} while ( false );