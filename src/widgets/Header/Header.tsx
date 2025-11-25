import { FC } from "react";
import './style.css';
import { Link } from "react-router-dom";
import LinkHeader from "../../shared/ui/LinkHeader/LinkHeader";

const Header:FC = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to='/' className="header__logo-link">
                        <img src="https://gc.onliner.by/images/logo/onliner_logo.v3.png?1763108576, https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?1763108576 2x" className="header__logo-img" alt="logo-onliner" />
                    </Link>
                </div>
                 <div className="header__search">
                        <input className="header__search-input" type="text" placeholder="Поиск"/>
                    </div>
                    <div className="header__btns">
                        <LinkHeader toPage="/sign-in" className="header__btn--entry">
                            Sign in
                        </LinkHeader>
                        <LinkHeader toPage="https://www.facebook.com/?locale=ru_RU" className="header__btn--facebook"/>
                        <LinkHeader toPage="https://vk.com/" className="header__btn--vk"/>
                        <LinkHeader toPage="https://www.google.com/?hl=ru" className="header__btn--google"/>
                    </div>
                    <div className="header__basket">
                        <LinkHeader toPage="/basket" className="header__btn--basket"/>
                </div>
               
            </div>
        </div>
    )
}

export default Header;