import {ComponentPropsWithoutRef, FC} from "react";
import './Output.scss';
import {clsx} from "clsx";

interface IOutputProps extends ComponentPropsWithoutRef<'div'> {
    title: string
    value: string | number;
}

const Output: FC<IOutputProps> = ({className, value, title, ...rest}) => {
    return (
        <div className={clsx(className, "output__wrapper")} {...rest}>
            <span className="output__title">{title}</span>
            <span className="output__value">{value}</span>
        </div>
    );
};

export default Output;