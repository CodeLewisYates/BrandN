import { StyledSelect } from "assets/styles/components/Select/SelectStyles";
import { StyledOption } from "assets/styles/components/Select/SelectStyles";

const Select = (props) => {

    const {onChange, options, property, valueProperty, placeholder, value, width} = props;

    return (
        <StyledSelect
            onChange={onChange}
            defaultValue={placeholder?.text || undefined}
            value={value}
            style={{width: width || null}}
        >
            {placeholder && (
                <StyledOption value={placeholder.text}>{placeholder.text}</StyledOption>
            )}
            {options?.map(o => (
                <StyledOption value={valueProperty ? o[valueProperty] : o}>{property ? o[property] : o}</StyledOption>
            ))}
        </StyledSelect>
    );
};

export default Select;