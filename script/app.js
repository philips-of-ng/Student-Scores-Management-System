const students = [
  { id: 1, name: "Aisha", age: 20, course: "Computer Science", score: 88 },
  { id: 2, name: "Bayo", age: 22, course: "Physics", score: 72 },
  { id: 3, name: "Chinedu", age: 19, course: "Biology", score: 60 },
  { id: 4, name: "Deborah", age: 21, course: "Chemistry", score: 85 },
  { id: 5, name: "Emeka", age: 23, course: "Mathematics", score: 49 },
  { id: 6, name: "Fatima", age: 20, course: "Engineering", score: 95 },
  { id: 7, name: "Gabriel", age: 24, course: "Economics", score: 66 },
  { id: 8, name: "Halima", age: 18, course: "English", score: 58 },
  { id: 9, name: "Ibrahim", age: 22, course: "Accounting", score: 34 },
  { id: 10, name: "Joy", age: 19, course: "Statistics", score: 77 },
  { id: 11, name: "Kemi", age: 21, course: "Computer Science", score: 52 },
  { id: 12, name: "Lukman", age: 23, course: "Physics", score: 41 },
  { id: 13, name: "Mercy", age: 20, course: "Biology", score: 63 },
  { id: 14, name: "Nneka", age: 22, course: "Chemistry", score: 27 },
  { id: 15, name: "Olu", age: 24, course: "Mathematics", score: 90 },
  { id: 16, name: "Precious", age: 18, course: "Engineering", score: 55 },
  { id: 17, name: "Rasaq", age: 25, course: "Economics", score: 48 },
  { id: 18, name: "Sade", age: 20, course: "English", score: 69 },
  { id: 19, name: "Tobi", age: 19, course: "Accounting", score: 31 },
  { id: 20, name: "Uche", age: 23, course: "Statistics", score: 82 }
];

const getGrade = score => {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
};

const displayTable = list => {
  const rows = list.map(s => {
    const grade = getGrade(s.score);
    const gradeClass = grade === "A" ? "grade-A" : (grade === "F" ? "grade-F" : "");
    return `
      <tr class="${gradeClass}">
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.course}</td>
        <td>${s.score}</td>
        <td>${grade}</td>
      </tr>
    `;
  }).join("");
  document.getElementById("output").innerHTML = rows;
};

const showStudents = () => displayTable(students);

const showPassedStudents = () => {
  const passed = students.filter(s => s.score >= 50);
  displayTable(passed);
};

const showFailedStudents = () => {
  const failed = students.filter(s => s.score <= 49)
  displayTable(failed)
}

const showAverage = () => {
  const total = students.reduce((sum, s) => sum + s.score, 0);
  const average = total / students.length;
  document.getElementById("output").innerHTML =
    `<tr><td colspan="6">Average Score: ${average.toFixed(2)}</td></tr>`;
};

const addBonus = () => {
  const bonusList = students.map(s => ({ ...s, score: s.score + 5 }));
  displayTable(bonusList);
};

const logAllStudents = () => {
  console.log("Listing all students:");
  students.forEach(s => {
    console.log(`${s.id} — ${s.name} (${s.course}) : ${s.score} → ${getGrade(s.score)}`);
  });
};

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    if (filter === 'all') showStudents();
    if (filter === 'passed') showPassedStudents();
    if (filter === 'average') showAverage();
    if (filter === 'bonus') addBonus();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
  showStudents();
});

