import * as PIXI from 'pixi.js'
import 'pixi-spine'

import { KeyVisualPropInterface } from './interface'
import Buggy from './components/byggy'
import SpineBoySprite from './components/spine-boy'

let type = 'WebGL'
if (!PIXI.utils.isWebGLSupported()) { type = 'canvas' }
PIXI.utils.sayHello(type)

export default class KeyVisual extends PIXI.Application {
  private props: KeyVisualPropInterface = <KeyVisualPropInterface>{}
  private buggy: PIXI.Sprite = new PIXI.Sprite()
  private spineBoyContainer: PIXI.Container = new PIXI.Container()

  constructor (props: KeyVisualPropInterface = <KeyVisualPropInterface>{}) {
    super({
      width: props.width || window.innerWidth,
      height: props.height || window.innerHeight,
      transparent: false,
      antialias: true,
      autoDensity: true
    })
    this.props = props
    this.stage.interactive = true
    window.addEventListener('resize', this.onResize.bind(this))

    this.loader
      .add('buggy', this.props.resource.buggy)
      // .add('spineBoy', this.props.resource.spineBoy)
      .load(this.setup.bind(this))
  }

  init (el: HTMLElement): void {
    el.appendChild(this.view)
  }

  setup ():void {
    const { buggy, spineBoy } = this.loader.resources
    this.buggy = new Buggy(buggy.texture, {
      positionX: 100,
      positionY: 100,
      anchorX: 0.5,
      anchorY: 0.5
    })
    this.stage.addChild(this.buggy)
    // this.spineBoyContainer = new SpineBoySprite(spineBoy.spineData, {
    //   positionX: this.view.width / 2,
    //   positionY: this.view.height,
    //   anchorY: 0.5,
    //   anchorX: 0.5
    // })
    // this.stage.addChild(this.spineBoyContainer)

    this.ticker.add(() => {
      this.playBuggy()
    })
  }

  playBuggy (): void {
    this.buggy.scale.set(0.5)
    this.buggy.rotation += 0.01
    if (this.buggy.x >= this.view.width + this.buggy.width / 2) {
      this.buggy.x = -this.buggy.width / 2
    } else {
      this.buggy.x += 1
    }
  }

  onResize (): void {
    this.renderer.resize(window.innerWidth, this.view.height)
  }

  range (min: number, max: number) : number {
    return (max - min) * Math.random() + min
  }

  max (num: number): number {
    return Math.random() * num
  }
}
