const customExpress = require('./config/customExpress.js')

const app = customExpress()

app.listen(3000, () => console.log('server running on port 3000'))



