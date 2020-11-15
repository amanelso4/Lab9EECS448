<?php

$correct = array("5", "Sunflower", "Silver", "Flute", "Smith");

$q1answer = $_POST["question1"];
$q2answer = $_POST["question2"];
$q3answer = $_POST["question3"];
$q4answer = $_POST["question4"];
$q5answer = $_POST["question5"];

echo "How many fight songs does KU have?<br>";
echo "You answered: " . $q1answer . "<br>";
echo "Correct answer: " . $correct[0] . "<br><br>";

echo "What type of flower is in the KU Marching Jayhawks iconic pregame show?";
echo "You answered: " . $q2answer . "<br>";
echo "Correct answer: " . $correct[1] . "<br><br>";

echo "Which chord represents a junior on the Marching Jayhawks uniform?<br>";
echo "You answered: " . $q3answer . "<br>";
echo "Correct answer: " . $correct[2] . "<br><br>";

echo "What instrument is not in the Marching Jayhawks band?<br>";
echo "You answered: " . $q4answer . "<br>";
echo "Correct answer: " . $correct[3] . "<br><br>";

echo "Who is the current director of the Marching Jayhawks?<br>";
echo "You answered: " . $q5answer . "<br>";
echo "Correct answer: " . $correct[4] . "<br><br>";

$questions = 0;
$questions = count($correct);
$correctAnswers = 0;

if($q1answer == $correct[0]) {
	$correctAnswers ++;
}
if($q2answer == $correct[1]) {
	$correctAnswers ++;
}
if($q3answer == $correct[2]) {
	$correctAnswers ++;
}
if($q4answer == $correct[3]) {
	$correctAnswers ++;
}
if($q5answer == $correct[4]) {
	$correctAnswers ++;
}

echo "You answered " . $correctAnswers . " questions correctly.<br>";
echo "That is " . round($correctAnswers*100/$questions) . "%.<br>";

?>