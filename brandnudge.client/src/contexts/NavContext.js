import {createContext, useState} from "react";

export const NavContext = createContext();

const NavContextProvider = (props) => {
    const [showNav, setShowNav] = useState(true);

    return (
        <NavContext.Provider value={{showNav, setShowNav}}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;