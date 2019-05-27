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

const dmytro = new Person('Dmytro', '11.26.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
