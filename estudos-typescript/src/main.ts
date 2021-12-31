const hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Monster", "Lessons"));

interface Usr {
    name: string;
    age?: number;

    getMessage?(): string;
}

const usr: Usr = {
    name: 'Monster',
    age: 3,
    getMessage() {
        // return `Hello ${this.name}`; tb funciona
        return "Hello " + this.name;
    }
};

const user2: { cara: Usr } = {
    cara: {
        name: 'Joao',
        
    },
};

console.log(user2.cara)


console.log(usr.getMessage());

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;

}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag: MaybePopularTag = 'dragon';

let username: string = "Alex";

let pageNumber: string | number = "1";

let errorMessage: string | null = null;

let usuario: UserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object = null;

const doSomething = (): void => {
    
    console.log('do something');
   
}

let foo: any = "foo";


const doThrow = ():never => {
    throw "never";
}

let vAny: any = 10
let vUnknown: unknown = 10;

let s1: string = vAny;
//let s2: string = vUnknown; 
let s2: string = vUnknown as string; 


let page: string = '1';
let numericPage: number = (page as unknown) as number;

let pages: any = '1';
let numberPage = page as string;

const someElement = document.querySelector(".foo");

someElement.addEventListener('blur', (event) =>{
    const target = event.target as HTMLInputElement;
    console.log('event',target.value);
});

// console.log('someElement', someElement.value);
interface InterfaceUser {
    getFullname(): string;
}

class User implements InterfaceUser{
    private firstName: string;
    private lastName: string;
    readonly unchangableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName+ ' ' +lastName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = "foo";
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const pessoa = new User("Vinicius", "Neiva");

console.log(pessoa.getFullname());

//console.log(pessoa.maxAge);

const admin = new Admin('Foo', 'Bar');

admin.setEditor('EditorName');

console.log(admin.getEditor());

// const searchStr = 'foo';
// const _hasSeacherdString = any<string>((el: string) => el.contains(searchStr), [
//     "fooo",
//     "bar",
//     "baz"
// ]);

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
}

interface ClienteInterface<T, V> {
    name: string;
    data: T;
    meta: V;
}

const cliente: ClienteInterface<{ meta: string }, string> = {
    name: 'Jack',
    data: {
        meta: "foo",
    },
    meta: "bar",
}

const cliente2: ClienteInterface<string[], number> = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 12,
}

const result = addId(cliente);
console.log('result', result);

const result2 = addId(cliente2);
console.log('result2', result2);

const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
}



enum Status {
    NotStarted = 'not started',
    InProgress = 'in progress',
    Done = 'done',
}



let notStartedStatus: Status = Status.NotStarted;

// notStartedStatus = "foo"; // nao funciona

notStartedStatus = Status.NotStarted;

console.log(notStartedStatus); // not started

console.log(statuses.inProgress); // 1

console.log(Status.Done); // done

interface Task {
    id: number;
    status: Status;
    getId(id: number): number;
    
 }
 
class Tarefa implements Task {
    nome: string;
    id: number;
    status: Status;
    getId(id: number):number {
        return ((id*12+4)/4)*14;
    }
    constructor(nome: string, id: number, status: Status){
        this.nome = nome;
        this.id = this.getId(id);
        this.status = status;
    }
 
}

const numeroAleatorio: number = Math.floor(Math.random() * 101);

const novaTarefa = new Tarefa('Lavar a calçada', numeroAleatorio, Status.NotStarted);

console.log('novaTarefa', novaTarefa);