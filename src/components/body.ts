import { document } from "../lib/dom"

export default function Body() {
	const body = document.createElement("body")
	const h1 = document.createElement("h1")
	h1.textContent = "Hello World"

	body.appendChild(h1)

	return body
}
