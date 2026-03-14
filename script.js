let problemBank = []

// load dataset
fetch("problems.json")
.then(response => response.json())
.then(data => {

problemBank = data

console.log("Dataset loaded:", problemBank)

})

function generatePractice(){

let course = document.getElementById("course").value

// filter problems by selected course
let pool = problemBank.filter(p => p.course === course)

if(pool.length === 0){

document.getElementById("practiceBox").innerHTML =
"No problems available for this course."

return
}

// pick random problem
let index = Math.floor(Math.random() * pool.length)

let problem = pool[index]

document.getElementById("practiceBox").innerHTML = `
<div class="problem">
<b>Practice Problem</b><br>
${problem.question}
</div>
`

if(window.MathJax){
MathJax.typeset()
}

}