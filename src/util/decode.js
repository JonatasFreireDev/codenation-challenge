import alfabeto from './alfabeto';

export default function decode(house, code) {
   const lowerCode = code.toLowerCase().split('');

   const indexCode = lowerCode.map(letter => {
      return alfabeto.indexOf(letter, 25);
   });

   const decoded = indexCode.map((numb, index) => {
      if (numb === -1) {
         return lowerCode[index];
      }
      return alfabeto[numb - house];
   });

   return decoded.join('');
}
