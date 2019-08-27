function Account(name, balance) {
  this.name = name;
  this.balance = balance
}


$(document).ready(function() {

  var balance = 0;

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var userName = $("input#user-name").val();
    var intitialDeposit = parseInt($("input#initial-deposit").val(), 10)
    $("input#initial-deposit").val("0");

    var newAccount = new Account(userName, intitialDeposit)

    balance += intitialDeposit;

    $("#current-balance").text("$" + balance.toFixed(2));
  });

  $("form#new-transaction").submit(function(event) {
    event.preventDefault();
    var newDeposit = parseInt($("input#new-deposit").val(), 10);
    var newWithdrawal = parseInt($("input#new-withdrawal").val(), 10);
    $("input#new-deposit").val("0");
    $("input#new-withdrawal").val("0");

    balance = balance + newDeposit - newWithdrawal;

    if (balance < 0) {
      alert("Insufficient funds to make transaction.")
    } else {
      $("#current-balance").text("$" + balance.toFixed(2));
    }

  });

  $("#current-balance").text("$" + balance.toFixed(2));
});
