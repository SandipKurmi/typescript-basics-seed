// const pizzas = [{name: 'Pepperoni', toppings: ['Pepperoni']}]

// const mappedPizza = pizzas.map((pizza) => pizza.name.toUpperCase()  )

// console.log(mappedPizza)

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: function () {
//         return this.name
//     }
// }

// console.log(pizza.getName())

//lesson 7
// const multiply = (a:any , b:any) => a * b;
// console.log(multiply(2, 24))

//lesson 8
// const pizza = {
//     name: 'megirata pizza',
//     price: 150,
//     getname () {
//         return this.name
//     }
// }

// console.log(pizza.getname())

// const toppings = ['Pepperoni']

// const order = {
//     pizza,
//     toppings
// }

// const order = (pizza: any, toppings:any) => {
//     return {pizza, toppings}
// }

// console.log(order(pizza, toppings))


//lession 9
//rest parametar

// const totalNumber = (message:any, ...arr:any) => {
//     console.log(message)
//     return arr.reduce((prev:any, next:any) => prev + next, 0)
// }

// const sum = totalNumber('sandip', 1,2,3,4,5,6,7,8,9,10)

// console.log(sum)

//lession 10
//sprade oprater

// const pizza = ['megirata', 'papronic']
// const toppings = ['onione']

// const order = [...pizza, ...toppings]

// console.log(order)


// const objPizza = {
//     name: ['megirata', 'Pepperoni'],
//     price: 150
// }

// const objToppings = {
//     Pizzaname: 'onione'
// }

// const newObjPizza = {...objPizza, ...objToppings}

// console.log(newObjPizza)

//lession 11
//dstructer obj and array

// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni']
// }

// const order = (pizza:any) => {
//     const {name:pizzaName, toppings: pizzaToppings} = pizza
//     return {pizzaName, pizzaToppings}

// }

// const {pizzaName,pizzaToppings } = order(pizza)

// console.log(pizzaName)
// console.log(pizzaToppings);


// const fruites = ['Apple', 'Mango', 'Guava']

// const [fru1, fru2, fru3] = fruites

// console.log(fru1, fru2, fru3)

// const allFruites = ([fru1, fru2, fru3] : any) => [
//     console.log(fru1 , fru2 , fru3)
// ]

// const data = allFruites(fruites)

//Numbers

// const pizza: number = 12
// const pizzaToppings : number = 6

// const totalPrice = (pizza: number, pizzaToppings: number):number => {
//     const getExtra: number = 1.7
//     return (pizza + getExtra) * pizzaToppings
// }

// console.log(typeof totalPrice(pizza,pizzaToppings))

//Strings

// const copones : string = 'copons25'
// const userName: string = 'sandip'

// const offers = (copones:string, user:string):string  => {
//     return `the user of this ${copones.toUpperCase()} is ${user.toUpperCase()}`
// }

// console.log(offers(copones, userName))

//lession 14 boolean

// const order :number = 2

// const offer = (order:number): boolean => {
//     return order > 3;
// }

// if(offer(order)){
//     console.log(`you ${order} order is vailed for coupon`)
// }else {
//     console.log(`you ${order} is less then 3 so you copon is not valed`)
// }


//lesson 15 any

// let copon :any ;
// copon = 15
// copon = 'copone15'
// copon = true


//lesson 16 impliset , explisit

// let implisetType = 'copon25' ;
// let explisitType: string = 'copon25'

//lesson 17 void

//void mins no type => mins we are not returning any thing
//we only give void to the function it's for reding purpose

// let selectedToppings:string = 'papornic'

// console.log(selectedToppings)

// const selectTopping = (toppings: string) : void => {
//     selectedToppings = toppings
// }

// selectTopping('onion')


// console.log(selectedToppings)

//lesson 18
//never type
//if we want to throw an error
//if function never going to return any thing

// const orderError = (error: string):never => {
//     throw new Error(error)
// }

// orderError(`Something went Wrong`)

//lesson 19
//null or undefined
//turn of tsconfig strict mode 

// let copon:string = 'copon25'

// const removeCopone = ():void => {
//     copon = undefined
// }

// console.log(copon)

// removeCopone()

// console.log(copon)


//lesson 20
//unioun type

//string
// let pizzaSize: string = 'small'


// function funPizzaSize (size : | 'small' | 'large' | 'medium'):void {
//     pizzaSize = size
// }

// funPizzaSize('large')

// console.log(`the pizza size is ${pizzaSize}`)

//number

// let collageScore : number = 3

// function getScore (score : 100 | 200 | 300 | 400){
//     collageScore = score
// }

// getScore(300)


// console.log(`The collage score is ${collageScore}`)

//boolean

// let isLodding : boolean = true

// function getLodding (lodding : true | false) {
//     isLodding = lodding
// }

// getLodding(true)
// console.log(isLodding)


//lession 21
//function 
// let sumQuantity : (num:number , quentity: number) => number;

// sumQuantity = (a, b) => a * b

// console.log(sumQuantity(10,2))

//string 

// let userName : (fristName: string, lastName: string) => string;

// userName = (fristName, lastName) => `frist Name is ${fristName} and last name is ${lastName}`

// console.log(userName('sandip', 'kurmi'))


//optinal Paramitar 

// let getTotalQuntity : (numOfPizza : number , quentity?:number) => number;

// getTotalQuntity = (x,y) => {
//     if(y){
//         return x * y
//     }
//     return x 
// }

// console.log(getTotalQuntity(25,2));






