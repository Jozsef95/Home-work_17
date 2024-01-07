function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = Array(25).fill(null);
  
    this.calculateAge = function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    };
  
    this.calculateAverageGrade = function () {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    };
  
    this.present = function () {
      this.updateAttendance(true);
    };
  
    this.absent = function () {
      this.updateAttendance(false);
    };
  
    this.updateAttendance = function (status) {
      const emptySlotIndex = this.attendance.indexOf(null);
      if (emptySlotIndex !== -1) {
        this.attendance[emptySlotIndex] = status;
      } else {
        console.log("Attendance array is full.");
      }
    };
  
    this.summary = function () {
      const averageGrade = this.calculateAverageGrade();
      const attendanceRatio =
        this.attendance.filter((status) => status === true).length / 25;
  
      if (averageGrade > 90 && attendanceRatio > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRatio > 0.9) {
        return "Добре, але можна краще.";
      } else {
        return "Не добре!";
      }
    };
  }
  
  // Пример использования:
  const student1 = new Student("Іван", "Кочук", 1995);
  const student2 = new Student("Влад", "Кученко", 1998);
  
  student1.grades = [95, 88, 92];
  student2.grades = [75, 80, 85];
  
  student1.present();
  student1.present();
  student1.absent();
  
  console.log(student1.calculateAge()); // Output: (current year) - 1995
  console.log(student1.summary()); // Output: "Добре, але можна краще."
  
  console.log(student2.calculateAge()); // Output: (current year) - 1998
  console.log(student2.summary()); // Output: "Не добре!"