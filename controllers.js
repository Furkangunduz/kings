class Controllers {
    constructor() {
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        this.#addKeyboardListeners()
    }
    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true
                    break
                case "ArrowRight":
                    this.right = true
                    break
                case "ArrowDown":
                    this.down = true
                    break
                case "ArrowUp":
                    this.up = true
                    break
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false
                    break
                case "ArrowRight":
                    this.right = false
                    break
                case "ArrowDown":
                    this.down = false
                    break
                case "ArrowUp":
                    this.up = false
                    break
            }
        }
    }
}