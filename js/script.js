let player1 = "O";
let player2 = "X";
let count = 0;

function performLogic(button, tile){
    $(button).hide();
    if(count%2===0){
        $(tile).text("O");
    }else{
        $(tile).text("X");
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
    performLogic("#button8","#tile8");
    count++;
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
    count++;
});
