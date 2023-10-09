studyProgram = [
    {subject: 'English', teacher: {firstName: 'Antony', lastName: 'Mems'}},
    {subject: 'Mathematics'},
    {subject: 'Science', teacher: {firstName: 'Mark', lastName: 'Kamau'}},
  ]
  
  studyProgram.forEach((program)=>{
    console.log(program.subject) 
  })
  //optional chaining, code stops execution if value is not found
  studyProgram.forEach((program)=>{
    console.log(program.teacher?.firstName) 
  })
  //'Antony'
  //undefined - it skips this and goes to the next
  //'Mark'
  
  //Question - diff between map and forEach