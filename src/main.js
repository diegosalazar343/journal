import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#journal").submit(function(event) {
    event.preventDefault();

    let title = $("input#title").val();
    let body = $("input#body").val();

    let journalEntry = new Journal(title, body);


  });
});
