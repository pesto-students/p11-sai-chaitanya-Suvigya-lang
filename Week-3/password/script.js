const password='Qwerty';
const password2='passwordQuerty'
const password3='qwerty123'
const password4='Qwerty123'
const isPasswordStrong=(password)=>{
    if(password.length<8 || (password.includes("password")) || !(/[A-Z]/.test(password))){
        return false;
    }
    
    return true;
}
console.log(isPasswordStrong(password),password);
console.log(isPasswordStrong(password2),password2);
console.log(isPasswordStrong(password3),password3);
console.log(isPasswordStrong(password4),password4);
