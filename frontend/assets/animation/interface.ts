interface ResourceInterface {
  buggy?: string,
  spineBoy?: any
}

interface KeyVisualPropInterface {
  resource: ResourceInterface,
  width: number,
  height: number
}

interface SpriteOption {
  positionX: number,
  positionY: number,
  anchorX: number,
  anchorY: number
}

export {
  ResourceInterface,
  KeyVisualPropInterface,
  SpriteOption
}
