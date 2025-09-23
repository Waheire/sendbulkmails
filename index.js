const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
