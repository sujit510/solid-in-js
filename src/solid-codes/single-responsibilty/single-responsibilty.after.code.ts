// Folllowing is inline with principle of single responsibility

class EmployeeData {
  private id: string;
  private name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class SalaryCalculation {
  calculateSalary(empData: EmployeeData) {
    // Calculate salary
  }
}

class DBService {
  save(empData: EmployeeData) {
    // Save to DB
  }
}
