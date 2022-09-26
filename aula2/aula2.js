// ----1--------
// function createPhrases() {
//     console.log("TESTE1")
//     console.log("TESTE2")
//     console.log("TESTE3")    
// }

// createPhrases()
// createPhrases()
// createPhrases()
// createPhrases()
// createPhrases()
// createPhrases()

//-------------------------------------------------------------


//--------------2------------------------------

//function expressio / anonymous

//parametros (a, b)
// const sum = function(a , b) {
//   console.log(a + b)
// }

// sum(2, 2) // argumentos 


//---------------------------------------------------------------------

//-------------3--------------------

//parametros (a, b)
// let total = 0

// const sum = function(a , b) {
//   let total = a + b
//   return total
// }

// let a = 10;
// let b = 22;

// console.log(`o valor de A é ${a}`);
// console.log(`o valor de B é ${b}`);
// console.log(`a soma de A e B é ${sum(a, b)}`)

//---------------------------------------------------------------------------


//--------------------4------------------------------------------------------

// function fazerSuco(fruta1, fruta2) {
//   return fruta1 + fruta2
// }

// const copo =  fazerSuco("banana", "maçã")

// console.log(copo)

//---------------------------------------------------------------------------


//--------------------5------------------------------------------------------
//------------function scope-------------------------------------------------

// let subject = 'create video';

// function createThink(){
//   subject = 'study'
//   return subject
// }

// console.log(subject)
// console.log(createThink())
// console.log(subject)

//--------------------6------------------------------------------------------
//------------function hosting-------------------------------------------------

// sayMyName();

// function sayMyName() {
//   console.log("Lucas")
// }


//--------------------7------------------------------------------------------
//------------ arrow function -------------------------------------------------


// const sayMyName = (name) => {
//   console.log(name)
// }

// sayMyName("Lucas")

//--------------------8------------------------------------------------------
//------------callback function ---------------------------------------------

// function sayMyName(name){
//   console.log("antes de executar")

//   name()

//   console.log('depois de executar')
// }

// sayMyName( () => {
//   console.log('executando')
// })

//--------------------9------------------------------------------------------
//------------function constructor-------------------------------------------------

/*
  function() constructor

  * expressão new;
  * criar um novo objeto;
  * this keyword 

*/

function Person(name) {
  this.name= name
  this.walk = function() {
    return "andando"
  }
}

const lucas = new Person("Lucas")
const mayk = new Person("Mayk")

console.log(mayk)
console.log(lucas)
