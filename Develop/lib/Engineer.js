const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }
getRole() {
    return "Engineer"
  }
getGithub() {
    return this.github
}


cardTemplate(){
return `<div class="col-4">
<div class="card shadow p-3 mb-5" style="width: 18rem;">
  <div class="card-body bg-warning">
    <h5 class="card-title person-name">${this.name}</h5>
    <p class="card-text person-title"><i class="fas fa-glasses"></i> Engineer</p>  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item person-id">ID: ${this.id}</li>
    <li class="list-group-item person-email">Email: ${this.email}</li>
    <li class="list-group-item person-variable">GitHub Username: ${this.github}</li>
  </ul>
</div>
</div>`}
};

module.exports = Engineer;