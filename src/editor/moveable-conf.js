import { COMPONENT_TYPE } from '@/renderer/constants';

export default {
  [COMPONENT_TYPE.block]: {
    draggable: true,
  },

  [COMPONENT_TYPE.picture]: {
    draggable: true,
    resizable: true,
    // rotatable: true,
  },
};
