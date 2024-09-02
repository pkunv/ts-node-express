// src/index.ts
import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import Body from "./components/body"
import Head from "./components/head"
import { document } from "./lib/dom"

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config()

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express()
const port = process.env.PORT || 3000

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
	res.header("Content-Type", "text/html")
	const html = document.createElement("html")
	html.appendChild(Head())
	html.appendChild(Body())

	res.send(html)
})

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`)
})
