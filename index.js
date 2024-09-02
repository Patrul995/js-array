////////// Zadanie 1 //////////

// const market = [
//     { name: "Cucumber", qty: 25, sold: true },
//     { name: "Orange", qty: 0, sold: false },
//     { name: "Lemon", qty: 15, sold: true }
// ]
// const cart = [];

// function one() {
//     const ne = market.sort(function (a, b) {
//         return a.sold - b.sold;
//     })

// }
// one();

// function two(name2) {
//     let marketVal = market.find(key => key.name == name2);

//     if (marketVal.qty != 0) {

//         let cartVal = cart.find(key => key.name == name2);
//         if (cartVal == undefined) {
//             cart.push({ name: name2, qty: 1, sold: true });

//         }
//         else {
//             cartVal.qty += 1;
//         }
//         marketVal.qty -= 1;
// }
//     const Cuc = document.getElementById("Cuc");
//     const Oran = document.getElementById("Oran");
//     const Lem = document.getElementById("Lem");

//     console.log (market);
//     console.log (cart);
// }






////////// Zadanie 2 //////////

// const market = [
//     { name: "Cucumber", qty: 25, price: 1 },
//     { name: "Orange", qty: 0, price: 2 },
//     { name: "Lemon", qty: 15, price: 2 }
// ]

// const cek1 = market.find((user) => user.name === 'Cucumber').name;
// const cek2 = market.find((user) => user.name === 'Orange').name;
// const cek3 = market.find((user) => user.name === 'Lemon').name;
// console.log(cek1,cek2, cek3);


// const cucumberQty = market.find(item => item.name === "Cucumber").qty;
// const orangeQty = market.find(item => item.name === "Orange").qty;
// const lemonQty = market.find(item => item.name === "Lemon").qty;


// const cucumberPrice = market.find(item => item.name === "Cucumber").price;
// const orangePrice = market.find(item => item.name === "Orange").price;
// const lemonPrice = market.find(item => item.name === "Lemon").price;




// function plus () {
//     let cucumberPriceAll = cucumberQty * cucumberPrice;
//     let orangePriceAll = orangeQty * orangePrice;
//     let lemonPriceAll = lemonQty * lemonPrice;

//     return cucumberPriceAll + orangePriceAll + lemonPriceAll;
// }

// console.log(plus())


// function mostExpensivePurchase() {
//     let maxCost = 0;
//     let mostExpensiveItem = null;

//     market.forEach(item => {
//         const totalCost = item.qty * item.price;
//         if (totalCost > maxCost) {
//             maxCost = totalCost;
//             mostExpensiveItem = item;
//         }
//     });

//     return mostExpensiveItem;
// }

// const mostExpensive = mostExpensivePurchase();
// console.log(`Самая дорогая покупка: ${mostExpensive.name} на сумму ${mostExpensive.qty * mostExpensive.price}`);




////////// Zadanie 3 //////////

// const styles = [
//     { name: "color", value: "blue" },
//     { name: "font-size", value: "20px" },
//     { name: "text-align", value: "center" },
//     { name: "text-decoration", value: "underline" }
// ];

// function applyStylesAndPrint(styles, text) {

//     const styleString = styles.map(style => `${style.name}: ${style.value}`).join('; ');
//     const htmlString = `<p style="${styleString}">${text}</p>`;

//     document.write(htmlString);
// }

// applyStylesAndPrint(styles, "Hello, styled world!");




////////// Zadanie 4 //////////

// const school = [
//     { nameOfRoom: "Fizika", chairQty: 20, name: "IT" },
//     { nameOfRoom: "Ximiya", chairQty: 10, name: "Medical" },
//     { nameOfRoom: "Biologiya", chairQty: 15, name: "Medical" }
// ]

// function CheckList(TradeList) {
//     console.log("**Список**");
//     TradeList.forEach(item => {
//         console.log(`Комната: ${item.nameOfRoom}, Количество мест : ${item.chairQty}, Имя аудитории : ${item.name}`)
//     })
// }

// CheckList(school);

// function showRoomsByFaculty(facultyName) {
//     console.log(`**Список аудиторий для факультета: ${facultyName}**`);

//     const filteredRooms = school.filter(room => room.name === facultyName);

//     filteredRooms.forEach(room => {
//         console.log(`Комната: ${room.nameOfRoom}, Количество мест: ${room.chairQty}`);
//     });
// }

// showRoomsByFaculty("Medical"); 
// showRoomsByFaculty("IT");       

// function showSuitableRooms(group) {
//     console.log(`**Список подходящих аудиторий для группы: ${group.name}**`);
    
//     const suitableRooms = school.filter(room => 
//         room.name === group.faculty && 
//         room.chairQty >= group.studentCount
//     );

//     suitableRooms.forEach(room => {
//         console.log(`Комната: ${room.nameOfRoom}, Количество мест: ${room.chairQty}`);
//     });
// }

// const group1 = { name: "Group A", studentCount: 12, faculty: "Medical" };
// const group2 = { name: "Group B", studentCount: 25, faculty: "IT" };
// const group3 = { name: "Group C", studentCount: 5, faculty: "Engineering" };

// showSuitableRooms(group1);  
// showSuitableRooms(group2);  
// showSuitableRooms(group3);  


// function sortRoomsByChairQty(school) {
//     return school.sort((a, b) => a.chairQty - b.chairQty);
// }

// const sortedRooms = sortRoomsByChairQty(school);
// console.log("Аудитории, отсортированные по количеству мест:");
// sortedRooms.forEach(room => {
//     console.log(`Комната: ${room.nameOfRoom}, Количество мест: ${room.chairQty}, Факультет: ${room.name}`);
// });