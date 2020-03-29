import { MOBILE_PHONE_MIN_HEIGHT } from './constants';
import { UPDATE_EDIT_AREA_DRAG_HEIGHT } from './store/mutation-types';

export default function(store) {
  let knobing = '';
  let { editAreaHeight } = store.getters;
  // const elEditArea = document.querySelector('.edit-area');

  window.addEventListener('mousedown', e => {
    if (e.target.dataset.knob) {
      editAreaHeight = store.getters.editAreaHeight;
      knobing = e.target.dataset.knob;
    }
  });

  window.addEventListener('mousemove', e => {
    // 防止移动时选中元素
    if (e.preventDefault) e.preventDefault();

    if (knobing) {
      if ('top' === knobing) {
        editAreaHeight -= e.movementY;
      } else if ('bottom' === knobing) {
        editAreaHeight += e.movementY;
      }
      if (editAreaHeight >= MOBILE_PHONE_MIN_HEIGHT) {
        // elEditArea.style.height = `${editAreaHeight}px`;
        store.commit(UPDATE_EDIT_AREA_DRAG_HEIGHT, editAreaHeight);
      }
    }
  });

  window.addEventListener('mouseup', () => {
    if (knobing) {
      knobing = '';
    }
  });
}
