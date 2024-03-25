  const hitungJumlahKarakter = (string) => {
    return new Promise((resolve, reject) => {
      if (typeof string !== 'string') {
        reject(new Error('Input harus sebuah string.'));
      } else {
        const jumlahKarakter = string.length;
        resolve(jumlahKarakter);
      }
    });
  }
  
  const startAPP = async () => {
    try {
      const string1 = "Hello, world!";
      const string2 = "Ini adalah contoh kalimat.";
  
      const jumlahKarakter1 = await hitungJumlahKarakter(string1);
      console.log(`Jumlah karakter string "${string1}": ${jumlahKarakter1}`);
  
      const jumlahKarakter2 = await hitungJumlahKarakter(string2);
      console.log(`Jumlah karakter string "${string2}": ${jumlahKarakter2}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  startAPP();
  