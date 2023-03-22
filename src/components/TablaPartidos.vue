<template>
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
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