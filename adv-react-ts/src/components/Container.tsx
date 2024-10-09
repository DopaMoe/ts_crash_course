// this is a polymorphoc component it is used
// to share styles, logic or whateverb
// this is not the use case for it but this is how you would build it

import {type ComponentPropsWithoutRef, type ElementType, type ReactNode} from "react";

type ContainerProps<T extends ElementType> =
    {
        as?: T; // we made this optional so that we can set a default value for it later for ts to understands it
        children: ReactNode;
    } & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType>({
                                                             as,
                                                             children,
                                                             ...props
                                                         }: ContainerProps<C>) {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>;
}