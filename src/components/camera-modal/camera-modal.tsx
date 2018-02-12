import { Component } from '@stencil/core';

@Component({
  tag: 'ion-camera-modal',
  shadow: true
})
export class Camera {

  render() {
    return (
      <div>
        <ion-modal-controller></ion-modal-controller>
        <ion-action-sheet-controller></ion-action-sheet-controller>
      </div>
    );
  }
}
