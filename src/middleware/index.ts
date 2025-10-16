import {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator';

export const handleInputErors = (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    // Funcion que indica la finalizacion de la funcion y da pie a la ejucion de la siguiente
    next();
    
}