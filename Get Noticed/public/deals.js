document.getElementById('getDeals').addEventListener('click', getDeals);

function getDeals(){
  fetch('deals.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2 class="mb-4">Weekly deals</h2>';
    data.forEach(function(deal){
      output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">ID: ${deal.id}</li>
          <li class="list-group-item">Day: ${deal.day}</li>
          <li class="list-group-item">Detail: ${deal.detail}</li>
        </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  });
}