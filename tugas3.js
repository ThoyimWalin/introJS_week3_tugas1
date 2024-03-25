const ajax = new XMLHttpRequest()
const getPost = (method, url) => {
    return new Promise((resolve, reject) => {
        ajax.open(method, url)
        ajax.send()
        ajax.onload = function () {
            if (ajax.status === 200) {
                const hasil = JSON.parse(ajax.responseText)
                resolve(hasil)
            } else {
                reject('ada error bro...');
            }
        }
    })
}

const startAPP = async () => {
    try {
        const hasil = await getPost('GET', 'https://dummyjson.com/products')

        const { products } = hasil;

        // mengurutkan sesuai harga
        products.sort((a, b) => b.price - a.price);

        products.map(product => {
            console.log(`
Produk : ${product.title}
Harga : $${product.price}  
            `); // Menampilkan produk
        });
    } catch (error) {
        console.log(error)
    }

}
startAPP()