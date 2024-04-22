const CustomStringTokenization = (inputstring,delimiter) => {
  let tokens = [];
  let currToken = '';
  
  for(let i=0;i<inputstring.length;i++){
    const currChar = inputstring[i];
    
    if(currChar === delimiter){
      tokens.push(currToken);
      currToken= '';
    } else {
      currToken += currChar;
    }
  }
  
  if(currToken !== ''){
    tokens.push(currToken);
  }
  
  return tokens;
}

const input = "This is a custom tokenizer";
const delimiter = " ";

const result = CustomStringTokenization(input,delimiter);
console.log(result);
