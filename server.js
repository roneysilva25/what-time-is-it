import express from "express"

function bootstrap() {
    const app = express()

    app.get("/", (req, res) => {
        res.send(`<h1>Hello bitch, date is ${new Date().toString()}</h1>`)
    })

    return app
}

bootstrap().listen(3000, () => {
    console.log("application running")
})