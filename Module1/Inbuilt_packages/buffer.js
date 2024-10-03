let buffer1=Buffer.from('123456789');
let buffer2=Buffer.from('ABC');
buffer2.copy(buffer1,2);
console.log(buffer1.toString());
console.log(Buffer.concat([buffer1,buffer2]).toString());
console.log(buffer1.equals(buffer2));
console.log(Buffer.compare(buffer1,buffer2));
