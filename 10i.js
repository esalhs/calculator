let calculation =localStorage.getItem('calculation') || '';

      calcResult();

      function updateCalculation (value) {
        calculation += value;
        calcResult();
        localStorage.setItem('calculation', calculation);
      }

      function calcResult() {
        document.querySelector('.calc-result').innerHTML = calculation;
      }