const Employee = require("../lib/Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
getRole() {
    return "Intern"
      
  }
getSchool(){
    return this.school
}

cardTemplate(){
    return `<div class="col-4">
    <div class="card shadow p-3 mb-5" style="width: 18rem;">
    <div class="card-body bg-warning">
    <h5 class="card-title person-name">${this.name}</h5>
    <p class="card-text person-title"><i class="fas fa-graduation-cap"></i> Intern</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item person-id">ID: ${this.id}</li>
    <li class="list-group-item person-email">Email: ${this.email}</li>
    <li class="list-group-item person-variable">School: ${this.school}</li>
    </ul>
    </div>
    </div>`}
    
};
module.exports = Intern;