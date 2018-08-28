function decorateArmour(target, key, descriptor) {

  const method = descriptor.value;
  let moreDef = 100;
  let ret;

  console.log(method)
  
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }

  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);


修饰类

const init = (target) => {
  target.nickName = 'person_name'
  target.prototype.nickName = 'kitty'
}

@init
class Person {
  nickName = 'native_name'
}

const cat = new Person()

console.log('Person', Person.nickName)  // 'Person person_name'
console.log('instance', cat.nickName) // 'instance native_name'


function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  name() { 
    return `${this.first} ${this.last}` 
  }
}

const jack = new Person()

console.log(jack.name())



const log = (target, name, descriptor) => {

  const oldAdd = descriptor.value

  descriptor.value = function(){
    console.log(`传入实例方法add的参数${arguments}`)
    console.log(`实例中的age属性：${this.age}`)
    return oldAdd.apply(this, arguments)
  }

  return descriptor
}

class Math {
  @log
  add(a, b){
    return a + b
  }
}

var math = new Math()
math.age = 10
const value = math.add(3, 6)
console.log(`value is equal to ${value}`)



class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    // return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
console.log('结果为', math.add(2, 4));











