const obj = {
  a: 'jinghong',
  inner_obj : {
    b: 'inner_b',
    c: 'inner_c'
  }
}

const obj_2 = {
  e: 'obj_e',
  ...obj
}

console.log(obj_2)