input.onButtonPressed(Button.A, function () {
    joueur.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    joueur.change(LedSpriteProperty.X, 1)
})
let joueur: game.LedSprite = null
joueur = game.createSprite(0, 4)
let laser = game.createSprite(randint(0, 4), 0)
basic.pause(500)
basic.forever(function () {
    laser.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (joueur.get(LedSpriteProperty.X) == laser.get(LedSpriteProperty.X) && joueur.get(LedSpriteProperty.Y) == laser.get(LedSpriteProperty.Y)) {
        laser = game.createSprite(randint(0, 4), 0)
    }
})
