


function findMatches(wordToMatch, allcourses) {
  // trying to match the GenEd req 
  return allcourses.filter(course => {
    const regex = new RegExp(wordToMatch, 'gi');
    return course.dept_id.match(regex) || course.name.match(regex) || course.department.match(regex) || course.course_id.match(regex)
  });
}
/*
async function mainThread(){
  const data = await fetch(endpoint);
  const blob = await data.json();
  console.log('data from endpoint', blob);
  const textinput = document.querySelector('.input');
  const searchform = document.querySelector('.search');
  searchform.addEventListener('submit', (event)=>{
    event.preventDefault();

  })
*/
  function displayMatches(data){
    const matches = findMatches(this.value, data);
    const html = matches.map(value => {
      const courseid = value.course_id; 
      const name = value.name;
      const semester = value.semester;
      const description = value.description;
      const geneds = value.gen_ed;
      const section = value.sections.map(value2 => {
        const sectionid = value2.section_id
        const openseats = value2.open_seats;
        const totalseats = value2.seats;
        const prof = value2.instructors;
        return `
          ${sectionid}
          <strong> Open Seats: ${openseats} </strong>
          Total Seats: ${totalseats}    
          Professor(s): ${prof}
          <br>   
          `
      }).join('');
      return `
        <div class = "hero">
          <div class = "content is-centered">
           <ul class= "is-centered">
              Course ID: ${courseid}
              <br>
              <strong>${name}</strong>
              <br>
              GenEd(s): ${geneds}
              <br>
              Semester: ${semester}
              <br>
              ${description}
              <br>
              Sections: ${section}
              </ul>
              <br>
            </ul>
          </div>
        </div>
      `;
    }).join('');
    box.innerHTML = html;
  }

 /*
  textinput.addEventListener('change', (event)=>{
    event.preventDefault();
    const val = event.target.value;
    console.log(val);
    const matches = findMatches(val, blob);
    console.table(matches);
    
    
  })
}

*/
// const searchInput = document.querySelector('.search');
const box = document.querySelector('.box')
const textinput = document.querySelector('.input');
const searchform = document.querySelector('.search');

//window.onload = mainThread;

searchform.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dat = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dat)
  })
  .then((fromServer) => fromServer.json())
  .then((jsonFromServer) => displayMatches(jsonFromServer))
  .catch((err) => {
    console.log(err);
  })
})
