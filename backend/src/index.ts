import express, { Request, Response } from 'express';
import path from 'path';
import { type WeaponProperties, weaponPropertiesToFoundryJson } from './types/weapon-properties';
import GetRandomWeapon from './random-weapons';
import { promises as fs } from 'fs';
import { v6 as uuid6 } from 'uuid';
import slugify from 'slugify';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/status', async (req: Request, res: Response) => {
    res.status(200).send('Working!');
});

app.post('/create-weapon', async (req: Request, res: Response) => {
    const weaponProperties : WeaponProperties = req.body as WeaponProperties;

    const weaponPropertiesJson = weaponPropertiesToFoundryJson(weaponProperties);

    if(!weaponProperties) {
        res.status(400).send(`Your weapon couldn't be converted to Foundry format.`);
        return;
    }

    const uuid : string = uuid6();
    const fileName : string = `./temp-files/${uuid}.json`;
    const exportFileName = slugify(weaponProperties.name, '_') + ".json"

    await fs.writeFile(fileName, weaponPropertiesJson as string, {});
    console.log(`Created new weapon file: ${fileName}`);
    res
        .header("Access-Control-Expose-Headers", "Content-Disposition")
        .download(fileName, exportFileName, (err) => {
            if(err) {
                console.log(`Error on sending file ${fileName}: ${err}`);
                res.status(500).send(err);
            }
            else {
                console.log(`File sent: ${fileName}`);
            }

            fs.unlink(fileName);
            console.log(`File removed: ${fileName}`);
        });
});

app.get('/weapons/random', async (req: Request, res: Response) => {
    await delay(500);
    
    const weapon : WeaponProperties = GetRandomWeapon();
    
    if(Math.random() < 0.2) {
        res.status(400).send('You should expect random errors!');
    } else {
        res.status(200).send(weapon);
    }  
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});