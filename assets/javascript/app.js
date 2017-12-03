//Start game using start game button on first page
//Time Remaining starts after button clicked. And we move to Questions Page120s
//if time remaining hits 0 move to reults page
//check answers-- unanswered, correct, and incorrect 
//Hitting the submit button on questions page submits users answers. move to results page
//results page has unaswered, correct, and incorrect counter
//play again button restarts the game and moves user back to first page 

$(document).ready(function() {
    // Timer var and function 

    function startGame() {
        $('#start-button').on('click', function() {
            var count = 30;
            var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

            function timer() {
                count = count - 1;
                if (count <= 0) {
                    clearInterval(counter);
                    return;
                }
                $('#timer').html('Time Remaining: ' + count);
            }
        })
    }

   	 
    startGame();

});