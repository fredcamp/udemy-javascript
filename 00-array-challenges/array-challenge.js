let uid = 1

const students = [
  {
    id: uid++,
    name: 'peter',
    score: 80,
    favoriteSubject: 'math',
  },
  {
    id: uid++,
    name: 'bob',
    score: 83,
    favoriteSubject: 'english',
  },
  {
    id: uid++,
    name: 'anna',
    score: 94,
    favoriteSubject: 'history',
  },
  {
    id: uid++,
    name: 'bobo',
    score: 75,
    favoriteSubject: 'math',
  },
  {
    id: uid++,
    name: 'mike',
    score: 87,
    favoriteSubject: 'math',
  },
]

const updatedStudents = students.map(student => {
  student.role = 'student'
  return student
})

const highScores = students.filter(student => {
  return student.score >= 80
})

const averageScore =
  students.reduce((acc, curr) => {
    return acc + curr.score
  }, 0) / students.length

console.log(students)

const favoriteSubjects = students.reduce((acc, curr) => {
  const { favoriteSubject } = curr

  if (!acc[favoriteSubject]) {
    acc[favoriteSubject] = 0
  }

  acc[favoriteSubject]++
  return acc
}, {})

console.log(favoriteSubjects)
