function Obj(name) {
    return this.Name = name;
}

Obj.prototype.Name = function () {
    return this.Name;
}

const obj = new Obj("Chandrakant Agrawal");
console.log(obj);