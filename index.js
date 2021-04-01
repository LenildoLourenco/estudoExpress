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
    const { id } = req.params;
    const { title, Owne } = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex <0) {
        return res.status(400).json({error: 'Projeto não foi encontrado'});
    }

    const project = {
        id,
        title,
        Owne,
    }

    projects[projectIndex] = project;
    return res.json(project);
    
})

app.delete('/projects/:id', (req, res) => {
   const {id} = req.params

   const projectIndex = projects.findIndex(project => project.id === id);
   if (projectIndex <0) {
       return res.status(400).json({error: 'Projeto não foi encontrado'});
   }
   projects.splice(projectIndex, 1);
   return res.status(204).send();
   
    return res.json([
        'projeto 100',
        'projeto 2',
    ])
})

app.listen(3000, () => {
    console.log('Servidor rodando');
})