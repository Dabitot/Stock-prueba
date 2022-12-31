
const inputName = document.querySelector('#ProductName')
const inputPrice = document.querySelector('#ProductPrice')

const button = document.querySelector('button')


button.addEventListener('click', (e) => {
    console.log({name: inputName.value, price: inputPrice.value} )

    const name = inputName.value
    const price = inputPrice.value

    fetch('/api/v1/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },

        body:  JSON.stringify({
            name,
            price,
        })



    })


})
