const canvas = document.getElementById("myCanvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16
canvas.height = 64 * 9

let collisionBlocks
let backgroundLevel
let doors
let level = 3

const overlay = {
    alpha: 0
}
const player = new Player({
    imgSrc: "./images/img/king/idle.png",
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 4,
            loop: true,
            imgSrc: './images/img/king/idle.png',
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 4,
            loop: true,
            imgSrc: './images/img/king/idleLeft.png',
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 6,
            loop: true,
            imgSrc: './images/img/king/runRight.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 6,
            loop: true,
            imgSrc: './images/img/king/runLeft.png',
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 6,
            loop: false,
            imgSrc: './images/img/king/enterDoor.png',
            onComplete: () => {
                console.log("completed")
                gsap.to(overlay, {
                    alpha: 1,

                    onComplete: () => {
                        level++
                        if (level === 4) level = 1
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay, { alpha: 0 })
                    }
                },)
            }
        },
    }
})

let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            if (player.currentAnimation) player.currentAnimation.isActive = false

            backgroundLevel = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imgSrc: './images/img/backgroundLevel1.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 767,
                        y: 270,
                    },
                    imgSrc: './images/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoPlay: false,
                }),
            ]
        },
    },
    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if (player.currentAnimation) player.currentAnimation.isActive = false

            backgroundLevel = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imgSrc: './images/img/backgroundLevel2.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 772.0,
                        y: 336,
                    },
                    imgSrc: './images/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoPlay: false,
                }),
            ]
        },
    },
    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()

            player.collisionBlocks = collisionBlocks
            player.position.x = 700
            player.position.y = 100
            if (player.currentAnimation) player.currentAnimation.isActive = false

            backgroundLevel = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imgSrc: './images/img/backgroundLevel3.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 176.0,
                        y: 335,
                    },
                    imgSrc: './images/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoPlay: false,
                }),
            ]
        },
    },
}

function animate() {
    backgroundLevel.draw(c)
    doors.forEach((door) => {
        door.draw(c)
    })
    player.draw(c)
    player.update()

    runoverlay()

    requestAnimationFrame(animate)
}

const runoverlay = () => {
    c.save()
    c.fillStyle = "black"
    c.globalAlpha = overlay.alpha
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.restore()
}

levels[level].init()
animate()
