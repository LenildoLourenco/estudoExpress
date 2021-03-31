const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const projects = [];

//console.log(app);
app.get('/projects', (req, res) => {
    //const { title, Owne } = req.query;
   

    return res.json(projects);
});

app.post('/projects', (req, res) => {
    const {title, Owne} = req.body;
    const project = {id: uuidv4(), title, Owne};
    projects.push(project);

    return res.json(project);
});
      

app.put('/projects/:id', (req, res) => {
    const params = req.params;
    
    console.log(params)
    
    return res.json([
        'projeto 100',
        'projeto 2',
        'projeto 3',
    ])
})

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'projeto 100',
        'projeto 2',
    ])
})

app.listen(3000, () => {
    console.log('Servidor rodando');
})