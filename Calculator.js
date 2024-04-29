"use strict";

function display(value) {
  document.getElementById('display').value += value;
}

function clean() {
  document.getElementById('display').value = '';
}

function solve() {
  try{
    let dValue = document.getElementById('display').value;
    let result = eval(dValue);
    console.log(dValue);
    document.getElementById('display').value = result;
  } catch(err){
    console.log(err);
    document.getElementById('display').value = 'Invalid Calculation';
  }
}

