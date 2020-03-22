import fs from 'fs';

export default async function createJson(data) {
   const objData = { ...data };

   fs.writeFileSync('src/json/answer.json', JSON.stringify(objData), err => {
      if (err) throw err;
      return 'ok';
   });

   return data;
}
