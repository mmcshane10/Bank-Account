//BIZ LOGIC ----------------------------------
var balance = 0;




//UI LOGIC -----------------------------------

$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var userName = $("input#user-name").val();
    var intitialDeposit = parseInt($("input#initial-deposit").val(), 10)

    balance += intitialDeposit;


  });

  $("form#new-transaction").submit(function(event) {
    event.preventDefault();
    var newDeposit = parseInt($("input#new-deposit").val(), 10);
    var newWithdrawal = parseInt($("input#new-withdrawal").val(), 10);
  });

  $("#current-balance").append("$" + balance.toFixed(2));
});
