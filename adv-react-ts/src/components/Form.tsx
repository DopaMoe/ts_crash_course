import { useRef, forwardRef, useImperativeHandle, type ComponentPropsWithoutRef, type FormEvent } from "react";

interface FormProps extends ComponentPropsWithoutRef<'form'> {
    onSave: (value: unknown) => void;
}

export type FormHandler = {
    clear: () => void;
}

const Form = forwardRef<FormHandler, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
    const form = useRef<HTMLFormElement>(null);
    // this handle is used to expose a method that can be called outside the component eg. App component
    // this only works on a component that recieve a forwarded ref
    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log("CCLEARING");
                form.current?.reset();
            }

        }
    });
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form {...otherProps} onSubmit={handleSubmit} ref={form}>{children}</form>
    );
})

export default Form;