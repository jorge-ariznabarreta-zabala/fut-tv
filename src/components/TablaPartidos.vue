<template>
    <div>
      <ul>
        <li v-for="match in matches" :key="match.id">{{ match.localTeam }} vs {{ match.visitorTeam }}</li>
      </ul>
    </div>
  </template>
  
  <script>

 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63bb0a0088msh05d5b78a436734bp176171jsn37acd9384485',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-03-19', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  </script>