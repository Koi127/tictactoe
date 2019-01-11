/*global $*/
let player;
let count = 0;
let array;

$(document).ready(function(){
    array=$(".arr");
    function performLogic(button, tile){
        console.log(count);
        $(this.button).hide();
        if(count%2===0){
            player="O";
            $(tile).text(player);
        }else if(count%2!=0){
            player="X";
            $(tile).text(player);
        }
        
        if(array[0].innerText===array[3].innerText && array[0].innerText===array[6].innerText){
            if(array[0].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[0].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[1].innerText===array[4].innerText && array[1].innerText===array[7].innerText){
            if(array[1].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[1].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[2].innerText===array[5].innerText && array[2].innerText()===array[8].innerText){
            if(array[2].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[2].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[0].innerText===array[1].innerText && array[0].innerText===array[2].innerText){
            if(array[0].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[0].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[3].innerText===array[4].innerText && array[3].innerText===array[5].innerText){
            if(array[3].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[3].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[6].innerText===array[7].innerText && array[6].innerText===array[8].innerText){
            if(array[6].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[6].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[0].innerText===array[4].innerText && array[0].innerText===array[8].innerText){
            if(array[0].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[0].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        if(array[2].innerText===array[4].innerText && array[2].innerText===array[6].innerText){
            if(array[2].innerText==="O"){
                $("#result").text("Player O won");
            }
            else if(array[2].innerText==="X"){
                $("#result").text("Player X won");
            }
        }
        
        
        
        // if(count==9){
        //     for(int i =0; i<9;i++){
                
        //     }
        // }
    }
    
    $("#button1").click( function() {
        count++;
    
        performLogic("#button2","#tile1");
    });
    
    $("#button2").click( function() {
        count++;
        performLogic("#button2","#tile2");
    });
    
    $("#button3").click( function() {
        count++;
        performLogic("#button3","#tile3");
    });
    
    $("#button4").click( function() {
        count++;
        performLogic("#button4","#tile4");
    });
    
    $("#button5").click( function() {
        count++;
        performLogic("#button5","#tile5");
    });
    
    $("#button6").click( function() {
        count++;
        performLogic("#button6","#tile6");
    });
    
    $("#button7").click( function() {
        count++;
        performLogic("#button7","#tile7");
    });
    
    $("#button8").click( function() {
        count++;
        performLogic("#button8","#tile8");
        
    });
    
    $("#button9").click( function() {
        count++;
        performLogic("#button9","#tile9");
    });
});