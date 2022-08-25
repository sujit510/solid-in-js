// Folllowing violates the principle of single responsibility

class Employee {
  private id: string;
  private name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  calculateSalary() {
    // Calculate salary
  }
  save() {
    // Save to DB
  }
}
