// lets learn array
let display=document.querySelector(".box");
const data=[];
data[0]='volvo';
data[1]="aditya";
data[2]='sharma';
// data.push('Aditya');       for adding data in end
// data.shift();              for removing data from first
// data.unshift('case1');     for adding data in start
// let lastName=data.length-1; for finding last name
// data[data.length]='Case4';   adding element to array using length property
// Array.isArray(data); checks the statement is an array or not 


/*iterating array using for loop in javascript

let text='';
 for(let i=0; i<data.length; i++){
     text=text+"<li>"+data[i]; 
}

*/

/* Using "forEach()" fucntion for loops in array

let text='';
data.forEach(e => {
    text+=e;
});

*/
/* creating a nested array and accessing it using for loop

let obj={
    name:'car1',
    model:'MG Hector',
    yom:2016,

    list:[
        {name:'Ford', models:['Lambo','Hurricane',]},
        {name:'tata',models:['suzuki','hector']}
    ]
}
let x='';
for (let i in obj.list){
    x+=obj.list[i].name+'<br>';
    for(let j in obj.list[i].models){
        x+=obj.list[i].models[j]+'<br>';
    }

}

*/
display.innerHTML=data;