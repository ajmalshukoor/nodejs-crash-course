console.log(global)

setTimeout(()=>{
    console.log("In timeout")
    clearInterval(init)
}, 3000)

const init = setInterval(()=>{
    console.log("In interval")
}, 1000)

console.log(__dirname)
console.log(__filename)
