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
  })
}

window.onload = mainThread;
