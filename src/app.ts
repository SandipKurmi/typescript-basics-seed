// const pizzas = [{name: 'Pepperoni',price: 250, toppings: ['Pepperoni']}]

// const mappedPizza = pizzas.map((pizza) => pizza.name.toUpperCase())

// console.log(mappedPizza)

// const pizza = {
//     name: 'Blazing Inferno',
//     price: 280/100 ,
//     getPrice: function() {
//         return this.price
//     },
//     getName: function () {
//         return this.name
//     }
// }

// console.log(pizza.getName())
// console.log(pizza.getPrice());

//lesson 7
// const multiply = (a:any , b:any) => a * b;
// console.log(multiply(2, 24))

// const reminder = (x:number, y:number): number => x / y;
// console.log(reminder(10,5));

// const fullName = (fristName: string , lastName: string): string => fristName +" "+lastName;
// console.log(fullName('kurmi', 'sandip'))


 
//lesson 8
// const pizza = {
//     name: 'megirata pizza',
//     price: 150,
//     getprice () {
//         return this.price + 50
//     },
//     getname () {
//         return this.name
//     }
// }

// console.log(pizza.getname())
// console.log(pizza.getprice())


// const toppings = ['Pepperoni']

// const order = {
//     toppings,
//     pizza,
// }

// console.log(order);
// const order = (pizza: any, toppings:any) => {
//     return {pizza, toppings}
// }

// console.log(order('margrita', 'paperano'))


// const newPizza = (pizzaName:string, pizzaSize:string, pizzaToppings:string) => {
//     return {pizzaName, pizzaSize, pizzaToppings}
// }

// console.log(newPizza('margrita', 'small', 'chelliFlex'))

//lession 9
//rest parametar

// const totalNumber = (message:string, ...arr:number[]) => {
//     console.log(message)
//     return arr.reduce((prev:number, next:number) => prev + next, 0)
// }

// const sum = totalNumber('good morning', 1,2,3,4,5,6,7,8,9,10)

// console.log(sum)

//lession 10
//sprade oprater

// const pizza = ['megirata', 'papronic']
// const toppings = ['onione']

// const order = [...pizza, ...toppings]

// console.log(order )


// const objPizza = {
//     name: ['megirata', 'Pepperoni'],
//     price: 150
// }

// const objToppings = {
//     Pizzaname: 'onione'
// }

// const newObjPizza = {...objPizza, ...objToppings}

// console.log(newObjPizza )

//lession 11
//dstructer obj and array

// const pizza = {
//     name: 'Pepperoni',
//     price: 256 / 2,
//     toppings: ['pepperoni']
// }

// const order = (pizza:any) => {
//     const {name:pizzaName, toppings: pizzaToppings, price: pizzaPrice} = pizza
//     return {pizzaName, pizzaToppings, pizzaPrice}

// }

// const {pizzaName,pizzaToppings , pizzaPrice} = order(pizza)

// console.log(pizzaName)
// console.log(pizzaToppings);
// console.log(pizzaPrice);

// const user = {
//     name:'sandip',
//     age:22,
//     subject:['maths', 'python', 'scince']
// }

// const userDetail = (user:any) => {
//     const{name:userName, age:userAge, subject:userSubject} = user
//     return {userName, userAge, userSubject}
// }

// const{userName, userAge, userSubject}= userDetail(user)
// console.log(userName)
// console.log(userAge)
// console.log(userSubject)





// const fruites : string[]= ['Apple', 'Mango', 'Guava', 'Three']

// const [fru1, fru2, fru3, num1] = fruites

// console.log(fru1, fru2, fru3, num1)

// const allFruites = ([fru1, fru2, fru3, fru4] : any):string[] => {
//     return [fru1 , fru2 , fru3, fru4]
// }
// const data = allFruites(fruites)
// console.log(...data);

// const userName:string[] = ['sandip','sachin','akash']
// const [user1, user2, user3] = userName
// console.log(user1, user2, user3)

// const allUser = ([user1, user2, user3]:any):string[] => {
//     return [user1, user2, user3]
// }

// const data = allUser(userName)
// console.log(data)


//Numbers

// const pizza: number = 12
// const pizzaToppings : number = 6

// const totalPrice = (pizza: number, pizzaToppings: number):number => {
//     const getExtra: number = 1.7
//     return (pizza + getExtra) * pizzaToppings
// }

// console.log(totalPrice(pizza,pizzaToppings).toFixed(2))

//example2
// const maths:number = 55
// const english: number= 69

// const totalAvrage = (math:number, eng:number):number => {
//     const extraNumber:number = 5

//     return (math + eng + extraNumber) / 3
// }

// const total = totalAvrage(maths,english)
// console.log(total)


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
//     console.log(`your ${order} order is vailed for coupon`)
// }else {
//     console.log(`your ${order} is less then 3 so your copon is not valed`)
// }


//lesson 15 any we can asign any datatype to any 

// let copon :any ;
// console.log(copon);
// copon = 15
// console.log(copon);

// copon = 'copone15'
// console.log(copon);

// copon = true
// console.log(copon);

//lesson 16 impliset , explisit

// let implisetType = 'copon25' ;
// let explisitType: string = 'copon25'
// console.log(implisetType)
// console.log(explisitType)

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

// example 2 by number
// let userNumber:number = 55.26
// console.log(userNumber)

// const roundNumber = ():void => {
//     userNumber = Math.round(userNumber)
// }

// roundNumber()
// console.log(userNumber)


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

// let copon:any = 'copon25'

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

// funPizzaSize('small')

// console.log(`the pizza size is ${pizzaSize}`)

//number

// let collageScore : number = 3

// console.log(`The collage score is ${collageScore}`)


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

// string 

// let userName : (fristName: string, lastName: string, age: number) => string;

// userName = (fristName, lastName, age) => `frist Name is ${fristName} and last name is ${lastName} and your age is ${age} `

// console.log(userName('sandip', 'kurmi', 22))

//lesson 22
//optinal Paramitar 

// let getTotalQuntity : (numOfPizza : number , quentity?:number) => number;

// getTotalQuntity = (x,y) => {
//     if(y){
//         return x * y
//     }
//     return x 
// }

// console.log(getTotalQuntity(25,26));

//optinal paramitar in new way

// let getTotalQuntity : (priceOfPizza: number , quentity?:number) => number;

// getTotalQuntity = (x , y = 1) => { 
//     return x * y
// }

// console.log(getTotalQuntity(25,2));

// const getTotalAvrage = (x:number, y:number = 1):number => {
//     return x * y
// }

// console.log(getTotalAvrage(25,2))

// example 3 

// let totalSum : (sum1:number, sum2?:number, sum3?:number) => number;

// totalSum = (a , b = 0 , c = 0) => {
//     return a + b + c 
// }

// console.log(totalSum(25,25,25))

// let abilablePizza : (pizza?:string) => string

// abilablePizza = (pizza = 'migirata') => {
//     return pizza
// }

// console.log(abilablePizza('oninePizza'));


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

// let acpectdPrice : Array<number>

// acpectdPrice = [256,599]

// console.log(acpectdPrice);


//lesson 26
//tupal type more strice array
//by this we can add other data types in array

// let drinks : [string, number , boolean];

// drinks = ['sandip', 23 , true]

// console.log(drinks);


//lesson 27 type aliase  for type checking

// let pizzaSize : 'small' | 'large' | 'medium'

// type size = 'large' | 'medium' | 'small' | 'thin';

// let pizzaSize : size = 'thin';

// const getPizzaSize = (size : size): void => {
//     pizzaSize = size
// }

// console.log(pizzaSize);

// getPizzaSize(pizzaSize)


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

//example 4
// type salery = 25000 | 30000 | 40000

// type Callback = (salery : salery) => void

// let employeSalery: salery = 25000

// const getSaliry : Callback = (salery) => {
//      employeSalery = salery
// }

// getSaliry(40000)


// console.log(employeSalery);

//lesson 28 

// type pizza = {name: string, price : 150}

// const pizza : pizza = {name : "migirata" , price : 150}

// const serlised = JSON.stringify(pizza)

// function getNameFromJson (obj : string) {
//     const objPizza = JSON.parse(obj)
//     console.log(objPizza);
//     return (objPizza as pizza).price
// }

// console.log(getNameFromJson(serlised))
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

// enum  Sizes {
//     'circle' = 4
// }

// const pizzaSize  = 3

// console.log(Sizes.ractingle)
// console.log(Sizes[pizzaSize])

// console.log(Sizes[0]);
// console.log(Sizes[4]);


//lesson 30 to 35
//we can write without const or not we can write in object as well

// const enum Sizes {
//    small = 'small',
//    medium = 'medium',
//    large = 'large'
// }
// console.log(Sizes.medium);



// let selected: Sizes = Sizes.large
// console.log(selected);

// const getSelectedSizes = (size : Sizes)  => {
//     selected = size 
// }

// getSelectedSizes(Sizes.medium)

// console.log(selected)


//interfaces
//interFace is contract bitween datatype and varibles
//by extends we can inharrite propity of interfaces
// by [?] we can define optinal type in interface
// interface Sizes {
//     size : string[],
// }

// interface PizzaMethods {
//     getPrice() : number[],
//     getSize() : string[]
// }

// interface Pizza extends Sizes, PizzaMethods{
//     name : string,
//     quentity: number,
//     noOfToppings?: number,
//     price: number[],
//     [kye: number] : string
// }

// let pizza : Pizza;

// const getPizza = (name:string,quentity:number,noOfToppings:number , price: number[], size: string[], ): Pizza => {
//     return {
//         name,
//         quentity,
//         price,
//         size,
//         noOfToppings,
//         getPrice() {
//             return this.price
//         },
//         getSize () {
//             return this.size
//         }
//     }
// }


// pizza = getPizza('migirata',256, 26, [200,300,400], ['large', 'small', 'medium'],)


// console.log(pizza);
// console.log(pizza.getPrice().reduce((prev, next) => prev + next , 0));
// console.log(pizza.getPrice().filter((price) => price !== 300));
// console.log(pizza.getPrice().map((price) => price + 20));
// console.log(pizza.getPrice().every((price) => price > 500));
// console.log(pizza.getPrice().some((price) => price === 400));
// console.log(pizza.getSize().filter((size) => size.startsWith('s')))

//lessone 36, 37
//classes and publice and privet
// class Pizza {
//     name: string;
//     price: number = 0;
//     toppings: string[] = [];

//     constructor ( name: string) {
//         this.name = name;
//     }

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }

//     getPrice(price: number){
//         this.price  = price
//     }
// }

// let pizza = new Pizza('pepperoni')


// pizza.addTopping('pepperoni')
// pizza.getPrice(230)

// console.log(pizza);

//38 read only property 
//note : we can only assign read only property only top of the declaration

// class Pizza {
//     price: number = 500;
//     toppings: string[] = [];

//     constructor (readonly name: string) {}

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }
// }

// let pizza = new Pizza('Pepperoni')


// pizza.addTopping('pepperoni')
// console.log(pizza.name);


//39 gaters and seters
//seters and getrs allways public

// class Sizes {
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes() {
//         return this.sizes
//     }
// }

// const size = new Sizes(['small' , 'medium'])

// //invoke getter
// console.log(size.availableSizes)

// //invoke setter
// size.availableSizes = ['medium', 'large']

// console.log(size.availableSizes)


//example 2

// class Names {
//     constructor(public names: string[]){}

//     set availableName(names: string[]){
//         this.names = names;
//     }

//     get availableName() {
//         return this.names
//     }
// }

// const names = new Names(['sandip', 'shiva'])

// console.log(names.availableName)

// names.availableName = ['dhruv', 'ashirvad']

// console.log(names.availableName)

// names.availableName = ['rakesh', 'varma']

// console.log(names.availableName)

//40  

//by extend keyword we inharit classes
//leke this we create inheritence and 

// class Sizes {
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes() {
//         return this.sizes
//     }
// }



// class Pizza extends Sizes {
//     price: number = 500;
//     toppings: string[] = [];

//     constructor (readonly name: string, public sizes: string[]) {
//         super(sizes)
//     }

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }
// }

// let pizza = new Pizza('Pepperoni', ['small', 'medium'])

// console.log(pizza.availableSizes)
// pizza.addTopping('pepperoni')
// console.log(pizza)

// console.log(pizza.name);


//41 abstract class we can not inteneted we can not invoke it's own we can only extend in down the class

//we can also export abstract classes
//by abstract key word we can make classes abstract

//  abstract class Sizes {
//     constructor(public sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes() {
//         return this.sizes
//     }
// }


// class Pizza extends Sizes {
//     price: number = 500;
//     toppings: string[] = [];

//     constructor (readonly name: string, public sizes: string[]) {
//         super(sizes)
//     }

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }
// }

// let pizza = new Pizza('Pepperoni', ['small', 'medium'])

// console.log(pizza.availableSizes)
// pizza.addTopping('pepperoni')
// console.log(pizza)

// console.log(pizza.name);


// 42  protected maintain private behaviar and access in extended class also
// abstract class Sizes {
//     constructor(protected sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes() {
//         return this.sizes
//     }
// }


// class Pizza extends Sizes {
//     price: number = 500;
//     toppings: string[] = [];


//     constructor (readonly name: string, sizes: string[]) {
//         super(sizes)
//     }

//     public updateSizes(sizes: string[]){
//         this.sizes = sizes
//     }

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }
// }

// let pizza = new Pizza('Pepperoni', ['small', 'medium'])

// pizza.addTopping('pepperoni')
// console.log(pizza.availableSizes)
// pizza.updateSizes(['mega large'])
// console.log(pizza.availableSizes)

// console.log(pizza.name);


//43 implement keyword for adding interface
// interface SizesInterface {
//     // sizes: string[]; if we use public we can use nicele
//     availableSizes: string[]
// }


// abstract class Sizes implements SizesInterface {
//     constructor(protected sizes: string[]){}

//     set availableSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     get availableSizes() {
//         return this.sizes
//     }
// }

// interface PizzaInterface extends SizesInterface {
//     readonly name: string;
//     toppings: string[];
//     updateSizes(sizes: string[]): void;
//     addTopping(topping: string): void
// }


// class Pizza extends Sizes implements PizzaInterface {
//     price: number = 500;
//     toppings: string[] = [];


//     constructor (readonly name: string, sizes: string[]) {
//         super(sizes)
//     }

//     public updateSizes(sizes: string[]){
//         this.sizes = sizes;
//     }

//     addTopping(topping: string) {
//         this.toppings.push(topping)
//     }
// }

// let pizza = new Pizza('Pepperoni', ['small','medium'])

// pizza.addTopping('pepperoni')
// console.log(pizza.availableSizes)
// pizza.updateSizes(['mega large'])
// console.log(pizza.availableSizes)

// console.log(pizza.name);



// 44 static

//we can create some static classes without creating any instance
// class Coupon {
//     static allowed = ['pepperoni', 'Blazing Inferno'];
//     static create(percentage: number){
//         return `PIZZA_RESTAURANT_${percentage}`
//     }
// }

// console.log(Coupon.create(25));

// console.log(Date.now())

// const data = new Date()
// console.log(data)


// //example 2 
// class ChackNumber {
//  static allowed = ['EvenOdd', 'PrimeNumber', 'AreyOfCircle', 'kilomiterToMile']
//     static evenOrOdd(num: number) {
//         if(num % 2 === 0){
//             return `this ${num} is even`
//         }else{
//             return `this ${num} is odd`
//         }
//     }

//     static areaOfCircle(radius: number){
//         return 3.14*radius*radius
//     }

//     static findPrimeNumber(num:number){
//         let isPrime = true
//         if(num === 1){
//             return `${num} is not prime and composit number`
//         }else if(num > 1){
//             for(let i = 2 ; i < num ; i++){
//                 if(num % i == 0 ){
//                     isPrime = false
//                     break;  
//                 }
//             }

//             if(isPrime){
//                 return `this ${num} is prime number`
//             }else{
//                 return `this ${num } is not prime number`
//             }
//         }else{
//             return `this number is not a prime number`
//         }

//     }

//     static kilomiterToMile (km:number){
//         // conversion factor
//         const factor = 0.621371
//         return km * factor
//     }

// }

// console.log(ChackNumber.allowed)
// console.log(ChackNumber.evenOrOdd(5))
// console.log(ChackNumber.evenOrOdd(2))
// console.log(ChackNumber.areaOfCircle(6))
// console.log(ChackNumber.findPrimeNumber(4))
// console.log(ChackNumber.kilomiterToMile(5))


//45 genric is create some form of dynimic type
//we can create reusable component and function

// class Pizza {
//     constructor(private name:string, private price:number){}
// }

// class List<T> {
//     private list: T[] = [];

//     addItem(item: T): void { 
//         this.list.push(item)
//     }

//     getList(): T[]{
//         return this.list
//     }
// }

// const list = new List<Pizza>()

// list.addItem(new Pizza('migrata', 25))
// console.log(list.getList())


// class Copon {
//     constructor(private name:string){}
// }

// const coponList = new List<Copon>()

// coponList.addItem(new Copon('SANDIP25'))

// console.log(coponList.getList())

//46 function type with genric type
function reverce(str:string):string
function reverce<T>(arr:T[]):T[]
function reverce <T>(strngOrArray: string | T[]): string | T[] {
    if(typeof strngOrArray === 'string'){
        return strngOrArray.split('').reverse().join('')
    }
    return strngOrArray.reverse()
}

console.log(reverce('sandip'))
console.log(['sandip','akash','vikash'])