class Sprite {
    constructor({ position, imgSrc, animations = [], frameRate = 1, frameBuffer = 1, loop = true, autoPlay = true }) {
        (frameRate)
        this.position = position
        this.loaded = false
        this.image = new Image()
        this.image.src = imgSrc
        this.frameRate = frameRate
        this.image.onload = () => {
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
            this.loaded = true
        }
        this.currentFrame = 0
        this.elapsedTime = 0
        this.frameBuffer = frameBuffer
        this.loop = loop
        this.autoPlay = autoPlay
        this.animations = animations
        this.currentAnimation
        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image();
                image.src = this.animations[key].imgSrc
                this.animations[key].image = image
            }
        }
    }
    draw(c) {
        if (!this.loaded) return
        const cropBox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0,
            },
            width: this.width,
            height: this.height
        }
        this.updateFrame()
        c.drawImage(
            this.image,
            cropBox.position.x,
            cropBox.position.y,
            cropBox.width,
            cropBox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    updateFrame() {
        if (!this.autoPlay) return
        this.elapsedTime++

        if (this.elapsedTime % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++
            else if (this.loop) this.currentFrame = 0
        }

        if (this.currentAnimation?.onComplete) {
            if (this.currentFrame == this.frameRate - 1 && !this.currentAnimation.isActive) {
                this.currentAnimation.onComplete()
                this.currentAnimation.isActive = true
            }

        }

    }
}