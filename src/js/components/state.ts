const volumeRange: HTMLInputElement = document.querySelector('#volume-range');
const keyboardSwitch: HTMLInputElement = document.querySelector('#keyboard-switch');

interface Istate {
  volume: number;
  isMiniGameOpened: boolean;
  keyboard: boolean;
  paused: boolean;
  callback: () => void;
}

function getVolume(): number {
  if (volumeRange) {
    return Number(volumeRange.value) / 100;
  }
}

function getKeyboardValue(): boolean {
  if (keyboardSwitch) {
    return keyboardSwitch.checked;
  }
}

const state: Istate = {
  volume: getVolume(),
  isMiniGameOpened: false,
  keyboard: getKeyboardValue(),
  paused: false,
  callback: null,
};

export { state, volumeRange, keyboardSwitch };
