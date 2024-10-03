const url=require("url");
const urlString="https://github.com/ashishsamal145?tab=repositories";
const parsedUrl=url.parse(urlString,true);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.search);