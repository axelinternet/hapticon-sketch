
function setup() {
    noStroke()
    const width = 800
    const cnv = createCanvas(width, 480)
    cnv.parent('sketch__canvas')
    background(255)
}


function draw() {
    const hapticonOnColor = '#FF5733'
    const hapticonOffColor = 80
    const { values } = HAPTICONS[0]
    frameRate(0)
    let x = 25
    const scale = 0.1
    values.forEach((val,i) => {
        if (i % 2 === 0) {
            fill(hapticonOnColor)
        } else {
            if (i === values.length - 1) {
                return
            }
            fill(hapticonOffColor)
        }
        console.log(x, val)
        rect(x, 10, val * scale, 10)
        fill(0, 255, 0)
        ellipse(x, 20, 4, 4)
        x = Math.round(x + (val * scale))
    })
}