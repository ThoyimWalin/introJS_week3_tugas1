const cariHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day.toLowerCase()
                    
            })
            if (cek) {
                resolve(day)
            } else {
                reject(new Error(`hari ${day} bukan hari kerja`))
            }
        }, 1000)
    })
}

const startAPP = async () => {
    try {
        const hasil = await cariHariKerja('SeNin')
        console.log(`Hari ${hasil} merupakan hari kerja`)
    } catch (error) {
        console.log(error.message)
    }

}
startAPP()


// cariHariKerja('minggu')
//     .then((res) => {
//         console.log(`Hari ${res} merupakan hari kerja`)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Try Catch:

// Jika promise terpenuhi (resolve), hasilnya akan disimpan dalam variabel hasil dan kode di dalam blok try akan dijalankan
// Jika promise ditolak (reject), eksekusi akan beralih ke blok catch / menangkap error

// Then Catch:

// Jika promise terpenuhi (resolve), kode di dalam blok then() akan dijalankan
// Jika promise ditolak (reject), eksekusi akan beralih ke blok catch() / menangkap error
    