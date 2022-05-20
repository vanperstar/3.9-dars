
// var elResult = document.querySelector('.result')
// var password = `123`
// var userPassword = prompt('Parolni kiriting:')
// if(password == userPassword) {
//     alert("Parol to'g'ri!!!")
//     elResult.textContent = ('Parol togri')
// }else{
//     alert("Parol noto'g'ri!!!")
//     elResult.textContent = ('Parol notogri')
// }

// var elForm = document.querySelector('.form')
// var elEmailInput = elForm.querySelector('.form_email')
// var elPassworIdnput = elForm.querySelector('.form_password')
// var elResult = document.querySelector('.result')

// var login = 'anvar@gmail.com'
// var userEmail = elEmailInput('Email kirit')
// var userEmail = prompt('Email kirit')

// if (login == userEmail) {
//     // alert('Email togri')
//     elResult.textContent = ('Email togri')
// } else {
//     // alert('Emailni togri kirit')
//     elResult.textContent = ('Emailni togri kirit')
// }


// elForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     elResult.textContent = ('Togri')

//     if(elEmailInput.value === credentials.login && elPassworIdnput.value === credentials){
//         elResult.textContent = 'togri'
//         console.log ('Togri')
//     }else{
//         elResult.textContent = 'notogri'
//         console.log ('Notogri')
//     }
// })




// var login = "sample_login";
// var password = "sample_password";




const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

const result_email = document.getElementById('result_email');
const result_password = document.getElementById('result_password')

form.addEventListener('submit', (e) => {
  let messages = []
  // if (name.value === '' || name.value == null) {
  //   messages.push('ism talab qilinadi')
  // }

  if (name.value.length <= 50) {
    messages.push('')
  }

  // if (name.value.length >= 30) {
  //   messages.push('Email @ bilan yozilishi  kerak')
  // }else{
  //   messages.push('')
  // }

  // if (messages.length > 0) {
  //   e.preventDefault()
  //   // errorElement.innerText = messages.join(', ')
  //   result_email.innerText = messages.join('')
  // }


  if (password.value.length <= 8) {
    messages.push('Parol 8 ta belgidan kam bolmasligi kerak')
  }

  if (password.value.length >= 16) {
    messages.push('Parol 12 belgidan kam bolishi kerak')
    
  }else{
    messages.push('  Parol togri kiritildi')
  }

  if (messages.length > 0) {
    e.preventDefault()
    // errorElement.innerText = messages.join(', ')
    result_password.innerText = messages.join('Login togri kiritildi ')
  }
})


