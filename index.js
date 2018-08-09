const rc = rough.canvas(document.getElementById('canvas'));

const ctx = document.getElementById('canvas')
ctx.width = window.innerWidth - 200
ctx.height = window.innerHeight * 0.90
const hapticonOnColor = '#696969'

const hapticonOffColor = '#fff'
const height = 20
const scale = 0.150 
let y = 20
let fill = {}

rc.rectangle(4, 4, window.innerWidth - 210, window.innerHeight * 0.88, {
    fill: '#fff',
    fillStyle: 'solid',
    stroke: '#fff'
})


HAPTICONS.forEach((hapticon, id) => {
    const { values } = hapticon
    let x = 50
    values.forEach((val, i) => {
        if (i % 2 === 0) {
            fill = {
                fill: hapticonOnColor,
                fillStyle: 'solid'
            }
        } else {
            if (i === values.length - 1) {
                return
            }
            fill = {
                fill: hapticonOffColor,
                fillStyle: 'solid'
            }
        }
        rc.rectangle(x, y, val * scale, height, fill)
        x = Math.round(x + (val * scale))
    })
    y = y + 50
})

const context = ctx.getContext('2d')
context.font = '24px serif'
context.textAlign = 'center'
let texty = 38
for (let i = 0; i < 16; i++) {
    context.fillText(i, 25, texty)
    texty += 50
}

context.fillRect(50, 830, 1500, 1)

let tx = 0
for (let i = 50; i < 1500; i += 150) {
    context.fillRect(i, 810, 2, 40)
    context.fillText(tx, i, 880)
    tx += 1
}

context.fillText('t [s]', 1500, 880)