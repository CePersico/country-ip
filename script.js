const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a37d3c3119msh87797708c1631d0p10c6a5jsn63c3f9aa0a6f',
    'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
};


const fetchIpInfo =  ip => {
 return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, OPTIONS)
    .then(res  => res.json())
    .catch(err => console.error(err) ) 

}


const selector = s => document.querySelector(s);

const form = selector('#form');
const input = selector('#input');
const submit = selector('#submit');
const results = selector('#results');

// const form = document.querySelector('#form');
// const input = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const results = document.querySelector('#results');

form.addEventListener('submit', async(e) => {
   e.preventDefault();

   const {value} = input;

   if (!value) return;

   submit.setAttribute('disabled', '');
   submit.setAttribute('aria-busy', "true");

   const ipInfo = await fetchIpInfo(value);

   const country = ipInfo.country;
   

   if (ipInfo) {
      results.innerHTML = JSON.stringify(country, null, 2);

   }

   submit.removeAttribute('disabled');
   submit.removeAttribute('aria-busy');

})
 