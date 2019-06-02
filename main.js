function Person(name, date, amount) {
    this.transactions = [];
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.transactions = [this.transactions, `Initial: ${this.amount}`];
}

Person.prototype.getInfo = function() {
    const today = new Date();
    const birthDate = new Date(this.date);
    this.age = today.getFullYear() - birthDate.getFullYear();
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
};

Person.prototype.addMoney = function(sum, title) {
    this.amount += sum;
    const transaction = `${title}: ${sum}`;
    this.transactions.push(transaction);
};

Person.prototype.withdrawMoney = function(sum, title) {
    this.amount -= sum;
    const transaction = `${title}: ${-sum}`;
    this.transactions = [...this.transactions, transaction];
};

Person.prototype.getAccountHistory = function() {
    console.log(this.transactions);
};
