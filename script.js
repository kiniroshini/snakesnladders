alert("welcome to Snakes&Ladders. Your game begins now!")
let turn = 'red'
let stopEvent=false
document.querySelector('#red').style.marginLeft = '0vmin'
document.querySelector('#red').style.marginTop = '0vmin'
document.querySelector('#blue').style.marginLeft = '0vmin'
document.querySelector('#blue').style.marginLeft = '0vmin'


    document.addEventListener('keydown',async(e)=>{
    
      if(e.keyCode=='83' &&!stopEvent){
    
        stopEvent = true
        let diceNum = await roll()
        let isOutOfRange = checkRange(diceNum)
         await new Promise(resolve => setTimeout(resolve,400))
         if(!isOutOfRange){
        await run(diceNum)
        await new Promise(resolve => setTimeout(resolve,400))
         }
         let wonBy = checkwin()
         if(wonBy=='none'){
         changeTurn()
        stopEvent = false}
    }
})


function checkwin(){
    if(marginTop()==-88.2 && marginLeft()==0){
        document.querySelector('#p_turn').innerHTML=`${turn} player wins!`
        //https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/win.mp3?raw=true
        new Audio('https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/win.mp3?raw=true').play()

        return turn
    }
    else{
        return 'none'
    }
}
function checkRange(diceNum){
    let isOutOfRange = false
    if(marginTop()==-88.2 && (marginLeft()+Number((diceNum*-9.8).toFixed(1)))<0){
        isOutOfRange=true 
    }
    return isOutOfRange
}
function changeTurn(){
    if(turn=='blue'){
        document.querySelector('#p_turn').innerHTML="Red player's turn"
        turn = 'red'
    }
    else if(turn=='red'){
        document.querySelector('#p_turn').innerHTML="Blue player's turn"
        turn = 'blue'
    }
}
let xxx=0
function run(diceNum){
    //ye naya hai
    
    if(xxx==0 || xxx==1){
        return new Promise(async(resolve,reject)=>{
            for(i=1;i<=(diceNum-1);i++){
                let direction = getDirection()
                await move(direction)
            }
            await checkLaddersAndSnakes()
            resolve()
            xxx=xxx+1
        } 
        )
        

    }//idhar tak
    else{ // ye bhi naya hai
    return new Promise(async(resolve,reject)=>{
    for(i=1;i<=diceNum;i++){
        let direction = getDirection()
        await move(direction)
    }
    await checkLaddersAndSnakes()
    resolve()
})}//ye pan
}

function checkLaddersAndSnakes(){
    
    return new Promise(async(resolve,reject)=>{
    //idhar ka bacha hai its not over yet
    let froms = [[9.8,0],[88.2,-9.8],[49,-9.8],[29.4,-19.6],[39.2,-19.6],[78.4,-29.4],[88.2,-39.2],[88.2,-49],[58.8,-49],[19.6,-49],[0,-49],[58.8,-58.8],[39.2,-68.6],[29.4,-68.6],[39.2,-78.4],[78.4,-88.2],[58.8,-88.2],[9.8,-88.2]]
    let tos = [[19.6,-19.6],[68.8,-19.6],[58.8,-29.4],[49,0],[29.4,-39.2],[68.6,-49],[88.2,-19.6],[78.4,-68.6],[29.4,-19.6],[39.2,-58.8],[9.8,-68.6],[68.6,-78.4],[49,-58.8],[19.6,-88.2],[58.8,-68.6],[88.2,-68.6],[49,-68.6],[19.6,-68.6]]
    for(let i =0;i<tos.length;i++){
     
        if(marginLeft()==froms[0][0] && marginTop()==froms[0][1]){
            //idhar extra hai element 1 ladder1
            
            var txt;
            var person = (prompt("What is the full form of BJT?", "write answer here"));
            
                
              
            if (person == "bipolar junction transistor") { 
                
                //idhar tak
        document.querySelector(`#${turn}`).style.marginLeft=`${tos[0][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[0][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break}
        //else part extra hai
       
        else{
            
            document.querySelector(`#${turn}`).style.marginLeft=`${froms[0][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[0][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        
        break
        }
        //yaha ek bracket extra hai if ke liye upar wala
        
    }
     if(marginLeft()==froms[1][0] && marginTop()==froms[1][1]){
        //idhar extra hai element 2 ladder2
        //question 1 R
        var txt;
        var person = prompt("so far so good? well, lets see who wins! (enter 'ok', if you are ready)");
        if (person == "what?") {  
            //idhar tak
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[1][0]}vmin`
    document.querySelector(`#${turn}`).style.marginTop=`${tos[1][1]}vmin`
    await new Promise(resolve =>setTimeout(resolve,400))
    break}
    else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[1][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[1][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
    //yaha ek bracket extra hai if ke liye upar wala
}
 if(marginLeft()==froms[2][0] && marginTop()==froms[2][1]){
    //idhar extra hai element 3 ladder 3
    //question 1 R
    var txt;
    var person = prompt("The doping level of a collector in an NPN diode required to accomodate majority carriers from the emitter should be(maximum/minimum/moderate)?");
    if (person == "moderate") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[2][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[2][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[2][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[2][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[3][0] && marginTop()==froms[3][1]){
    //idhar extra hai element 4 snake 1
    //40
    var txt;
    var person = prompt("calculate the collector current(in mA) with the following values: Ic majority = 40mA, Ic minority = 0.3mA");
    if (person == "40") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[3][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[3][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[3][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[3][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[4][0] && marginTop()==froms[4][1]){
    //idhar extra hai element 5 ladder 4
    //question 2 R
    var txt;
    var person = prompt("BJT works as an amplifier when Base-Emitter is in (forward bias/reverse bias)?");
    if (person == "forward bias") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[4][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[4][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[4][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[4][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[5][0] && marginTop()==froms[5][1]){
    //idhar extra hai element 6 ladder 5
    //question 3 R
    var txt;
    var person = prompt("Where is base terminal placed in BJT(center/right/left)?");
    if ( person == "center") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[5][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[5][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[5][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[5][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[6][0] && marginTop()==froms[6][1]){
    //idhar extra hai element 7 snake 2
    //42
    var txt;
    var person = prompt("on applying KCL to the transistor, find the value for collector current(in units), given base current = 30 unit, emitter current = 40 units");
    if (person == "10") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[6][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[6][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[6][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[6][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
} 
if(marginLeft()==froms[7][0] && marginTop()==froms[7][1]){
    //idhar extra hai element 8 ladder 6
    //question 5 R
    var txt;
    var person = prompt("Does the DC load line have saturation,active,cut-off regions (yes/no)?");
    if ( person == "yes") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[7][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[7][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[7][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[7][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[8][0] && marginTop()==froms[8][1]){
    //idhar extra hai element 9 snake 3
    //34
    var txt;
    var person = prompt("does the emitter-base region matter in the cutoff region(yes/no)?");
    if ( person == "no") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[8][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[8][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[8][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[8][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[9][0] && marginTop()==froms[9][1]){
    //idhar extra hai element 10 ladder 7
    //question 13 U
    var txt;
    var person = prompt("The free flow of majority carriers indicates the transistor is in ____ region");
    if ( person == "saturation") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[9][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[9][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[9][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[9][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}  
if(marginLeft()==froms[10][0] && marginTop()==froms[10][1]){
    //idhar extra hai element 11 ladder 8
    //question 17 U
    var txt;
    var person = prompt("The unit of current amplification factor is?");
    if (( person == "unitless" ) || (person =="no units")) {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[10][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[10][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[10][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[10][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
} 
if(marginLeft()==froms[11][0] && marginTop()==froms[11][1]){
    //idhar extra hai element 12 ladder 9
    //29 A
    var txt;
    var person = prompt("For saturation region, does VCE increase or decrease with IC?");
    if ( person == "increase") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[11][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[11][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[11][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[11][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[12][0] && marginTop()==froms[12][1]){
    //idhar extra hai element 13 snake 4
    //27
    var txt;
    var person = prompt("find the value of beta if, the collector current and base current of a CE configured BJT are 8.4mA and 16.8micro ampere.");
    if ( person == "500") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[12][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[12][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[12][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[12][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[13][0] && marginTop()==froms[13][1]){
    //idhar extra hai element 14 ladder 10
    //31 AN
    var txt;
    var person = prompt("What is the current ICO - IC called?");
    if ((person == "leakage current") || (person ="leakage")) {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${tos[13][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${tos[13][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${froms[13][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${froms[13][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[14][0] && marginTop()==froms[14][1]){
    //idhar extra hai element 15 snake 5
    //26
    var txt;
    var person = prompt("solve for the collector current(in units) if the base current is given as 30 units.");
    if (person == "3000") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[14][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[14][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[14][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[14][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[15][0] && marginTop()==froms[15][1]){
    //idhar extra hai element 16 snake 6
    //24
    var txt;
    var person = prompt("the collector current and base current of a CE configured BJT are 3.26mA and 20.42 microAmpere. Find the current amplification factor.");
    if ( person == "160") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[15][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[15][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[15][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[15][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
if(marginLeft()==froms[16][0] && marginTop()==froms[16][1]){
    //idhar extra hai element 17 snake 7
    //20
    var txt;
    var person = prompt("solve for Ic(in mA), for the cutoff region, if base current=40mA, emitter current=50mA");
    if ( person == "0") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[16][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[16][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[16][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[16][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
// ekdam last wala snake bacha hia
if(marginLeft()==froms[17][0] && marginTop()==froms[17][1]){
    //idhar extra hai element 18 snake 7
    //20
    var txt;
    var person = prompt("given alpha: 0.5, what is beta?");
    if ( person == "1") {  
        //idhar tak
document.querySelector(`#${turn}`).style.marginLeft=`${froms[17][0]}vmin`
document.querySelector(`#${turn}`).style.marginTop=`${froms[17][1]}vmin`
await new Promise(resolve =>setTimeout(resolve,400))
break}
else{
    document.querySelector(`#${turn}`).style.marginLeft=`${tos[17][0]}vmin`
        document.querySelector(`#${turn}`).style.marginTop=`${tos[17][1]}vmin`
        await new Promise(resolve =>setTimeout(resolve,400))
        break
    }
//yaha ek bracket extra hai if ke liye upar wala
}
 

} 

resolve()
    
})
}

function move(direction){
    return new Promise(async(resolve,reject)=>{
  
    if(direction=='up'){
        
        
        document.querySelector(`#${turn}`).style.marginTop = String(marginTop()-9.8)+ 'vmin'
        new Audio('https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/move.mp3?raw=true').play()
    }
    else if(direction =='right'){
        document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft()+9.8)+ 'vmin'
        //https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/move.mp3?raw=true
        new Audio('https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/move.mp3?raw=true').play()
    }
    else if(direction == 'left'){
        document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft()-9.8)+ 'vmin'
        new Audio('https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/move.mp3?raw=true').play()
    }
    await new Promise(resolve => setTimeout(resolve,400))
    resolve()
})
}
function getDirection(){
    let direction  
    if((marginLeft()==88.2 && ((((marginTop()*10)%(-19.6*10))/10)==0)) || (marginLeft()==0 && ((((marginTop()*10)%(-19.6*10))/10)!=0))){
        direction ='up'
    }
    else if((((marginTop()*10)%(-19.6*10))/10)==0){
        direction = 'right'
    }
    else{
        direction = 'left'
    }
    return direction
}
function marginLeft(){
    return Number(document.querySelector(`#${turn}`).style.marginLeft.split('v')[0])
}
function marginTop(){
    return Number(document.querySelector(`#${turn}`).style.marginTop.split('v')[0])
}
function roll(){
    
    return new Promise(async(resolve,reject)=>{
    let diceNum = Math.floor(Math.random() *6) +1
    new Audio('https://github.com/M-AdilAhmad/snakes-and-ladders-game-media/blob/main/diceRoll.mp3?raw=true').play()
    let values = [[0,-360],[-180,-360],[-180,270],[0,-90],[270,180],[90,90]]
    document.querySelector('#cube_inner').style.transform = 'rotateX(360deg) rotateY(360deg)'
    await new Promise(resolve => setTimeout(resolve,750))
    document.querySelector('#cube_inner').style.transform = `rotateX(${values[diceNum-1][0]}deg) rotateY(${values[diceNum-1][1]}deg)`
    await new Promise(resolve => setTimeout(resolve,750))
    resolve(diceNum)
    })
}
