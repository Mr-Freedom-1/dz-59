// ---------- Завдання 1 ----------

// import express from 'express';

// const port = 8000;
// const app = express();

// app.get('/', (req, res)=>{
//     res.send('<h1>Wellcome</h1>');
// })
// app.get('/product', (req, res)=>{
//     const title = req.query?.title || 'Title';
//     const price = req.query?.price || '';
//     res.send(`<div><h1>${title}</h1><h2>For just ${price}</h2></div>`);
// })

// app.listen(port, ()=> {
//     console.log(`Server started on http://localhost:${port}`);
// })

// ---------- Завдання 2 ----------

// import express from 'express';
// import path from 'path'
// import { fileURLToPath } from 'url';

// const port = 8000;
// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// })
// app.listen(port, ()=> {
//     console.log(`Server started on http://localhost:${port}`);
// })

// ---------- Завдання 3 ----------

import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';

const port = 8000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));

app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/product', (req, res)=>{
    const title = req.query?.title || 'Product';
    const price = req.query?.price || '';
    res.render('product', {product_title: title, product_price: price})
})

app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`);
})

