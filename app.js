$(".questions1").hide();
$("h1,h4,h3,h2").hide();
$("#reset").hide();
// intial things to create
//   - correct answers
const correctAnswers = [3];
let totalCorrect = 0;
let totalIncorrect = 0;
var intervalId;
var number = 25;

// user presses button to start quiz
$("#steer").click(function() {
  $(".questions1").show();
  $("#start-div").hide();
  $("#end-div").hide();
  $("h2").show();
  run();

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#clock").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();

      $("h3").show();
      $("#correctans").text(totalCorrect);
      $("#incorrectans").text(totalIncorrect);
      $(".questions1").hide();
      $("#start-div").show();
      $("#end-div").show();
      $("h2").hide();
      $("#steer").hide();
      $("#reset").show();
    }
  }

  //  The stop function
  function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
});

$("#reset").onclick(function() {
  $("#reset")[0].reset();
});

// Quiz page unhides
// Timer starts
// User presses submit after they have completed quiz
$("#submit").click(function() {
  const q1Answer = parseInt($("input[name=question-one]:checked").val());
  console.log(q1Answer);
  if (q1Answer === corr1) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q2Answer = parseInt($("input[name=question-two]:checked").val());
  console.log(q2Answer);
  if (q2Answer === corr2) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q3Answer = parseInt($("input[name=question-three]:checked").val());
  console.log(q3Answer);
  if (q3Answer === corr3) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q4Answer = parseInt($("input[name=question-four]:checked").val());
  console.log(q4Answer);
  if (q4Answer === corr4) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q5Answer = parseInt($("input[name=question-five]:checked").val());
  console.log(q5Answer);
  if (q5Answer === corr5) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q6Answer = parseInt($("input[name=question-six]:checked").val());
  console.log(q6Answer);
  if (q6Answer === corr6) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q7Answer = parseInt($("input[name=question-seven]:checked").val());
  console.log(q7Answer);
  if (q7Answer === corr7) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q8Answer = parseInt($("input[name=question-eight]:checked").val());
  console.log(q8Answer);
  if (q8Answer === corr8) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q9Answer = parseInt($("input[name=question-nine]:checked").val());
  console.log(q9Answer);
  if (q9Answer === corr9) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }
  const q10Answer = parseInt($("input[name=question-ten]:checked").val());
  console.log(q10Answer);
  if (q10Answer === corr10) {
    totalCorrect++;
    console.log("correct");
  } else {
    totalIncorrect++;
    console.log("incorrect");
  }

  $("h3").show();
  $("#correctans").text(totalCorrect);
  $("#incorrectans").text(totalIncorrect);
  $(".questions1").hide();
  $("#start-div").show();
  $("#end-div").show();
  $("h2").hide();

  // console.log(totalCorrrect, totalIncorrect);
});
// Timer stops
// user slections are captured
// Compare answers with correct answers
const corr1 = 3;
const corr2 = 2;
const corr3 = 4;
const corr4 = 4;
const corr5 = 3;
const corr6 = 4;
const corr7 = 3;
const corr8 = 2;
const corr9 = 1;
const corr10 = 3;
