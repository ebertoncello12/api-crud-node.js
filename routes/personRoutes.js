const router = require('express').Router()
const Person = require('../models/Person.js')


// Inserçao de dados 
router.post('/', async (req, res) => {
    // req.body
        const {name, salary, approved} = req.body // Destructure 
    
        if(!name) {
            res.status(422).json({error: 'nome'})
            return
        }
    
        const person =  {
            name,
            salary,
            approved
        }
    
     // Create do mongoose 
      try {
    
        // Criando Dados
        await Person.create(person)
       
        res.status(201).json({message: 'Pessoa inserida com sucesso'})
    
      } catch (error) {
        res.status (500).json({error: error})
      }
    })

    //Leitura de dados 

    router.get('/', async (req, res) => {
        try {

            const people = await Person.find()

            res.status(200).json(people)
            
        } catch (error) {
            res.status (500).json({error: error})
        }

    })

    

    router.get('/:id', async (req, res) => {

        //Extrair o dado da REQ = requisiçao , pela URL = req.params

        const id = req.params.id

        try {

            const person = await Person.findOne({_id: id })

            if (!person) {
                res.status(422).json({message: 'O usuario nao foi encontrado'})
                return
            }

            res.status(200).json(person)
            
        } catch (error) {
            res.status (500).json({error: error})
            
        }
    })


    //Atualizaçao de dados (PUT, PATCH)

    router.patch('/:id', async (req , res ) => {
        const id = req.params.id

        const { name, salary, approved } = req.body

        const person = {
            name,
            salary,
            approved
        }

        try {

            const updatedPerson = await Person.updateOne( { _id : id }, person )

            console.log(updatedPerson)

            if(updatedPerson.matchedCount === 0 ) {
                res.status(422).json({message: 'Usuario nao foi atualizado'})
                return
            }

            res.status(200).json(person)

        } catch(error) {
            res.status(500).json({ error: error })
        }
    })

    // Deletar dados 

    router.delete('/:id', async (req, res ) => {

        const id = req.params.id

        const person = await Person.findOne ({ _id: id  })
        
        if(!person) {   
        res.status(422).json ({ message: 'o usuario nao foi encontrado' })
        return 
        }

        try {

            await Person.deleteOne ({_id: id})

            res.status(200).json({message: 'o usuario foi removido com sucesso'})
            
        } catch (error) {

            res.status(500).json({error: error})
            
        }

    })

    module.exports = router
    
    