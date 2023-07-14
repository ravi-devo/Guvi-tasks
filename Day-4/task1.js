//Question - For the given JSON iterate over all for loops.

let cars = [
    {
    made: 'Honda',
    model: 'Civic',
    year: 2010,
},
{
    made: 'BMW',
    model: '200D',
    year: 2019
},
{
    made: 'Benz',
    model: 'CD100',
    year: 2020
}
];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

cars.forEach((item) => {
    console.log(item.made)
})

for(let i in cars){
    console.log(cars[i]);
}

for(let value of cars){
    console.log(value);
}

// for(let value of cars){
//     console.log(value.model);
// }