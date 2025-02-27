import { quotes } from "./quotes.js";

//Generate Quote Function
function generateQuote(){
  //Declare all the variable
  const quote = document.getElementById('quote');
  const quoteType = document.getElementById('quote-type')
  const randomNumber = Math.floor(Math.random() * quotes.length);

  //Call the setTimeout function to execute after 1sec
  setTimeout(() => {
    //Set the quote innerText to quotes array in the index of randomNumber
    quote.innerText = quotes[randomNumber].quote;
    quoteType.innerText = quotes[randomNumber].type;
  }, 1000);
  changeBtnContent();
}

//Change Btn Content Function
function changeBtnContent() {
  const generateQuoteBtn = document.getElementById('generate-quote-btn');

  //Set the generateQuoteBtn attribute to disabled
  generateQuoteBtn.setAttribute('disabled', 'true');
  //Change the cursor to no drop
  generateQuoteBtn.style.cursor = 'no-drop'
  //Change the generateQuoteBtn textContent to generating
  generateQuoteBtn.textContent = 'Generating';

  //Call the setTimeout function to execute after 1sec
  setTimeout(() =>{
    //Change the generateQuoteBtn textContent to Generate new quote
    generateQuoteBtn.textContent = 'Generate new quote'
    //Remove the disabled attrubute
    generateQuoteBtn.removeAttribute('disabled');
    //Set the cursor back to pointer
    generateQuoteBtn.style.cursor = 'pointer'
  },1000)
}

document.getElementById("generate-quote-btn").addEventListener('click', generateQuote);