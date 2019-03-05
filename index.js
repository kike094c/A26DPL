let express = require('express');
let app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
	res.send('Aplicación de Enrique San Blas');
});

app.listen(PORT, () => {
	console.log('su aplicación está corriendo en el puerto '+PORT);
});
