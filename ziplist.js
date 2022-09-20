const firstList = ['a', 'b', 'c'];
const secondList = [1, 2, 3];

function zipList (listOne, listTwo){
  let combinedList = [];
  for(let i = 0; i < listOne.length; i++) {
    combinedList.push(listOne[i],listTwo[i]);
  }
  return combinedList;
}

const zipListTheSimpleWay = (listOne, listTwo) => _.flatten(_.zip(listOne, listTwo));

console.log(zipList(firstList, secondList));
console.log(zipListTheSimpleWay(firstList, secondList));