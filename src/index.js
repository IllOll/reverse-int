module.exports = function reverse(n) {
    const str = n.toString()
    const numberTurn = str.split('').reverse().join('');


    return parseFloat(numberTurn)

}
