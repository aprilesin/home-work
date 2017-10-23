// //1. Написать плагин, который находит число в массиве.
// var arr = ['one', 2, 'three', 4, 'five'];
// function search (a) {
//     for( var i = 0; i < a.length; i++ ){
//         if(typeof(a[i]) === typeof(1)){
//             console.log(a[i]);
//         }
//     }
// }
// search(arr);

//5. Дан массив 1,2,3,”строка”,5,6, найти строку в массиве и вывести на экран.
var dataSet = [1, 2, 3, 'строка', 5, 6];
for (var i = 0; i < dataSet.length; i++) {
 	if (typeof(dataSet[i]) === typeof('')){
        console.log(dataSet[i]);
    }
}