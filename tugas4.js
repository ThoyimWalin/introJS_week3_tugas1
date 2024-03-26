fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => { // cek status server
        if (!res.ok) { 
            throw new Error('Ada error nih') 
        }
        return res.json() 
    })
    .then(data => { // menampilkan data name menggunakan map
        data.map((item) => {
            console.log(`${item.id}. ${item.name}`)
        })
    })
    .catch(err => console.log('There has been a problem with your fetch operation: ', err.message)) // menampilkan error jika terjadi masalah