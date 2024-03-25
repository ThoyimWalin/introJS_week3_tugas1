fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => { // cek status server
        if (!res.ok) { // Jika status respons bukan OK
            throw new Error('Ada error nih') // Membuat error baru
        }
        return res.json() // Jika status respons OK, proses data
    })
    .then(data => { // menampilkan data name menggunakan map
        data.map((item) => {
            console.log(`${item.id}. ${item.name}`)
        })
    })
    .catch(err => console.log('There has been a problem with your fetch operation: ', err.message)) // menampilkan error jika terjadi masalah