function Person(name, date, amount) {
    let transactions = [];
    this.name = name;
    this.date = date;
    this.amount = amount;
    const initial = `Initial: ${this.amount}`;
    transactions = [transactions, initial];

    this.getInfo = function() {
        const today = new Date();
        const birthDate = new Date(this.date);
        this.age = today.getFullYear() - birthDate.getFullYear();
        console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
    };

    this.addMoney = function(sum, title) {
        this.amount += sum;
        const transaction = `${title}: ${sum}`;
        transactions = [...transactions, transaction];
    };

    this.withdrawMoney = function(sum, title) {
        this.amount -= sum;
        const transaction = `${title}: ${-sum}`;
        transactions = [...transactions, transaction];
    };

    this.getAccountHistory = function() {
        console.log(transactions);
    }
}
