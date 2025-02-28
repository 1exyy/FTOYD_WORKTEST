import {ComponentPropsWithoutRef, FC} from "react";
import {clsx} from "clsx";
import {useCollapseContext} from "./CollapseProvider.ts";

interface ICollapseTitleProps extends ComponentPropsWithoutRef<'div'> {
}

const CollapseTitle: FC<ICollapseTitleProps> = ({className, children, ...rest}) => {
    const {setIsOpen} = useCollapseContext();
    return (
        <div {...rest} className={clsx("collapse__title", className)} onClick={() => setIsOpen(prev => !prev)}>
            {children}
            <svg width="28" height="29">
                <use xlinkHref="#arrow_down"/>
            </svg>
        </div>
    );
};

export default CollapseTitle;