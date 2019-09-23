import { Galactic } from './galactic.js';
import $ from 'jquery';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#user-age-form').submit(function(event) {
    event.preventDefault();
  });
});
