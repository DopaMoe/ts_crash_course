import {type ReactNode} from "react";

interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

export default function Header({image, children}: HeaderProps) {
    return (
        <header>
            {/*<img src={image.src} alt={image.alt}/>*/}
            {/*you can use either the above syntax or the spread operation as below*/}
            <img {...image}/>
            {children}
        </header>
    );
};