class Player extends Sprite {
    constructor({ collision = [], imgSrc, frameRate = 1, animations, loop }) {
        super({
            imgSrc,
            animations,
            frameRate,
            loop
        })
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.lastDirection = "right"
        this.gravity = 1
        this.collisionBlocks = collision
        this.controllers = new Controllers()
        this.jumping = false
    }

    update() {
        this.#updateHitBox()
        this.#move()
        this.position.x += this.velocity.x

        this.#updateHitBox()
        this.#checkHorizontalCol()
        this.#applyGravity()

        this.#updateHitBox()
        this.#checkVerticalCol()
    }
    #updateHitBox() {
        this.hitBox = {
            position: {
                x: this.position.x + 64,
                y: this.position.y + 34,
            },
            width: 38,
            height: 53,
        }
    }
    #checkHorizontalCol() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            if (
                this.hitBox.position.x <=
                collisionBlock.position.x + collisionBlock.width &&
                this.hitBox.position.x + this.hitBox.width >=
                collisionBlock.position.x &&
                this.hitBox.position.y + this.hitBox.height >=
                collisionBlock.position.y &&
                this.hitBox.position.y <=
                collisionBlock.position.y + collisionBlock.height
            ) {
                if (this.velocity.x < -0) {
                    const offset = this.hitBox.position.x - this.position.x
                    this.position.x =
                        collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }

                if (this.velocity.x > 0) {
                    const offset =
                        this.hitBox.position.x - this.position.x + this.hitBox.width
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }
    #checkVerticalCol() {

        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const block = this.collisionBlocks[i];

            if (this.hitBox.position.x <= block.position.x + block.width &&
                this.hitBox.position.x + this.hitBox.width >= block.position.x &&
                this.hitBox.position.y <= block.position.y + block.height &&
                this.hitBox.position.y + this.hitBox.height >= block.position.y
            ) {

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitBox.position.y - this.position.y
                    this.position.y =
                        block.position.y + block.height - offset + 0.01
                    break
                }
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset =
                        this.hitBox.position.y - this.position.y + this.hitBox.height
                    this.position.y = block.position.y - offset - 0.01
                    this.jumping = false

                    break
                }

            }
        }
    }
    #applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height + 0.01
            this.velocity.y = 0
        }
    }

    #move() {
        if (this.preventInput) return
        this.velocity.x = 0
        if (this.controllers.left) {
            this.switchSprite("runLeft")
            this.lastDirection = "left"
            this.velocity.x = -5
        }
        if (this.controllers.right) {
            this.switchSprite("runRight")
            this.lastDirection = "right"
            this.velocity.x = 5
        }
        if (!this.controllers.left && !this.controllers.right) {
            if (this.lastDirection == "left") {
                this.switchSprite("idleLeft")
            }
            if (this.lastDirection == "right") {
                this.switchSprite("idleRight")
            }

        }
        if (this.controllers.up) {
            this.#checkCollideDoors()
            if (!this.jumping && !this.preventInput) {
                this.jumping = true
                this.velocity.y -= 12
            }
        }
        if (this.controllers.down) {
            this.velocity.y += 1
        }

    }

    #checkCollideDoors() {
        let doorBuffer = 5
        doors.forEach((door) => {
            if (this.hitBox.position.x >= door.position.x + doorBuffer &&
                this.hitBox.position.x + this.hitBox.width <= door.position.x + door.width - doorBuffer &&
                this.hitBox.position.y >= door.position.y - doorBuffer &&
                this.hitBox.position.y + this.hitBox.height <= door.position.y + door.height + doorBuffer
            ) {
                this.velocity.x = 0
                this.preventInput = true
                this.switchSprite("enterDoor")
                return
            }
        })
    }
    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentAnimation = this.animations[name]
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
    }
}