import { CreateUser } from "./createUser.js";

export class Calculator {
    user;
    taxRate;
    constructor() {
        this.user = new CreateUser();
        this.taxRate = 0;
        this.calcSalary();
    }
    calcPensionValue() {
        return this.user.monthlySalary * (this.user.percentageForPension / 100);
    }
    calcTrainingFundValue() {
        return this.user.monthlySalary * (this.user.percentageForTrainingFund / 100);
    }
    calcTaxValue() {
        if (this.user.monthlySalary <= 6790) {
            this.taxRate = 10;
            return this.user.monthlySalary * 0.1;
        } else if (this.user.monthlySalary <= 9730) {
            this.taxRate = 14;
            return this.user.monthlySalary * 0.14;
        } else if (this.user.monthlySalary <= 15620) {
            this.taxRate = 20;
            return this.user.monthlySalary * 0.2;
        } else if (this.user.monthlySalary <= 21710) {
            this.taxRate = 31;
            return this.user.monthlySalary * 0.31;
        } else if (this.user.monthlySalary <= 45180) {
            this.taxRate = 35;
            return this.user.monthlySalary * 0.35;
        } else if (this.user.monthlySalary <= 58190) {
            this.taxRate = 47;
            return this.user.monthlySalary * 0.47;
        } else if (this.user.monthlySalary > 58190) {
            this.taxRate = 50;
            return this.user.monthlySalary * 0.5;
        }
    }
    calcSalary() {
        document.getElementById('broto').innerText += ` ${this.user.monthlySalary}`;
        document.getElementById('pensionPercentage').innerText += ` ${this.user.percentageForPension}`;
        document.getElementById('pensionValue').innerText += ` ${this.calcPensionValue()}`;
        document.getElementById('trainingFundPercentage').innerText += ` ${this.user.percentageForTrainingFund}`;
        document.getElementById('trainingFundValue').innerText += ` ${this.calcTrainingFundValue()}`;
        document.getElementById('taxValue').innerText += ` ${this.calcTaxValue()}`;
        document.getElementById('taxPercentage').innerText += ` ${this.taxRate}`;
        let salary = this.user.monthlySalary - this.calcPensionValue() - this.calcTrainingFundValue() - this.calcTaxValue();
        document.getElementById('user').innerText = `${this.user.firstName + ' ' + this.user.lastName + '  '}`
        document.getElementById('netoValue').innerText = salary.toString();
    }
    resetUser() {
        document.getElementById('broto').innerText = `שכר חודשי ברוטו:`;
        document.getElementById('pensionPercentage').innerText = `אחוז`;
        document.getElementById('pensionValue').innerText = `ערך`;
        document.getElementById('trainingFundPercentage').innerText = `אחוז`;
        document.getElementById('trainingFundValue').innerText = `ערך`;
        document.getElementById('taxValue').innerText = `ערך`;
        document.getElementById('taxPercentage').innerText = `אחוז`;
        document.getElementById('user').innerText = ``
        document.getElementById('netoValue').innerText = '';
    }
}





