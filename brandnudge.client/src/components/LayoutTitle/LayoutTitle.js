import {useContext} from "react";
import { useLocation } from "react-router-dom";
import {IoHome} from "react-icons/io5";
import {BiArrowToLeft, BiArrowToRight} from "react-icons/bi";
import { colors } from "assets/shared/variables";
import { LayoutTitleContainer } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleIcon } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleFlex } from "assets/styles/components/LayoutTitle/LayoutTitle";
import { LayoutTitleText } from "assets/styles/components/LayoutTitle/LayoutTitle";
import _ from "lodash";
import { NavContext } from "contexts/NavContext";

const LayoutTitle = (props) => {
    const location = useLocation();

    const {showNav, setShowNav} = useContext(NavContext);

    const path = location.pathname.split("/")[1].replace("-", " ");
    const convertedName = _.startCase(path);

    return (
        <LayoutTitleContainer>
            <LayoutTitleIcon onClick={() => setShowNav(!showNav)}>{showNav ? <BiArrowToLeft size="18px" color={colors.whiteText} cursor="pointer" /> : <BiArrowToRight size="18px" color={colors.whiteText} cursor="pointer" />}</LayoutTitleIcon>
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