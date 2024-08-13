document.getElementById('bmiForm').addEventListener('submit', formValidation);

document.addEventListener('DOMContentLoaded', function() {
  const salutationSelect = document.getElementById('salutation');
  salutationSelect.addEventListener('change', function() {
      const selectedValue = salutationSelect.value;
      if (selectedValue === "Prof." || selectedValue === "Dr.") {
          const gender = prompt("Please enter your gender (M for male/F for female):").toLowerCase();
          if (gender === 'male' || gender === 'female' || gender === 'm' || gender === 'f') {
              salutationSelect.dataset.gender = gender;
          } else {
              alert("Invalid gender entered. Please select salutation again and enter 'male' or 'female'.");
              salutationSelect.value = '';
              delete salutationSelect.dataset.gender;
          }
      } else {
          delete salutationSelect.dataset.gender;
      }
  });
});

function calculateBMI() {
  const salutation = document.getElementById('salutation').value;
  const fullName = document.getElementById('fullName').value.trim();
  const initial = document.getElementById('initial').value.trim();
  const address = document.getElementById('address').value.trim();
  const age = document.getElementById('age').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const bmiField = document.getElementById('bmi');
  const descriptionField = document.getElementById('description');

/*   if (!salutation || !fullName || !initial || !address || !age) {
      alert("Please fill in all the required fields.");
      return;
  } */

  if (isNaN(height) || height < 100 || height > 300) {
      alert("Height should be a numeric value between 100 and 300 cm.");
      return;
  }

  if (isNaN(weight) || weight < 25 || weight > 200) {
      alert("Weight should be a numeric value between 25 and 200 kg.");
      return;
  }
  
  let description = "";
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  bmiField.value = bmi;

  const gender = salutation === "Prof." || salutation === "Dr." ? document.getElementById('salutation').dataset.gender : salutation === "Mr." ? 'male' : 'female';

  if (gender === 'male' || gender === 'm') {
      if (bmi < 20.7) {
          description = "Underweight";
      } else if (bmi < 26.4) {
          description = "Ideal weight";
      } else if (bmi < 27.8) {
          description = "Marginally overweight";
      } else if (bmi < 31.1) {
          description = "Overweight";
      } else if (bmi < 45.4) {
          description = "Very overweight or obese";
      } else {
          description = "Extremely obese";
      }
  } else {
      if (bmi < 19.1) {
          description = "Underweight";
      } else if (bmi < 25.8) {
          description = "Ideal weight";
      } else if (bmi < 27.3) {
          description = "Marginally overweight";
      } else if (bmi < 32.2) {
          description = "Overweight";
      } else if (bmi < 44.8) {
          description = "Very overweight or obese";
      } else {
          description = "Extremely obese";
      }
  }

  descriptionField.value = description;
}