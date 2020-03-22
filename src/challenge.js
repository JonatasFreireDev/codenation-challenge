import axios from 'axios';
import sha1 from 'sha1';

import createJson from './util/createJson';
import decode from './util/decode';
import sendArchive from './util/sendArchive';

async function challenge() {
   const response = await axios.get(
      'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=6fa41a6cfd53267fc35bf22ceb899f754cda8bd4'
   );

   const { numero_casas, token, cifrado } = response.data;

   const decifrado = decode(numero_casas, cifrado);

   const resumo_criptografico = sha1(decifrado);

   const arq = await createJson({
      numero_casas,
      token,
      cifrado,
      decifrado,
      resumo_criptografico,
   });

   if (arq) {
      const resp = await sendArchive();
      console.log(resp.data);
   }
}

export default challenge();
