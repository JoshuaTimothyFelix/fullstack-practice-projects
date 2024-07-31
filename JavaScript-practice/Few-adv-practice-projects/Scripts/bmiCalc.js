document.getElementById("btn").addEventListener("click", () => {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const bmi = (weight / (height * height)).toFixed(2);
  
    document.getElementById("bmi-result").value = bmi;
    
    let condition;
    if (bmi < 18.5) {
      condition = "Underweight";
    } else if (bmi < 25) {
      condition = "Normal weight";
    } else if (bmi < 30) {
      condition = "Overweight";
    } else {
      condition = "Obesity";
    }
  
    document.getElementById("weight-condition").innerText = condition;
  });
  