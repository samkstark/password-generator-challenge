const Func = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
  };

  }
 
  
        var upperCase = confirm("Would you like your password to include uppercase letters?")
        if (upperCase) {
         
        }
      
        function yesNumbers() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
          }
          function yesSymbols() {
            const symbols = '!@$%^&*(){}[],.<>/#~';
            return symbols[Math.floor(Math.random() * symbols.length)]; 
           }
           function yesLowers() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          }
          function yesUppers() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          }
      
       