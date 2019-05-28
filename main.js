function Person(name, date, amount) {
    this.transactions = [];
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.initial = `Initial: ${this.amount}`;
    this.transactions = [this.transactions, this.initial];

    this.getInfo = function() {
        const today = new Date();
        const birthDate = new Date(this.date);
        this.age = today.getFullYear() - birthDate.getFullYear();
        console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
    };

    this.addMoney = function(sum, title) {
        this.amount += sum;
        const transaction = `${title}: ${sum}`;
        this.transactions = [...this.transactions, transaction];
    };

    this.withdrawMoney = function(sum, title) {
        this.amount -= sum;
        const transaction = `${title}: ${-sum}`;
        this.transactions = [...this.transactions, transaction];
    };

    this.getAccountHistory = function() {
        console.log(this.transactions);
    }
}
