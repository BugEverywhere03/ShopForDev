'use strict'

class AccessController {
    signup = async (req, res, next) => {
        try {
            console.log(`P::signup::`, req.body);
            /*
            Status code:
                200 -> OK
                201 -> CREATED 
             */
            return res.status(201).json({
                code: 20001,
                metadata: {
                    userid : 1
                }
            })
        } catch(error){
            console.log(error);
        }
    }
}

export default new AccessController();