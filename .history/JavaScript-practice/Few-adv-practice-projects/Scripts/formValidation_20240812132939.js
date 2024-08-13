function formValidation(event){
    let form = document.getElementById('bmiForm');
    let inputs = form.querySelectorAll('input[required]');
    let firstInvalid = null;

    inputs.forEach(function(input){
        if(!input.value){
            input.classList.add('error');
            if(!firstInvalid){
                firstInvalid = input;
            } else{
                input.classList.remove('error');
            }
        }
    });

    if(firstInvalid){
        event.preventDefault();
        alert('Please fill out the '+ firstInvalid.name +' field');
        firstInvalid.focus();
    }

}