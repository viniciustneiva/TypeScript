var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Monster", "Lessons"));
var usr = {
    name: 'Monster',
    age: 3,
    getMessage: function () {
        // return `Hello ${this.name}`; tb funciona
        return "Hello " + this.name;
    }
};
var user2 = {
    cara: {
        name: 'Joao'
    }
};
console.log(user2.cara);
console.log(usr.getMessage());
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = "Alex";
var pageNumber = "1";
var errorMessage = null;
var usuario = null;
var someProp = null;
var doSomething = function () {
    console.log('do something');
};
var foo = "foo";
var doThrow = function () {
    throw "never";
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//let s2: string = vUnknown; 
var s2 = vUnknown;
var page = '1';
var numericPage = page;
var pages = '1';
var numberPage = page;
var someElement = document.querySelector(".foo");
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName + ' ' + lastName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = "foo";
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var pessoa = new User("Vinicius", "Neiva");
console.log(pessoa.getFullname());
//console.log(pessoa.maxAge);
var admin = new Admin('Foo', 'Bar');
admin.setEditor('EditorName');
console.log(admin.getEditor());
// const searchStr = 'foo';
// const _hasSeacherdString = any<string>((el: string) => el.contains(searchStr), [
//     "fooo",
//     "bar",
//     "baz"
// ]);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var cliente = {
    name: 'Jack',
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var cliente2 = {
    name: 'John',
    data: ['foo', 'bar', 'baz'],
    meta: 12
};
var result = addId(cliente);
console.log('result', result);
var result2 = addId(cliente2);
console.log('result2', result2);
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
var Status;
(function (Status) {
    Status["NotStarted"] = "not started";
    Status["InProgress"] = "in progress";
    Status["Done"] = "done";
})(Status || (Status = {}));
var notStartedStatus = Status.NotStarted;
// notStartedStatus = "foo"; // nao funciona
notStartedStatus = Status.NotStarted;
console.log(notStartedStatus); // not started
console.log(statuses.inProgress); // 1
console.log(Status.Done); // done
var Tarefa = /** @class */ (function () {
    function Tarefa(nome, id, status) {
        this.nome = nome;
        this.id = this.getId(id);
        this.status = status;
    }
    Tarefa.prototype.getId = function (id) {
        return ((id * 12 + 4) / 4) * 14;
    };
    return Tarefa;
}());
var numeroAleatorio = Math.floor(Math.random() * 101);
var novaTarefa = new Tarefa('Lavar a calçada', numeroAleatorio, Status.NotStarted);
console.log('novaTarefa', novaTarefa);
