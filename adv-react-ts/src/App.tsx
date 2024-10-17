// import {useRef} from "react";
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
// import Container from "./components/Container.tsx";
import Form from "./components/Form.tsx";

function App() {
    // const input = useRef<HTMLInputElement>(null);
    function handleSave(data: unknown) {
        const extractedData = data as { name: string, age: string };
        console.log(extractedData);
    }

    return (
        <main>
            {/*<Input label="name" id="name" type="text" ref={input}/>*/}
            {/*<Input label="Age" id="age" type="number"/>*/}
            {/*<p>*/}
            {/*    <Button>Button</Button>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    <Button href="https://www.google.com">Link</Button>*/}
            {/*</p>*/}

            {/*<Container as={Button} onClick={() => console.log("Polymorphic Component")}>Click Me!</Container>*/}

            <Form onSave={handleSave}>
                <Input label="name" id="name" type="text"/>
                <Input label="Age" id="age" type="number"/>
                <Button>Save</Button>
            </Form>
        </main>
    );
}

export default App;


