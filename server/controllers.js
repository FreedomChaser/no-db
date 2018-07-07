let cards = [{
    secretIdentity: '',
    gender: '',
    superName: '',
    superPower: '',
    coreConflict: '',
    alignment: ''
}]
let id = 0

module.exports = {
    create: (req, res)=>{
        console.log(req.body.secretIdentity)
        const {secretIdentity, gender, superName, superPower, coreConflict, alignment } = req.body;
        cards.push({id, secretIdentity, gender, superName, superPower, coreConflict, alignment })
        id++
        console.log(cards);
        console.log(req)
        res.status(200).send( cards )
    },
    read: (req, res)=>{
        res.status(200).send( cards )
    },
    update: (req, res)=>{
        const { secretIdentity, gender, superName, superPower, coreConflict, alignment } = req.body
        const updateID = req.params.id
        const cardIndex = cards.findIndex( card => card.id == updateID)
        let card = cards[ cardIndex ]

        cards[ cardIndex ] ={
            id: card.id,
            secretIdentity: secretIdentity || card.secretIdentity, 
            gender: gender || card.gender,
            superName: superName || card.superName,
            superPower: superPower || card.superPower,
            //add a 'what is this' box 
            coreConflict: coreConflict || card.coreConflict,
            //add a 'what is this' box 
            alignment: alignment || card.alignment
            // text: text ||  card.text,
            // time: card.time
        }
        res.status(200).send( cards )
    },
    delete: (req, res)=>{
        const deleteID = req.params.id
        cardIndex = cards.findIndex(card => card.id == deleteID)
        cards.splice(cardIndex, 1)
        res.status(200).send( cards )
    }
}

