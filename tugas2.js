const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }

    }, 1000)
}

const runCallback = (error, month) => {
    if(error === null) {
        const months = month.map((m) => {
            return m
        })
        for(let i = 0; i < months.length; i++){
            console.log(`${i+1} ${months[i]}`)
        }
    } else {
        console.log(error.message)
    }
}

getMonth(runCallback)