import * as Yup  from 'yup'


export const signUpSchema = Yup.object({
    displayName: Yup.string().min(2).max(25).required('Pls enter your name'),
    email: Yup.string().email().required('Pls enter your password'),
    password: Yup.string().min(6).required('Pls enter your password'),
    confirmPassword: Yup.string()
    .required('pls re-enter your password')
    .oneOf([Yup.ref('password'), null],"Password must match")
});