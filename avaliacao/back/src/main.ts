import app from './app'
import cors from 'cors'

function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000')
    })
    app.use(cors())
}

main()