import React from "react";
import { StyledFormCard } from "./styledCard";

const FormCard = (props) => {
    return (
        <StyledFormCard {...props}>
            {props.children}
        </StyledFormCard>
    )
}

export default FormCard;