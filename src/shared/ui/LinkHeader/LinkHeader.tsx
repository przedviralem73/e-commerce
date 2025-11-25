import { FC } from "react";
import { Link } from "react-router-dom";
import './style.css';

interface LinkHeaderProps {
    toPage: string,
    className: string,
    children?: React.ReactNode,

}

const LinkHeader:FC<LinkHeaderProps> = ({toPage, className, children}) => {
    return (
        <Link to={toPage} className={`header__btn ${className}`}>
            {children}
        </Link>
    )
}

export default LinkHeader;