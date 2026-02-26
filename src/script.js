// ✅ Check-Check: Is JS Connected?
console.log('👍 JS Connected');

// ✅ Check-Check: Is data source accessible?
const dataSource = "";

// Get data
fetch( dataSource )
  .then( response  => response.json())
  .then( collection  => {
    
    // ✅ Check-Check: Is the data good?
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