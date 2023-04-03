//https://www.youtube.com/watch?v=1hpc70_OoAg&t=2428s
//IMPORTAR Y EXPORTAR MODULOS

import axios from 'axios';

const apiKey= '714442dd51msh83097c2755da9a1p1efd32jsnecc4f48508ab'
const apiHost= 'livescore6.p.rapidapi.com'
async function getListByDate(date) {
    try {
      //console.log(date)
      const { data } = await axios.request({
        method: 'GET',
        url: `https://${this.apiHost}/matches/v2/list-by-date`,
        params: { Category: 'soccer', Date: date, Timezone: '-7' },
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.apiHost}
      })
      //console.log(data.Stages);
      return data.Stages
    } catch (error) {
      console.error(error)
    }
  }

  
  async function getListLive(apiKey, apiHost) {
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

  async function getNewsList(apiKey, apiHost) {
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
 
  
  async function getTableLeague(apiKey, apiHost)  {
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
    getTableLeague,
    apiKey,
    apiHost
  }
