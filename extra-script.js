const Func = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
  };

  var passwordLength = prompt("How many characters would you like your password to be?")}
  function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    function getUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
        var upperCase = confirm("Would you like your password to include uppercase letters?")
        if (upperCase) {
         
        }
      
        function getNumber() {
          return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
       function getSymbol() {
        const symbols = '!@$%^&*(){}[],.<>/#~';
        return symbols[Math.floor(Math.random() * symbols.length)]; 
       }
       