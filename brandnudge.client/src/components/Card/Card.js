import { StyledCard } from "assets/styles/layouts/Card/CardStyles";

const Card = (props) => {
    const { width } = props;

    return (
        <StyledCard
            style={{width: width || "100%"}}
        >
            {props.children}
        </StyledCard>
    )
}

export default Card;