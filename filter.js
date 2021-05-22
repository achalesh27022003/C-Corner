let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]
let usingFilter = () => {
    return unique = animals.filter(function(item,index){
        return animals.indexOf(item) == index;
    });
}
console.log(usingFilter())