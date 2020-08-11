const students = [
    {id: 21, name:'Tom Hanks'},
    {id: 31, name: 'Jimmy Hendrics'},
    {id:41, name:'Jason Statham'},
    {id:71, name: 'Jason Derulo'}
];
 const names = students.map(s=>s.name);
 const ids = students.map(s => s.id);
 const bigger = students.filter(s=> s.id>40);
const biggerOne = students.find(s => s.id>40);
  console.log(biggerOne);
  console.log(bigger);