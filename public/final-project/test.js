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
        <div class = "list-item">
        <li>
          <span class="courseid">Course ID: ${courseid}</span>
          <br>
          <span class="name is-primary"><strong>${name}</strong></span>
          <br>
          <span class ="gened">GenEd(s): ${geneds}</span>
          <br>
          <span class="semester">Semester: ${semester}</span>
          <br>
          <span class="desc">${description}</span>
          <br>
          <span class="totalseats">Total Seats: ${totalseats}</span>
          <br>
          <span class="openseats">Open Seats: ${openseats}</span>
        </li>
        </div>
      `;
    }).join('');
    content.innerHTML = html;
  })
}
// const searchInput = document.querySelector('.search');
const content = document.querySelector('.content')

window.onload = mainThread;
