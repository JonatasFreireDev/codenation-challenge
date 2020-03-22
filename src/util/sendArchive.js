import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export default async function sendArchive() {
   const form = new FormData();
   const file = fs.createReadStream('src/json/answer.json');

   form.append('answer', file, 'answer.json');

   const formHeaders = form.getHeaders();

   const response = await axios
      .post(
         'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=6fa41a6cfd53267fc35bf22ceb899f754cda8bd4',
         form,
         {
            headers: {
               ...formHeaders,
            },
         }
      )
      .catch(error => console.log(error.response.statusText));

   return response;
}
