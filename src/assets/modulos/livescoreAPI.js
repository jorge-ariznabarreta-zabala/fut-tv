//https://www.youtube.com/watch?v=1hpc70_OoAg&t=2428s
//IMPORTAR Y EXPORTAR MODULOS

import axios from 'axios';

const apiKey= '12fb15aa56msh54e342963c87a57p1171a0jsn6e6a33319e80'
const apiHost= 'livescore6.p.rapidapi.com'
async function getListByDate(date) {
    try {
      //console.log(date)
      const { data } = await axios.request({
        method: 'GET',
        url: `https://${apiHost}/matches/v2/list-by-date`,
        params: { Category: 'soccer', Date: date, Timezone: '-7' },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost}
      })
      //console.log(data.Stages);
      return data.Stages
    } catch (error) {
      console.error(error)
    }
  }

  
  async function getListLive() {
    try {
      const { data } = await axios.request({method: 'GET',
      url: `https://${apiHost}/matches/v2/list-live`,
      params: { category: 'soccer', Timezone: '-7' },
      headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost}
      })
      console.log(data.Stages);
      return data.Stages
    } catch (error) {
      console.error(error)
    }
  }

  async function getNewsList() {
    try {
      const { data } = await axios.request({
        url: `https://${apiHost}/news/v2/list`,
        headers: {
            'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost}
        })
        console.log(data.topStories);
      return data.topStories
    } catch (error) {
      console.log(error)
    }
  }
 
  
  async function getTableLeague()  {
    try {
      const { data } = await axios.request({
        url: `https://${apiHost}/leagues/v2/get-table?Category=soccer&Ccd=spain&Scd=laliga-santander`,
        headers: {
            'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost}
        })
        console.log(data.LeagueTable.L[0].Tables[0].team)
        return data.LeagueTable.L[0].Tables[0].team
    } catch (error) {
      console.log(error)
    }
  }

  export default {
    getListByDate,
    getListLive,
    getNewsList,
    getTableLeague
  }
