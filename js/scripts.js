$(document).ready(function() {

  var balance = 0;

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var userName = $("input#user-name").val();
    var intitialDeposit = parseInt($("input#initial-deposit").val(), 10)

    balance += intitialDeposit;

    $("#current-balance").text("$" + balance.toFixed(2));
  });

  $("form#new-transaction").submit(function(event) {
    event.preventDefault();
    var newDeposit = parseInt($("input#new-deposit").val(), 10);
    var newWithdrawal = parseInt($("input#new-withdrawal").val(), 10);
  });

  $("#current-balance").text("$" + balance.toFixed(2));
});
