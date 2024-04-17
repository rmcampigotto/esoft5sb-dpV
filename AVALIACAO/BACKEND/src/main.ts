import app from './app'
import api from './api'

function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000')
    })

}

main()