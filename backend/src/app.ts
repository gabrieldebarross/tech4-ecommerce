import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';

const app = express(); 
const port = 3001;

dotenv.config(); // Carrego as variáveis de ambiente

app.use(json()); // Um Middleware para processar JSON

app.get('/', (req, res) => { // Rota principal
    res.send('ARQUIVO HTML COMPLETO');
});

app.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`);
})


