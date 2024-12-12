const form = document.getElementById('form');
const email = document.querySelector('#email');
const Message = document.querySelector('#Message');
const checkBox = document.querySelector('.agree_consent');
const inputs = document.querySelectorAll('.input');
const radionButtons = document.querySelectorAll('.radion_btn');
const successMessage = document.querySelector('.success_message');

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



function handleSubmit(e)
{
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
     
    

          
    
    inputs.forEach(input => {


        if(data.first_name != "" && data.last_name != "" && data.email != "" && data.Message != "" && checkBox.checked == true)
            {


                checkBox.nextSibling.parentElement.nextElementSibling.style.display = "none";
                input.nextElementSibling.style.display = "none";
                email.nextElementSibling.nextElementSibling.style.display = "none";
                email.nextElementSibling.style.display = "none";
                Message.nextElementSibling.style.display = "none";
                input.classList.remove('invalid')
                email.classList.remove('invalid')
                Message.classList.remove('invalid')

                radionButtons.forEach(radionButton => {

                 
                    // if(radionButton.checked == false ){
                    //     radionButton.classList.add('invalid')
                    //     radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";
                    // }else {
                    //     radionButton.classList.remove('invalid')
                    //     successMessage.classList.toggle('active')
                    //     radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "none";
                        
                        
                    // }


                    for (var i = 0; i < radionButtons.length; i++) {
                        if (radionButtons[i].checked == true) {
                            console.log(radionButtons[i].checked)
                         radionButton.classList.remove('invalid')
                         radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.visibility = "hidden";
                         successMessage.classList.add('active')
                        }else{
                        radionButton.classList.add('invalid')
                        radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";
                    }
                   }
                    
                   
                
                })



              


            }else{

      
    if(input.value == "" ){
        input.classList.add('invalid')
        input.nextElementSibling.style.display = "inline";
    }else {
        input.classList.remove('invalid')
        input.nextElementSibling.style.display = "none";
        
        
    }

 
 
    

        







         radionButtons.forEach(radionButton => {

                 
            // if(radionButton.checked == false ){
            //     radionButton.classList.add('invalid')
            //     radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";
            // }else {
            //     radionButton.classList.remove('invalid')
            //     successMessage.classList.toggle('active')
            //     radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "none";
                
                
            // }


            for (var i = 0; i < radionButtons.length; i++) {
                if (radionButtons[i].checked) {
               

                 radionButton.classList.remove('invalid')
                radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "none";
                }else{
                radionButton.classList.add('invalid')
                radionButton.nextSibling.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";
                }
           }
            
           
        
        })

if(Message.value == "")
    {
        Message.classList.add('invalid')
        Message.nextElementSibling.style.display = "inline";
        
    } else {
        Message.classList.remove('invalid')
        Message.nextElementSibling.style.display = "none";

    }

    if(checkBox.checked == false ){
        checkBox.nextSibling.parentElement.nextElementSibling.style.display = "block";
    }else {
        checkBox.nextSibling.parentElement.nextElementSibling.style.display = "none";
        
        
    }


    successMessage.classList.remove('active')

}
});

       if(data.email != ""){

         if(data.email.match(validRegex)){
            email.classList.remove('invalid')
            email.nextElementSibling.nextElementSibling.style.display = "none";
     
         }else{
            email.classList.add('invalid')
            email.nextElementSibling.nextElementSibling.style.display = "inline";
         }

        }
}

form.addEventListener('submit',handleSubmit);