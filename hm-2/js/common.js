//1. Написать плагин, который находит число в массиве.
var array = ['one', 2, 'three', 4, 'five', 1];
function searchString (array) {
    var i = 0;
    while (i < array.length){
        i++;
        if (typeof(array[i]) === typeof(1))
            console.log(array[i]);
    }
}
searchString(array);

//2. Дан массив 1,2,3,”строка”,5,6, найти строку в массиве и вывести на экран.
var dataSet = [1, 2, 3, 'строка', 5, 6];
var i = 0;
while (i < dataSet.length){
    i++;
    if (typeof(dataSet[i]) === typeof(''))
        console.log(dataSet[i]);
}

//3. Сортировка массива пузырьком
var arr = [1, 6, 3, 2, 5, 4];
console.log('array: ' + arr);
function sortBubble(arr) {
    for(var j = 0; j < arr.length; j ++){
        for(var i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i + 1]) {
                var k = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = k;
            }
        }
    }
    console.log('sort array: ' + arr);
}
sortBubble(arr);
