import { ButtonHTMLAttributes, ComponentType, RefAttributes } from "react";
import { button, ButtonVariants, } from "./button.css"



type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> &
    ButtonVariants & {
        className?: string;
    };

const Button = ({
    children,
    className,
    variant,
    size,
    iconOnly,
    fullWidth,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={`
                ${button({ variant, size, iconOnly, fullWidth })}
                ${className}
                `}
            data-size={size}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;