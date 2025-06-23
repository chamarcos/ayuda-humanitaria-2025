const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Sistema funcionando correctamente!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
