// string , number , boolean
let userName = "max";
let number = 34;
let isValid = true;

// uniontypes
let userID: string | number = "acv1";
userID = 1234;

// objects

type User = {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number
};

let user: User;

user = {
    name: "Mohammad",
    age: 30,
    isAdmin: true,
    id: 1
};

// array types

let hobbies: string[];
// number[], boolean[], {name:string, age: number}[]

hobbies = ["Sports", "Guitar", "VideoGames", "De-loading"];

// functions param and return types
function add(a: number, b: number): number {
    return a + b;
}

// custom types / custom aliases
type AddFn = (a: number, b: number) => number

// interface
interface Credentials {
    email: string,
    password: string
}

let creds: { password: string; email: string } = {
    email: "hola",
    password: "password"
};
// interface types vs custom alias 'type'
// types alias can be used for both objects and primitive type also you can use union types on it
// whereas interfaces are explicit used for objects, and it will help if you want to implement an interface on a class
// such as
class AuthCreds implements Credentials {
    email: string;
    password: string;
    userName: string;
    newProp: string;
    // both email and password have to be passed because Credentials class implementation
}

// another reason for using interface also is declaration merging
// which is an interface with props in an easy way
interface Credentials {
    newProp: string;
}


//defining function type
function calculate(a: number, b: number, calcFn: AddFn) {
    calcFn(a, b);
}

calculate(5, 3, add);


// Merging Types

// can be used by both interface and type

// type merge syntax
type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

type AppAdmin = AppUser & Admin;

let admin: AppAdmin;

admin = {
    permissions: ["login"],
    userName: "Moe"
};

// type merge interface syntax

interface AdminInterfaceType {
    permission: string[];
};

interface AppUserInterfaceType {
    userName: string;
}

interface AppAdminInterface extends AdminInterfaceType, AppUserInterfaceType {
};

let adminInterface: AppAdminInterface;

adminInterface = {
    permission: ["login"],
    userName: "Moe"
};

// adding literal types
// used when you do not want to assign verbose strings in a var
type Role = 'admin' | 'user' | 'editor';
let role: Role;

role = "admin";
role = "user";
role = "editor";
// role = "abc" This will give an Error

// type guards & type narrowing
// basically, it's about making sure that the params are of the type & value you need
function typeGuards(action: number | string, role: Role) {
    if (typeof action === 'string' && role === "admin") {
        console.log("Perform Action");
    }
}

// note you can not type guard a custom Type
// such as
if (typeof user === User) {
    //  this will produce an error at runtime, because there is no equivalent to that in js when compiling
    // however you can check if a prop is inside the user object like
    if ("permission" in user) {
        // this will work
    }
}


// generic types
// used when you are not sure what you type of data you are accepting

type DataStorage<T> = {
    storage: T[]; //
    genericSumFn: (data: T) => void;// you can add functions
}

// usage defined DataStorage of strings
let textStorage: DataStorage<string> = {
    storage: [],
    genericSumFn(data) {
        this.storage.push(data);
    }
};

// generic functions

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
};

let newUser = merge({name: "Mohammad"}, {age: 30});




