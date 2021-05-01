import * as PIXI from 'pixi.js'
window.PIXI = PIXI;
import 'pixi-spine'

import { SpriteOption } from '../interface'
import SkeletonData = PIXI.spine.core.SkeletonData;

export default class SpineBoySprite extends PIXI.spine.Spine {
  public options: SpriteOption

  constructor (spineData: SkeletonData, options: SpriteOption = <SpriteOption>{}) {
    super(spineData)
    this.options = options

    this.setup()
  }

  setup () {
    const { positionY, positionX } = this.options

    this.scale.set(0.5)
    this.x = positionX
    this.y = positionY
  }
}
