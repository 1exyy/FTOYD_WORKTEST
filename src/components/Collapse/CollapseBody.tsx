import {ComponentPropsWithoutRef, FC} from "react";
import {clsx} from "clsx";

interface ICollapseBodyProps extends ComponentPropsWithoutRef<'div'> {
}

const CollapseBody: FC<ICollapseBodyProps> = ({className, children, ...rest}) => {
    return (
            <div {...rest} className={clsx("collapse__body", className)}>
                {children}
            </div>
    );
};

export default CollapseBody;