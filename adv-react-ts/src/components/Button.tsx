import {type ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href: string;
}

// Helper Function to know if the component is anchor or button
// using type type predicate
// note: honestly  i would never use it like this.
// i would prefer to make another component that serves as an anchor wrapper
// but its good to know about type predicate
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    // this is saying that only return if the type is AnchorProps
    return 'href' in props;
}

export default function Button(props: AnchorProps | ButtonProps) {
    if (isAnchorProps(props)) {
        return (
            <a className="button" {...props}></a>
        );
    }
    return (
        <button className="button" {...props}></button>
    );
}