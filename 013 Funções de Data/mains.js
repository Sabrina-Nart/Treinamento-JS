 const date = new Date(); //Retorna a data e hora atuais 
// const date = new Date(2023, 11, 14); //Especifico um data
// const date = new Date(2023, 11, 14, 9, 37, 18); //Especificar uma data e hora
// const date = new Date('2022-09-09'); //Especificar uma data usando uma string
// const date = new Date('2022-09-09T20:47:31'); //Especificar uma data e hora usando uma string

console.log(date);
console.log(date.toLocaleString()); //Retorna a data e hora formatadas
console.log(date.toLocaleTimeString()); //Retorna a hora formatada
console.log(date.getDate()); //Retorna o dia
console.log(date.getMonth()); //Retorna o mês (onde o mês 0 é igual a janeiro)
console.log(date.getFullYear()); //Retorna o ano
console.log(date.getDay()); //Retorna o dia da semana (onde 0 é domingo)
console.log(date.getHours()); //Retorna a hora
console.log(date.getMinutes()); //Retorna os minutos
console.log(date.getSeconds()); //Retorna os segundos
console.log(date.getMilliseconds()); //Retorna os milisegundos