import { createSlice , PayloadAction } from "@reduxjs/toolkit";

type loginState = {
    email : string ;
    password: string  ;
};

const initialState : loginState = {
    email : '',
    password : ''
}

export const LoginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setCredentials : (state , 
        {
            payload: {email, password}
        }: PayloadAction<{email: string; password: string}>
        ) => {
            state.email = email,
            state.password = password
        }
    }
})


export const { setCredentials } = LoginSlice.actions;


export default LoginSlice.reducer;