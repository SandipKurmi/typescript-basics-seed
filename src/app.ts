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


//lesson 21
//function 
// let sumQuantity : (num:number , quentity: number) => number;

// sumQuantity = (a, b) => a * b

// console.log(sumQuantity(10,2))

//string 

// let userName : (fristName: string, lastName: string) => string;

// userName = (fristName, lastName) => `frist Name is ${fristName} and last name is ${lastName}`

// console.log(userName('sandip', 'kurmi'))

//lesson 22
//optinal Paramitar 

// let getTotalQuntity : (numOfPizza : number , quentity?:number) => number;

// getTotalQuntity = (x,y) => {
//     if(y){
//         return x * y
//     }
//     return x 
// }

// console.log(getTotalQuntity(25,2));

//optinal paramitar in new way

// let getTotalQuntity : (priceOfPizza: number , quentity?:number) => number;

// getTotalQuntity = (x , y = 1) => { 
//     return x * y
// }

// console.log(getTotalQuntity(25));

// example 3 

// let totalSum : (sum1:number, sum2?:number, sum3?:number) => number;

// totalSum = (a , b = 0 , c = 0) => {
//     return a + b + c 
// }

// console.log(totalSum(25))

//lesson 24

// const pizza : {name : string , price : number , getPizza() : string} = {
//     name : "megirata",
//     price: 240,
//     getPizza() {
//         return pizza.name
//     },
// }

// console.log(pizza.getPizza());

// console.log(pizza)

//lesson 25

// const pizza : number[] = [1,2,3];

// console.log(pizza);

// const pizza2 : string[] = ['vegPizza', 'nonvegPizza',]
// console.log(pizza2);


//genric type require one type of arguments
// let drinks: Array<string>;

// drinks = ['cock', 'pepsi' ]

// console.log(drinks);


//lesson 26
//tupal type more strice array
//by this we can add other data types in array

// let drinks : [string, number , boolean];

// drinks = ['sandip', 23 , true]


// console.log(drinks);


//lesson 27 type aliase  for type checking

// let pizzaSize : 'small' | 'large' | 'medium'

// type size = 'large' | 'medium' | 'small';

// let pizzaSize : size = 'small';

// const getPizzaSize = (size : size): void => {
//     pizzaSize = size
// }

// console.log(pizzaSize);

// getPizzaSize('medium')


// console.log(pizzaSize);


// example 2

// type size = 'large' | 'medium' | 'small';
// type Callback = (size : size) =>  void ;

// let pizzaSize : size = 'small';

// const getPizzaSize : Callback= (x) => {
//     pizzaSize = x
// }

// console.log(pizzaSize);

// getPizzaSize('medium')


// console.log(pizzaSize);


//example 3
// type colors = 'red' | 'green' | 'blue'


// type Callback = (colors : colors) => string

// const getShirtColor: Callback = (x) => {
//     return x
// }

// console.log(getShirtColor('red'))

//lesson 28 

// type pizza = {name: string, price : 150}

// const pizza : pizza = {name : "migirata" , price : 150}

// const serlised = JSON.stringify(pizza)

// function getNameFromJson (obj : string) {
//     return (JSON.parse(obj) as pizza).price
// }

// console.log(getNameFromJson(serlised))
// console.log(serlised);
// console.log(pizza);

//lesson 29 enum basicly is the data type
//by default we are gating numeric value from enum


// enum Sizes {
//     'small',
//     'medium',
//     'large',
// }

// enum Sizes {
//     "ractingle" = 3
// }

// const pizzaSize  = 3

// console.log(Sizes.ractingle)
// console.log(Sizes[pizzaSize])

//lesson 30
//we can write without const or not we can write in object as well

// const enum Sizes {
//    small = 'small',
//    medium = 'medium',
//    large = 'large'
// }

// let selected: Sizes = Sizes.large

// const getSelectedSizes = (size : Sizes)  => {
//     selected = size 
// }

// getSelectedSizes(Sizes.medium)

// console.log(selected)


//interfaces








