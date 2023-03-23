const HelloController = (app) => {
    app.get('/hello', (req, res) => res.send('Life is good!'));
    app.get('/', (req, res) => res.send('Welcome to Full Stack Development'))
    app.get('/api', (req, res) => res.send(process.env.REACT_APP_DB_CONNECTION_STRING))
}

export default HelloController