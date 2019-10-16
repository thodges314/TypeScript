const carMakers: string[] = ['ford', 'toyota', 'chevrolet']; // annotation is optional here if initialised
const dates = [new Date(), new Date()];

const cardByMake = [['f150'], ['carolla'], ['camero']];

// Help with inference when extractivng values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatable values
// carMakers.push(100); <-- not permitter

// Help with 'map'
carMakers.map((car: string): string => car); // get autocomplete on return value

// Flexible types
const importatDates: (Date | string)[] = [new Date(), '2030-10-10']; // infers with pipe operator for multiple types
importatDates.push('2030-10-10');
importatDates.push(new Date());
// importatDates.push(33);  <-- errors
