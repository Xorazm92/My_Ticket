import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as uuid from "uuid"

@Injectable()
export class FileService {

    async saveFile(file:any):Promise<string>{
        try{
            const fileName = uuid.v4()+".jpg";
            const filePath = path.resolve(__dirname,"..","static")

            if(!fs.existsSync(filePath))
                fs.mkdirSync(filePath, {recursive: true})

            fs.writeFileSync(path.join(filePath,fileName),file.buffer)
            
            return fileName
        }catch(error){
            throw new InternalServerErrorException("Rasmni filega yozishda xatolik")
            
        }
    }
    
}
