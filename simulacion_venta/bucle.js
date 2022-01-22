function bucleVentas(liquidez, tokens, compras, cantidad) {
    var liquidezAux = liquidez
    var tokensAux = tokens
    var precioAux = liquidezAux / tokensAux
    var comprasAux = compras
    var cantidadAux = cantidad
    var arrayLiquidezTokens = []

    for (i = 0; i < comprasAux; i++) {
        tokensAux = tokensAux + cantidadAux
        liquidezAux = liquidezAux - (cantidadAux * precioAux)
        precioAux = liquidezAux / tokensAux
    }
    alert('PVU: ' + precioAux.toFixed(3) + '$')
    arrayLiquidezTokens[0] = liquidezAux
    arrayLiquidezTokens[1] = tokensAux
    return arrayLiquidezTokens
}