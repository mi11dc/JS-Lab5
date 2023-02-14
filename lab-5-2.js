//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Extra Challenge!

let bankCustomer = {
    lastName: "Shah",
    branchNumber: "ABC",
    accountBalance: "500.25", 
    interestRate:  "1.03",
    multipleAccounts: false,

    makeDeposit(depositAmount) {
        bankCustomer.accountBalance = (parseFloat(bankCustomer.accountBalance) + depositAmount).toFixed(2);
        return `Thank you, your current balance is now $${ bankCustomer.accountBalance }.`;
    },
    makeWithdrawal(withdrawAmount) {
        bankCustomer.accountBalance = (parseFloat(bankCustomer.accountBalance) - withdrawAmount).toFixed(2);
        return `Thank you, your current balance is now $${ bankCustomer.accountBalance }.`;
    },
    addInterest() {
        let newInterestRate = parseFloat(bankCustomer.interestRate);
        newInterestRate = (bankCustomer.multipleAccounts === true) ? (newInterestRate + 0.005) : newInterestRate ;
        bankCustomer.accountBalance = (parseFloat(bankCustomer.accountBalance) * newInterestRate).toFixed(2);
        return `Thank you, your current balance is now $${ bankCustomer.accountBalance }.`;
    }
}

console.log(`My starting balance is $${bankCustomer.accountBalance}.`);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());