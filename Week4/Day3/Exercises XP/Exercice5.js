class Dog {
  constructor(name) {
    this.name = name;
  }
}
// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}
// output : non it's not  will be extend successfully
// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
// output : yes it will be extend successfully
// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}
//output : ReferncesError:name is not defined
// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
// output : cannot access 'this' before calling super()
