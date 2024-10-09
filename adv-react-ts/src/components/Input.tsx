import {type ComponentPropsWithoutRef} from "react";

// merging types
interface InputProps extends ComponentPropsWithoutRef<'input'>{
    label: string;
    id: string;
}

export default function Input({label, id, ...props}: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props}/>
        </p>
    );

}