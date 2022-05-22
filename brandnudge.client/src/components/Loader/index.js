import { RotatingLines } from "react-loader-spinner";
import LoaderContainer from "./LoaderContainer";
import { colors } from "assets/shared/variables";

const Loader = (props) => {

    const {size} = props;

    return (
        <LoaderContainer>
            <RotatingLines width={size} height={size} strokeColor={colors.navBlue} strokeWidth={4} />
        </LoaderContainer>
    )
}

export default Loader;