const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const TangkiRoutes = require('./routes/tangki');
const VitaminRoutes = require('./routes/vitamin');
const CahayaRoutes = require('./routes/cahaya');
const SuhuRoutes = require('./routes/suhu');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/tangki', TangkiRoutes);
app.use('/api/vitamin', VitaminRoutes);
app.use('/api/cahaya', CahayaRoutes);
app.use('/api/suhu', SuhuRoutes);


app.listen(PORT, () => console.log("App running on port "+PORT));