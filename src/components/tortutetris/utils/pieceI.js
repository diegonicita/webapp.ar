import {
  rotationDefault,
  rotationNone,
  rotationToRightUp,
  rotationToRightDown,
  rotationToLeftDown,
  rotationToLeftUp,
  rotationToLeftUp2,
  rotationToCornersRightDown,
  rotationR1,
  rotationL1,
  rotationL2,
} from './rotations'

export const createPieceI = (id, x, sprite, status) => [
  {
    id: id,
    x: x,
    y: 1,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '0' : sprite,  
    rotation: rotationNone(),
  },
  {
    id: id,
    x: x,
    y: 0,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '1' : sprite,
    rotation: rotationR1(),
  },
  {
    id: id,
    x: x,
    y: 2,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '2' : sprite,
    rotation: rotationL1(),
  },
  {
    id: id,
    x: x,
    y: 3,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '3' : sprite,
    rotation: rotationL2(),
  },
]
