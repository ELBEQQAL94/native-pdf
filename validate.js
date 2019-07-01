export function validate(value = "" , type = "" ){
    switch(type){
        case 'email': return validateEmail(value);
        case 'phone': return validatePhone(value);
        default: return null;
    }

};

// validate email
function validateEmail(email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}; 

// validate phone number
function validatePhone(phoneNumber){
    let reg = /^\d{10}$/;
    return reg.test(phoneNumber);
};