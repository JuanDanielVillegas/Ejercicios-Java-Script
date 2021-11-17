
const shellSort = arr => {
    const gaps = [4, 2, 1];
    for ( let g = 0; g < gaps.length; ++g ) {
      for ( let i = gaps[ g ]; i < arr.length; ++i ) {
        const temp = arr[ i ];
        let j = i;
        for ( ; j >= gaps[ g ] &&
             arr[j-gaps[ g ] ] > temp;
             j -= gaps[ g ] ) {
          arr[ j ] = arr[ j - gaps[ g ] ];
        }
        arr[ j ] = temp;
      }
    }
    return arr;
}
let arreglo = [7, 8, 30, 30, 17, 87, 20, 41, 6, 10];
let resultado = shellSort(arreglo);
console.log(resultado);