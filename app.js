document.addEventListener('DOMContentLoaded', () => {
  let key1 = document.querySelector('.key1')
  let key2 = document.querySelector('.key2')
  let key3 = document.querySelector('.key3')
  let key4 = document.querySelector('.key4')
  let key5 = document.querySelector('.key5')
  let key6 = document.querySelector('.key6')
  let key7 = document.querySelector('.key7')
  let key8 = document.querySelector('.key8')
  let key9 = document.querySelector('.key9')
  let key0 = document.querySelector('.key0')
  let keyCut = document.querySelector('.keyCut')
  let keyPercentage = document.querySelector('.keyPercentage')
  let keyDivide = document.querySelector('.keyDivide')
  let keyStar = document.querySelector('.keyStar')
  let keyPlus = document.querySelector('.keyPlus')
  let keyMinus = document.querySelector('.keyMinus')
  let keyEquals = document.querySelector('.keyEquals')
  let keyCircle = document.querySelector('.keyCircle')
  let result = document.querySelector('.result')

  key1.values = '1'
  key2.values = '2'
  key3.values = '3'
  key4.values = '4'
  key5.values = '5'
  key6.values = '6'
  key7.values = '7'
  key8.values = '8'
  key9.values = '9'
  key0.values = '0'
  
   
  result.textContent = '0'
  
  function toCut() {
    result.textContent = '0'
  }

  function result1(key) {
    keyDisplay = key.values
    key.addEventListener('click', result1(keyDisplay) )
  }

  
  keyCut.addEventListener('click', toCut)
  //result1(key1)
  console.log(key7.values)
})