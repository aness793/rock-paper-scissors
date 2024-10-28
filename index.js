choices = ['rock','paper','scissor']
message=''
const retry = document.getElementById('again')
let you=0
let him =0
robot =''
var choice = function(choice) {
    robot = choices[ Math.floor(Math.random()*3)]
    document.getElementById(robot.toString()).style.display ='block'
   if(choice=='rock' ){
    if(robot=='rock'){
        message='draw'
        result.style.color='blue'
    }
    else  if(robot=='paper'){
        message='you lost'
        result.style.color='red'
        him++
    }
    else {
        message='you win'
        result.style.color='green'
        you++
    }
   }
   if(choice=='paper'){
    if(robot=='paper'){
        message='draw'
        result.style.color='blue'
    }
    else  if(robot=='scissor'){
        
        message='you lost'
        result.style.color='red'
        him++
    }
    else {
        message='you win'
        result.style.color='green'
        you++
    }
   }
   if(choice=='scissor'){
    if(robot=='scissor'){
        message='draw'
        result.style.color='blue'
    }
    else  if(robot=='rock'){
        message='you lost'
        result.style.color='red'
        him++
    }
    else {
        message='you win'
        result.style.color='green'
        you++
    }
   }
   result.textContent = message

   retry.style.display ='block'
   if(message!=''){
    document.getElementById('choose').style.display='none'
}
document.querySelectorAll(".c").forEach(a=>{
    a.style.display ='none'
})
    yourscore.textContent=you.toString()


    robotscore.textContent = him.toString()

}

var repeat= function (){
    result.textContent =''
    message=''
    document.getElementById('again').style.display ='none'
    if(message==''){
        document.getElementById('choose').style.display='block'
    }
    document.getElementById(robot.toString()).style.display ='none'
    document.querySelectorAll(".c").forEach(a=>{
        a.style.display ='inline'
    })

}
