
# **API de Alunos**

API desenvolvida em **Express.js** para gerenciar dados de alunos. A API permite criar, listar, atualizar e remover registros de alunos, com dados armazenados em memória durante a execução.

## 📋 **Tecnologias Utilizadas**
- **Node.js** com **Express.js**
- **UUIDv4** para geração de IDs únicos

## 📂 **Estrutura do Projeto**
- **server.js**: Arquivo principal com as rotas e configuração da API.
- **/repositories/alunoRepository.js**: Contém a lógica de persistência dos dados dos alunos.

## 🚀 **Como Rodar o Projeto**

1. Clone o repositório:
   ```bash
   git clone <seu-repositório>
   cd api-rest-residencia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node server.js
   ```

4. Acesse a API em: [http://localhost:3000](http://localhost:3000)

## 📌 **Endpoints**

### **Criar Aluno**
`POST /aluno`  
Cria um novo registro de aluno.

**Corpo da Requisição:**
```json
{
  "nome": "João da Silva",
  "email": "joao.silva@example.com",
  "nomeCurso": "Engenharia de Software"
}
```

---

### **Listar Todos os Alunos**
`GET /alunos`  
Retorna todos os alunos cadastrados.

---

### **Buscar Aluno por ID**
`GET /aluno/:id`  
Retorna os dados de um aluno específico pelo ID.

---

### **Atualizar Aluno**
`PUT /aluno/:id`  
Atualiza as informações de um aluno existente.

**Corpo da Requisição:**
```json
{
  "nome": "Maria Souza",
  "email": "maria.souza@example.com",
  "nomeCurso": "Ciência da Computação"
}
```

---

### **Deletar Aluno**
`DELETE /aluno/:id`  
Remove um aluno pelo ID.

---

## 🛠️ **Dependências do Projeto**
```json
"dependencies": {
  "express": "^4.19.2",
  "uuidv4": "^6.2.13"
}
```

---

## 👨‍💻 **Autor**
Desenvolvido por Natanias, Weider, Nayran, Ricardo e Ezequiel.

---
