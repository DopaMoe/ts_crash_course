import {useRef} from "react";
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
    const input = useRef<HTMLInputElement>(null)
    return (
        <main>
            <Input label="name" id="name" type="text" ref={input}/>
            <Input label="Age" id="age" type="number"/>

            <p>
                <Button>Button</Button>
            </p>
            <p>
                <Button href="https://www.google.com">Link</Button>
            </p>

            <Container as={Button} onClick={() => console.log("Polymorphic Component")}>Click Me!</Container>
        </main>
    );
}

export default App;


