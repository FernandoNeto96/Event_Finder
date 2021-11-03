import React from "react";
import { StyledInput, LabelContainer } from "./styledForm";
import FormCard from "../cards/formCard";

const LoginForm = (props) => {
    return (
        <FormCard>
            <h2>Login</h2>
            <form {...props}>
                <LabelContainer>
                    <label htmlFor="username">Username:</label>
                    <StyledInput name="username" type="text" placeholder="enter your username:" />
                </LabelContainer>

                <LabelContainer>
                    <label htmlFor="password">Password:</label>
                    <StyledInput name="password" type="password" placeholder="enter your password:" />
                </LabelContainer>
            </form>
        </FormCard>
    )
}

export default LoginForm;