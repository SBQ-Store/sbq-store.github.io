/*const init = async () => {
	const config = await (await fetch('config.json')).json();
	let newHTML = document.documentElement.innerHTML;
	Object.keys(config).map((key) => {
		newHTML = newHTML.replace(key, config[key]);
	});
	document.documentElement.innerHTML = newHTML;
};
init();*/

/* OPCION 2 PARA INTEGRARLO CON GOOGLE SHEETS

const scriptURL = '<SCRIPT URL>' //URL script generada por Google Sheets
const form = document.forms['my-google-sheet'] //Nombre del formulario

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
*/

