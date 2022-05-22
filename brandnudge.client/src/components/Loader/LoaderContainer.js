import { Container } from "assets/styles/components/Loader/LoaderStyles";

const LoaderContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default LoaderContainer;