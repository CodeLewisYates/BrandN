import { useLocation } from "react-router-dom";
import {IoHome} from "react-icons/io5";
import { colors } from "assets/shared/variables";
import { LayoutTitleContainer } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleIcon } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleFlex } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleText } from "assets/styles/components/LayoutTitle/LayoutTitle";
import _ from "lodash";

const LayoutTitle = (props) => {
    const location = useLocation();
    const {test} = props;

    const path = location.pathname.split("/")[1].replace("-", " ");
    const convertedName = _.startCase(path);

    return (
        <LayoutTitleContainer>
            <LayoutTitleFlex>
                <LayoutTitleIcon><IoHome size="14px" color={colors.layoutTitles} /></LayoutTitleIcon>
                {`/ ${path}`}
            </LayoutTitleFlex>
            <LayoutTitleText>
                {convertedName}
            </LayoutTitleText>
        </LayoutTitleContainer>
    );
};

export default LayoutTitle;