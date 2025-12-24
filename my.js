const myinfo={}
myinfo.name="Saloni"
myinfo.age=21
myinfo.state="Rajasthan"
console.log(myinfo)
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
//spread
const obj4={...obj1,...obj2}
console.log(obj4)
console.log(Object.keys(myinfo))
console.log(Object.values(myinfo))
console.log(myinfo.hasOwnProperty('age'))
const userInfo={
    name:"abc",
    email:"xyz@gamil.com",
    phone:123456789
}
const{email}=userInfo
console.log(email)