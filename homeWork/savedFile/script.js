let form = document.getElementById('newUserForm');
form.style.display = 'none';
getUser();
let user = {
    "firstName": "",
    "lastName": "",
    "phone": "",
    "email": "",
    "dateOfBirth": "",
}
document.getElementById('saveDetails').addEventListener('click',()=>{
    saveUser();
});
function saveUser() {
    user.firstName = document.getElementById('firstName').value;
    user.lastName = document.getElementById('lastName').value;
    user.phone = document.getElementById('phone').value;
    user.email = document.getElementById('email').value;
    user.dateOfBirth = document.getElementById('dateOfBirth').value;
    localStorage.setItem('userInfo', JSON.stringify(user));
    form.style.display = 'none';
    document.getElementById('success').innerText = `${user.firstName + ' ' + user.lastName} Your details were saved successfully!`
}
function getUser() {
    let localUser = JSON.parse(localStorage.getItem('userInfo'));
    if (localUser == null) {
        form.style.display = '';
    } else {
        document.getElementById('success').innerText = `${localUser.firstName + ' ' + localUser.lastName} Welcome Back!
         
        Here are your details: 
        
        Phone: ${localUser.phone}
        Email: ${localUser.email}
        Date Of Birth: ${localUser.dateOfBirth}`
    }
}