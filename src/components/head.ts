import { document } from "../lib/dom"

export default function Head() {
	const head = document.createElement("head")
	const title = document.createElement("title")
	title.textContent = "Hello World"

	head.appendChild(title)

	return head
}
