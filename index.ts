import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
    let title = await chalkAnimation.rainbow(`|||     Calculator    |||`);
     await sleep();
     title.stop()
    console.log(chalk.redBright(`     _____________________
    |  _________________  |
    | |           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `))
}

await welcome()


async function questions(){



    const answers:{
        operator:string,
        number1:number,
        number2:number,    
    } = await inquirer
    .prompt([
      {
        "type": "list",
        "name": "operator",
        "message": chalk.blueBright(`what operator do you want to perform? \n`),
        "choices": ["+", "-", "*", "/", "%"]
      },
      {
        "type": "number",
        "name": "number1",
        "message": "Enter Number 1: "
      },
      {
        "type": "number",
        "name": "number2",
        "message": "Enter Number 2: "
      }
    ]);

    const {operator,number1,number2} = answers;
    
      if(operator && number1 && number2){
        if(operator==="+"){
            console.log(chalk.green(`${number1} ${operator} ${number2} = ${number1 + number2}`))
        }
        else if(operator==="-"){
            console.log(chalk.green(`${number1} ${operator} ${number2} = ${number1 - number2}`))
        }
        else if(operator==="*"){
            console.log(chalk.green(`${number1} ${operator} ${number2} = ${number1 * number2}`))
        }
        else if(operator==="/"){
            console.log(chalk.green(`${number1} ${operator} ${number2} = ${number1 / number2}`))
        }
        else if(operator==="%"){
            console.log(chalk.green(`${number1} ${operator} ${number2} = ${number1 % number2}`))
        }
      }
      else{
       console.log( chalk.red('Invalid Input'))
      }
}


async function again(){
    do{
        await questions();
        var restart : {
            isRepeat:string
        } = await inquirer
        .prompt({
            "type": "input",
            "name": "isRepeat",
            "message": chalk.gray(`Do you want to calculate more?  [Y/N] : `)
        })
    }

 

    while( restart.isRepeat ==="Y" || restart.isRepeat  ==="y" || restart.isRepeat ==="yes" || restart.isRepeat  ==="YES" );
    
}
again();
