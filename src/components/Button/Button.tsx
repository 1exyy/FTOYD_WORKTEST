import {ComponentPropsWithoutRef, FC} from "react";
import {clsx} from "clsx";
import './Button.scss';

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {

}

const Button: FC<IButtonProps> = ({className, children, ...rest}) => {
    return (
        <button className={clsx(className, "button")} {...rest}>
            {children}
        </button>
    );
};

export default Button;