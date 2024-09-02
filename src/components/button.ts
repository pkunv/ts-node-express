import { document } from "../lib/dom"

export default function Button({ onClick }: { onClick: () => void }) {
	const button = document.createElement("button")
	button.textContent = "Click me!"

	return button
}
