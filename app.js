// Вешаем событие, выполняющееся после полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
  // Превращаем классы из HTML в переменные
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
  let resultBlock = document.querySelector('.result')
  
  // Прописываем значения числовых кнопок
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
  resultBlock.innerHTML = '0'

  // Прописываем значения функциональных кнопок
  keyPlus.values = '+'
  keyMinus.values = '-'
  keyDivide.values = '/'
  keyStar.values = '*'
  keyCircle.values  = '.'

  // Создаем функцию, изменяющую размер шрифта в зависимости от их количества
  function toSymb() {
    if (resultBlock.innerHTML.length <= 11) {
      resultBlock.style.fontSize = '50px'
    } else if (resultBlock.innerHTML.length <= 13)  {
      resultBlock.style.fontSize = '42px'
    } else if (resultBlock.innerHTML.length <= 18) {
      resultBlock.style.fontSize = '30px'
    } else {
      resultBlock.style.fontSize = '25px'
    }
  }

  // Создаем функцию для кнопки "Очистить", при нажатии на кнопку, на экране выводится 0
  function toCut() {
    resultBlock.innerHTML = '0'
    toSymb()
  }

  // Создаем функцию, убирающую 0 при вводе значений
  function replaceNull() {
    if (resultBlock.textContent === '0') {
      resultBlock.textContent = ''
    }
  }
  
  // Создаем функцию, которая выводит значения числовых кнопок на экран
  function toKey(key) {
    replaceNull()
    keyDisplay = key.values
    resultBlock.innerHTML += keyDisplay
    toSymb()
  }

  // Создаем функцию, которая считает процент
  function toPercentage() {
    block = resultBlock.innerHTML
    arr = block.split(/\+|-|\*/)
    percentage = arr[0] * arr[1] / 100
    resultBlock.innerHTML = percentage
    toSymb()
  }

  // Создаем функцию, которая при нажатии на "+" забирает первое и второе число и складывает их
  // возвращая переменную с результатом
  function toEquals() {
    result = resultBlock.innerHTML
    resultBlock.innerHTML = eval(result)
    toSymb()
  }
  
  // Привязываем к кнопкам событие, реагирующее на нажатие, для вывода кнопок на экран
  keyCut.addEventListener('click', toCut)
  key1.addEventListener('click', () => toKey(key1))
  key2.addEventListener('click', () => toKey(key2))
  key3.addEventListener('click', () => toKey(key3))
  key4.addEventListener('click', () => toKey(key4))
  key5.addEventListener('click', () => toKey(key5))
  key6.addEventListener('click', () => toKey(key6))
  key7.addEventListener('click', () => toKey(key7))
  key8.addEventListener('click', () => toKey(key8))
  key9.addEventListener('click', () => toKey(key9))
  key0.addEventListener('click', () => toKey(key0))
  keyPercentage.addEventListener('click', toPercentage)
  keyPlus.addEventListener('click', () => toKey(keyPlus)) 
  keyMinus.addEventListener('click', () => toKey(keyMinus))
  keyDivide.addEventListener('click', () => toKey(keyDivide))
  keyStar.addEventListener('click', () => toKey(keyStar))
  keyCircle.addEventListener('click', () => toKey(keyCircle))
  keyEquals.addEventListener('click', toEquals) 
})