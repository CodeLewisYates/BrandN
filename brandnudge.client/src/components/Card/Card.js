import { CardHeader, StyledCard } from "assets/styles/components/Card/CardStyles";

const Card = (props) => {
    const { width, headerText } = props;

    return (
        <StyledCard
            style={{width: width || "100%"}}
        >
            <CardHeader>{headerText || ""}</CardHeader>
            {props.children}
        </StyledCard>
    )
}

export default Card;