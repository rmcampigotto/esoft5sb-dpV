document.addEventListener('DOMContentLoaded', function () {
    test()
})

async function test() {
    await fetch("http://localhost:3000/comics").then(response => {
        console.log(response)
    })

    let paragrafo = document.querySelector('#teste')

    paragrafo.textContent = response[0].description
}