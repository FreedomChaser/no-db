let cards = []

// let Origin = [{
//     para: ''
// }],




let id = 0

module.exports = {
    create: (req, res) => {

        const { secretIdentity, gender, superName, superPower, coreConflict, alignment } = req.body;
        cards.push({ id, secretIdentity, gender, superName, superPower, coreConflict, alignment })
        id++
        console.log(cards);
        // console.log(req)
        res.status(200).send(cards)
    },
    // createOrigin:(req, res) => {
    //     const {para} = req.body;
    // origin.push({id, para})
    // id++
    // res.status(200).send( origin )
    // },

    read: (req, res) => {
        res.status(200).send(cards)
    },

    update: (req, res) => {
        let index = null;
        cards.forEach((card, i) => {

            if (card.id === Number(req.params.id)){ index = i;

                let tempSecretIdentity = req.body.secretIdentity ? req.body.secretIdentity : card.secretIdentity;
            
                let tempGender = req.body.gender ? req.body.gender : card.gender;
            
                let tempSuperName = req.body.superName ? req.body.superName : card.superName;
            
                let tempSuperPower = req.body.superPower ? req.body.superPower : card.superPower;
            
                let tempCoreConflict = req.body.coreConflict ? req.body.coreConflict : card.coreConflict;
            
                let tempAlignment = req.body.alignment ? req.body.alignment : card.alignment;
            
                console.log('hit',card)
                var copy = Object.assign(card, {
                    secretIdentity: tempSecretIdentity,
                    gender: tempGender,
                    superName: tempSuperName,
                    superPower: tempSuperPower,
                    coreConflict: tempCoreConflict,
                    alignment: tempAlignment 
                })  
            

            // if (card.id === Number(req.params.id)){ index = i;
            //     console.log('hit',card)
            //     var copy = Object.assign(card, {secretIdentity: card.secretIdentity})
            //     console.log('tester', copy)
            }
            // cards[index] = {
            //     id: cards[index].id,
            //     secretIdentity: req.body.secretIdentity ? req.body.secretIdentity: cards[index].secretIdentity,
            //     gender: req.body.gender || cards[index].gender,
            //     superName: req.body.superName || cards[index].superName,
            //     superPower: req.body.superPower || cards[index].superPower,
            //     coreConflict: req.body.coreConflict || cards[index].coreConflict,
            //     alignment: req.body.alignment || cards[index].alignment
            // }};
            })
            console.log(cards)
        res.status(200).send(cards);
    },
    delete: (req, res) => {
        let index = null;
        cards.forEach((card, id) => {
            if (card.id === Number(req.params.id)) index = id;
        })
        cards.splice(index, 1)
        res.status(200).send(cards);
    },
    
    
   
    
    // }

    // update: (req, res)=>{
    //     const { secretIdentity, gender, superName, superPower, coreConflict, alignment } = req.body
    //     const updateID = req.params.id
    //     const cardIndex = cards.findIndex( card => card.id == updateID)
    //     let card = cards[ cardIndex ]


    //         // text: text ||  card.text,
    //         // time: card.time
    //     }
    //     res.status(200).send( cards )
    // },
    // delete: (req, res)=>{
    //     const deleteID = req.params.id
    //     cardIndex = cards.findIndex(card => card.id == deleteID)
    //     cards.splice(cardIndex, 1)
    //     res.status(200).send( cards )
    // }
    
}

