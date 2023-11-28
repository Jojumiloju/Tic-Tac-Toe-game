var flag = 0;
function cell1(){
    if(flag == 0){
        document.getElementById('c1').value = "X"
        document.getElementById('c1').disabled = true;
        flag = 1;
        
    }else{
        document.getElementById('c1').value = 'O'
        document.getElementById('c1').disabled = true;
        flag = 0;
    }
    check()
}
function cell2(){
    if(flag == 0){
        document.getElementById('c2').value = 'X'
        document.getElementById('c2').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c2').value = 'O'
        document.getElementById('c2').disabled = true;
        flag = 0;
    }
    check()
}
function cell3(){
    if(flag == 0){
        document.getElementById('c3').value = 'X'
        document.getElementById('c3').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c3').value = 'O'
        document.getElementById('c3').disabled = true;
        flag = 0;
    }
    check()
}
function cell4(){
    if(flag == 0){
        document.getElementById('c4').value = 'X'
        document.getElementById('c4').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c4').value = 'O'
        document.getElementById('c4').disabled = true;
        flag = 0;
    }
    check()
}
function cell5(){
    if(flag == 0){
        document.getElementById('c5').value = 'X'
        document.getElementById('c5').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c5').value = 'O'
        document.getElementById('c5').disabled = true;
        flag = 0;
    }
    check()
}
function cell6(){
    if(flag == 0){
        document.getElementById('c6').value = 'X'
        document.getElementById('c6').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c6').value = 'O'
        document.getElementById('c6').disabled = true;
        flag = 0;
    }
    check()
}
function cell7(){
    if(flag == 0){
        document.getElementById('c7').value = 'X'
        document.getElementById('c7').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c7').value = 'O'
        document.getElementById('c7').disabled = true;
        flag = 0;
    }
    check()
}
function cell8(){
    if(flag == 0){
        document.getElementById('c8').value = 'X'
        document.getElementById('c8').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c8').value = 'O'
        document.getElementById('c8').disabled = true;
        flag = 0;
    }
    check()
}
function cell9(){
    if(flag == 0){
        document.getElementById('c9').value = 'X'
        document.getElementById('c9').disabled = true;
        flag = 1;
    }else{
        document.getElementById('c9').value = 'O'
        document.getElementById('c9').disabled = true;
        flag = 0;
    }
    check()
}




function reset(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '0';
}

function check(){
    var c1, c2, c3, c4, c5, c6, c7, c8, c9;
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;
    c4 = document.getElementById("c4").value;
    c5 = document.getElementById("c5").value;
    c6 = document.getElementById("c6").value;
    c7 = document.getElementById("c7").value;
    c8 = document.getElementById("c8").value;
    c9 = document.getElementById("c9").value;

    //Checking if player X is the winner
    if((c1 == 'X') && (c4 == 'X') && (c7 == "X")){
        alert("Player X has won")
        reset()
    }else if((c2 == 'X') && (c5 == 'X') && (c8 == "X")){
        alert("Player X has won")
        reset()
    }else if((c3 == 'X') && (c6 == 'X') && (c9 == "X")){
        alert("Player X has won")
        reset()
    }else if((c1 == 'X') && (c2 == 'X') && (c3 == "X")){
        alert("Player X has won")
        reset()
    }else if((c4 == 'X') && (c5 == 'X') && (c6 == "X")){
        alert("Player X has won")
        reset()
    }else if((c7 == 'X') && (c8 == 'X') && (c9 == "X")){
        alert("Player X has won")
        reset()
    }else if((c1 == 'X') && (c5 == 'X') && (c9 == "X")){
        alert("Player X has won")
        reset()
    }else if((c3 == 'X') && (c5 == 'X') && (c7 == "X")){
        alert("Player X has won")
        reset()
    }else{
        
    }

    //Checking if player O is the winner
    if((c1 == 'O') && (c4 == 'O') && (c7 == "O")){
        alert("Player O has won")
        reset()
    }else if((c2 == 'O') && (c5 == 'O') && (c8 == "O")){
        alert("Player O has won")
        reset()
    }else if((c3 == 'O') && (c6 == 'O') && (c9 == "O")){
        alert("Player O has won")
        reset()
    }else if((c1 == 'O') && (c2 == 'O') && (c3 == "O")){
        alert("Player O has won")
        reset()
    }else if((c4 == 'O') && (c5 == 'O') && (c6 == "O")){
        alert("Player O has won")
        reset()
    }else if((c7 == 'O') && (c8 == 'O') && (c9 == "O")){
        alert("Player O has won")
        reset()
    }else if((c1 == 'O') && (c5 == 'O') && (c9 == "O")){
        alert("Player O has won")
        reset()
    }else if((c3 == 'O') && (c5 == 'O') && (c7 == "O")){
        alert("Player X has won")
        reset()
    }else{
        if((c1 == 'X' || c1 == 'O') && (c2 == 'X' || c2 == 'O') && (c3 == 'X' || c3 == 'O') && (c4 == 'X' || c4 == 'O') && (c5 == 'X' || c5 == 'O') && (c6 == 'X' || c6 == 'O') && (c7 == 'X' || c7 == 'O') && (c8 == 'X' || c8 == 'O') && (c9 == 'X' || c9 == 'O')){
            alert("The game is a draw")
            reset()
        }
    }
}