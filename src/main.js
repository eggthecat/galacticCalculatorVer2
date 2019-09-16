// import { pingPong } from './galactic-calculator-ver-2';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
  $('#user-age-form').submit(function(event) {
    event.preventDefault();
    let birthday = $('#birthday').val().toString();
    console.log(age);
    let solution = new universal(birthday);
  });
});
