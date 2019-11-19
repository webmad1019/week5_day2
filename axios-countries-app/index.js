const myCountriesApp = axios.create({
    baseURL: `https://restcountries.eu/rest/v2/name/`
})

function getCountryInfo(countryname) {
    myCountriesApp.get(countryname)
        .then(response => {
            document.getElementById('error').style.display = 'none'
            document.getElementById('countryName').innerText = response.data[0].name
            document.getElementById('countryCapital').innerText = response.data[0].capital
        })
        .catch(x => {
            document.getElementById('error').style.display = 'block'
            document.getElementById('error').innerText = `¿Existe el país ${countryname}?`
        })
}

//document.getElementById('theInput').onkeyup = () => {
document.getElementById('theButton').onclick = () => {
    const inputValue = document.getElementById('theInput').value
    getCountryInfo(inputValue)
}