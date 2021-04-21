import { Sprite, Texture } from 'pixi.js'
import { SpriteOption } from '~/assets/animation/interface'

export default class Buggy extends Sprite {
  public options: SpriteOption

  constructor (texture: Texture, options: SpriteOption = <SpriteOption>{}) {
    super(texture)
    this.options = options

    this.setup()
  }

  setup () {
    const { anchorX, anchorY, positionY, positionX } = this.options

    this.anchor.x = anchorX
    this.anchor.y = anchorY
    this.x = positionX
    this.y = positionY
  }
}
