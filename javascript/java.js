'use srtict';



var money;
var time;

money=prompt('Введитте ваш бюджет');
time=prompt('Дата вашего рождения ');
var appData={
    budjet:money,
    timeData:time,
    expenses:{},
    income : [],
    savings:false,
};

let a1=prompt( "Введите обязательную статью расходов в этом месяце"),
    a2=prompt(  "Во сколько обойдется?"),
    a3=prompt(  "Введите обязательную статью расходов в этом месяце"),
    a4=prompt(  "Во сколько обойдется?");


appData.expenses[a1]=a2;
appData.expenses[a3]=a4;
alert(appData.budjet/30);