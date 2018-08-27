
// const speak = (target, key, descriptor) => {
//   console.log(target, key, descriptor)
//   target.language = '中文'
//   return descriptor
// }

// class Boy {
//   @speak
//   run () {
//     console.log(`I can speak ${this.language}`)
//   }
// }

// const jinghong = new Boy()

// jinghong.run()

// 调用实例
@log 
class Person{}
// 实现代码
const Person = log(Person);

// decorator 处理
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

// 调用实例
class Person{
  @log
  say(){}
}

// 实现代码
_applyDecoratedDescriptor(
  Person.prototype, 
  'say', 
  [log],
  Object.getOwnPropertyDescriptor(Person.prototype, 'say'),
  Person.prototype)
)

@log
class Person{
  // 函数
  @log
  say(){}
  
  // 属性
  @log
  name = 'tec';
}

// 同样适用于对象字面量的方法、属性
const tec = {
  @log
  name:'tec',
  
  @log
  walk(){}
};