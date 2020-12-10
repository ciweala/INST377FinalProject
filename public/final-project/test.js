const endpoint = 'https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json';


function findMatches(wordToMatch, allcourses) {
  // trying to match the GenEd req to 
  
  return allcourses.filter((course) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return course.name.match(regex);
  });
}

async function mainThread(){
  const data = await fetch(endpoint);
  const blob = await data.json();
  console.log('data from endpoint', blob);
  const textinput = document.querySelector('.input');
  const searchform = document.querySelector('.search');
  searchform.addEventListener('submit', (event)=>{
    event.preventDefault();

  })
  textinput.addEventListener('change', (event)=>{
    event.preventDefault();
    const val = event.target.value;
    console.log(val);
    const matches = findMatches(val, blob);
    console.table(matches);
    
    const html = matches.map(value => {
      const courseid = value.course_id; 
      const name = value.name;
      const semester = value.semester;
      const description = value.description;
      const totalseats = value.seats;
      const openseats = value.open_seats;
      const geneds = value.gen_ed;
      return `
        <div class = "box is-ceneterd">
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
              Total Seats: ${totalseats}
              <br>
              Open Seats: ${openseats}
              <br>
              <br>
            </ul>
          </div>
        </div>
      `;
    }).join('');
    box.innerHTML = html;
  })
}
// const searchInput = document.querySelector('.search');
const box = document.querySelector('.box')

window.onload = mainThread;
