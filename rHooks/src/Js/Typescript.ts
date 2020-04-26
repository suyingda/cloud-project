
// import ListList from './module/showList'

function Typescript() {
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = { firstName: "Jane", lastName: "User" };
    return greeter(user);
}

export default Typescript;
