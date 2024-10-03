const util=require("util");
const txt="congrats %s for the %dth birthday";
const result=util.format(txt,"Ashish",35);
console.log(result);
const name="Little";
const age=31;
const res=util.format("name : %s, Age: %d",name,age);
console.log(res);