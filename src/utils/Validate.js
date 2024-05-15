export const validateData = (email, password)=>{

    const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValidate) return "Email is not valid";
    if(!isPasswordValidate) return "password is not valid";

    return null;

}