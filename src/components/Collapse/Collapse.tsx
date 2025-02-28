import {ComponentPropsWithoutRef, FC, useState} from "react";
import {clsx} from "clsx";
import {CollapseContext} from "./CollapseProvider.ts";
import CollapseTitle from "./CollapseTitle.tsx";
import './Collapse.scss'
import CollapseBody from "./CollapseBody.tsx";

interface ICollapseProps extends ComponentPropsWithoutRef<'div'> {
}

const CollapseContainer: FC<ICollapseProps> = ({className, children, ...rest}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <CollapseContext.Provider value={{isOpen, setIsOpen}}>
            <div className={clsx("collapse__wrapper", className, {["collapse-open"]: isOpen})} {...rest}>
                {children}
            </div>
        </CollapseContext.Provider>
    );
};

const Collapse = Object.assign(CollapseContainer, {
    Title: CollapseTitle,
    Body: CollapseBody
});
export default Collapse;