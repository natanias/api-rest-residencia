const express = require('express');
const {create,update,remove,find,findAll} = require('./respositories/alunoRepository');
const app = express()
const port = 3000;

app.use(express.json())
app.get('', (req, res)=>{
    res.send('Api CRUD: alunos');
});

app.post('/aluno', (req, res)=>{ 
    const { nome, email, nomeCurso } = req.body;
    const aluno = create({ nome, email, nomeCurso });
    res.status(201).json(aluno);
});


app.put('/aluno/:id', (req, res)=>{
    const { id } = req.params;
    const { nome, email, nomeCurso } = req.body;
    const aluno = update(id, { nome, email, nomeCurso });
    if(!aluno){
        res.status(404).send();
        return;
    }
    res.json(aluno);
}
);

app.delete('/aluno/:id', (req, res)=>{        
    const { id } = req.params;
    const result = remove(id);
    if(!result){
        res.status(404).send();
        return;
    }
    res.status(204).send();
});

app.get('/alunos', (req, res)=>{
    const alunos = findAll();
    res.json(alunos);
});

app.get('/aluno/:id', (req, res)=>{
    const { id } = req.params;
    const aluno = find(id);
    if(!aluno){
        res.status(404).send();
        return;
    }
    res.json(aluno);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});