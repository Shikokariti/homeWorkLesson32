export class CreateUser {
    firstName;
    lastName;
    monthlySalary;
    percentageForPension;
    percentageForTrainingFund;
    constructor() {
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.monthlySalary = document.getElementById('monthlySalary').value;
        this.percentageForPension = document.getElementById('percentageForPension').value;
        this.percentageForTrainingFund = document.getElementById('percentageForTrainingFund').value;
    }
}

