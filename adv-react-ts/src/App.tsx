import Input from "./components/Input.tsx";

function App() {
    return (
        <main>
            <Input label="name" id="name" type="text"/>
            <Input label="Age" id="age" type="number"/>
        </main>
    );
}

export default App;
