export const document = {
	createElement(tagName: string): Element {
		return new Element(tagName)
	},
}

export class Element {
	tagName: string
	children: Element[] = []
	textContent: string = ""
	classes: string[] = []
  attributes: {[key: string]: string} = {}
	classList: {
		add: (...classes: string[]) => void
	} = {
		add: (...classes: string[]) => {
			this.classes.push(...classes)
		},
	}
  setAttribute(name: string, value: string) {
    this.attributes[name] = value
  }

	constructor(tagName: string) {
		this.tagName = tagName
	}

	appendChild(child: Element) {
		this.children.push(child)
	}

	get outerHTML(): string {
		const children = this.children.map((child) => child.outerHTML).join("")
		return `<${this.tagName}>${children}${this.textContent}</${this.tagName}>`
	}
	get(): string {
		return this.outerHTML
	}
}

export function appendChildArray(parent: Element, children: Element[]) {
	children.forEach((child) => parent.appendChild(child))
}

export function html({ [key] }: { [key: string]: string }) {
  const html = document.createElement("html")
  html.setAttribute("key", key)
  return document.createElement("html")
}


export function initializeDocument() {
  html
}
