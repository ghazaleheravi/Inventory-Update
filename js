// freecodeCamp - coding interview prep - Inventory Update


var curInv = [                   
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [                     
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2) {
    var nm=[];
    var diw = false;
    let reducer ;
    if(arr2.length == 0){
        reducer = arr1;
    } else if(arr1.length == 0){
        reducer = arr2;
    } else{
        reducer = arr2.reduce((arr,item)=>{
            for(let i = 0; i<arr1.length;i++){
                if(item[1] == arr1[i][1]){
                    arr1[i][0] += item[0];
                    diw = true;
                }
            }   if(!diw){
                    nm.push(item);
                }
            diw = false;
            arr = arr1.concat(nm);
            return arr;
        }, [])
    }

    var mapped = reducer.map((el,idx) => {
        return {index:idx, value1: el[1], value0: el[0]};
    })

    mapped.sort(function(a,b) {
        return (a.value1 == b.value1) ? 0 : (a.value1<b.value1) ? -1 : 1;
    })

    var result = mapped.map((obj) => {
        return [obj.value0, obj.value1];
    });
   
    return result;
}



