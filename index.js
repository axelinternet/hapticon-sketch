
function setup() {
    noStroke()
    const width = 800
    const cnv = createCanvas(width, 480)
    cnv.parent('sketch__canvas')
    background(255)
}


function draw() {
    frameRate(0)
    const hapticonOnColor = '#FF5733'
    const hapticonOffColor = 80
    const height = 10
    const scale = 0.1
    let y = 10

    HAPTICONS.forEach((hapticon, id) => {
        console.log(y)
        const { values } = hapticon
        let x = 25
        values.forEach((val, i) => {
            if (i % 2 === 0) {
                fill(hapticonOnColor)
            } else {
                if (i === values.length - 1) {
                    return
                }
                fill(hapticonOffColor)
            }
            rect(x, y, val * scale, height)
            fill(0, 255, 0)
            ellipse(x, y + height, 4, 4) //TODO: Remove before deploy
            x = Math.round(x + (val * scale))
        })
        y = y + 20
    })
}