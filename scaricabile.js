const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

function cercaLavori (location, title) {
  let result= []
  let count= 0
  for (let j of jobs){
    //console.log (j.title)
    //console.log (j.location)
    if (j.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && j.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())){
      result.push (j)
      count += 1
  }
}
   //console.log (result)
   //console.log (count)
   return {result, count}
}




//appendChild DA FARE!!

//prendo valore dell'utente
//il valore mi viene restituito al click del pulsante
//faccio funzione legata al pulsante
//devo "contare" i lavori creando un altro elemento

function aggiungiLavori(){
  let location= document.getElementById ("location").value
  let title= document.getElementById ("role").value
  let lavoriFiltrati = cercaLavori(location,title)
  let contenitore = document.getElementById ("listaRisultati")
  if (location === "" || title === ""){
    alert ("Inserisci tutti i valori!")
    return
  }
  if (lavoriFiltrati.count === 0){
    const li = document.createElement ("li")
    li.innerText = "Nessun risultato"
    contenitore.appendChild (li)
    return
  }

  for (let lavoro of lavoriFiltrati.result) {
    //console.log (lavoro)
    let nuovoElemento = document.createElement ("li")
    nuovoElemento.innerHTML = lavoro.location + " " + lavoro.title
    contenitore.appendChild (nuovoElemento)
  }  
  const counter = document.createElement ("p")
  counter.innerText = lavoriFiltrati.count
  document.getElementById ("risultati").appendChild (counter)
}



