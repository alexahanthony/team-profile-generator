const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }
getRole() {
    return "Manager"
  }
getOfficeNumber() {
    return this.officeNumber;
  }
  
  cardTemplate(){
    return `<div class="col-4">
    <div class="card shadow p-3 mb-5" style="width: 18rem;">
    <div class="card-body bg-warning">
    <h5 class="card-title person-name">${this.name}</h5>
    <p class="card-text person-title"><i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item person-id">ID: ${this.id}</li>
    <li class="list-group-item person-email">Email: ${this.email}</li>
    <li class="list-group-item person-variable">Office Number: ${this.officeNumber}</li>
    </ul>
    </div>
    </div>`}
    
  };
module.exports = Manager;