function comb(array, length) {
    console.log(array)
    return array.flatMap((v, i) => length > 1
        ? comb(array, length - 1).map(w => [v, ...w])
        : [[v]]
    );
}
comb(['a', 'b', 'c', 'd', 'e'], 3).forEach(a => console.log(...a));