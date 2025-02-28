import React, {createContext, SetStateAction, useContext} from "react";


export interface ICollapseContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const CollapseContext = createContext<ICollapseContext>(null!);
export const useCollapseContext = () => {
    const props = useContext(CollapseContext);

    if (!props) {
        throw Error("No collapse context provider!");
    }

    return props;
};