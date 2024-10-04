import {type FC, type ReactNode} from "react";
interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

// arrow function component
const Header: FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            {/*<img src={image.src} alt={image.alt}/>*/}
            {/*you can use either the above syntax or the spread operation as below*/}
            <img {...image}/>
            {children}
        </header>
    );
};
export default Header;