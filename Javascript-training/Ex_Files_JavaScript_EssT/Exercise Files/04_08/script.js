//can't change define
const MYCONTENT = 5;
console.log(MYCONTENT);

// use for same variable and differnt scope (nested func,loop)
function logScope() {
  let localVar = 2;

  if (localVar) {
    let localVar = "I'm different!";
    console.log("nested localVar: ", localVar);
  }
  console.log("logScope localVar", localVar);
}
logScope();
