console.log('👍 JS Connected');

// Scripting

// Data source
const dataSource = "";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( collection  => {
    
    // check-check: is the data good?
    console.log( collection );

    // get container for data
    const dataContainer = document.querySelector(".dataContainer");

    // loop through data
    collection.forEach( record => {
      
      // template
      const template = ``;

      // insert EACH `student` record into container
      dataContainer.insertAdjacentHTML("afterbegin", template);
    });
  });