
//构建基类
function Man() {
  this.def = 2
  this.atk = 3
  this.hp = 3
}

Man.prototype = {
  toString: function(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`
  }
}

es5实现decorator


const Plane = function(){}

Plane.prototype.fire = function(){
  console.log('发射普通子弹')
}

const MissileDecorator = function(plane){
  this.plane = plane;
}

MissileDecorator.prototype.fire = function(){
  this.plane.fire()
  console.log('发射导弹')
}

const AtomDecorator = function( plane ){
  this.plane = plane;
}

AtomDecorator.prototype.fire = function(){
  this.plane.fire()
  console.log('发射原子弹')
}

const plane = new Plane()
const missDec = new MissileDecorator(plane)
const atomDec = new AtomDecorator(missDec)
atomDec.fire(); // 发射普通子弹 发射导弹 发射原子弹

let con = () => {
  console.log('old con')
}

const _con = con

con = () => {
  _con()
  console.log('new con')
}
con()