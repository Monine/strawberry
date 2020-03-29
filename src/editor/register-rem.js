import Vue from 'vue';
import rem from '@/renderer/rem';
import { MOBILE_PHONE_WIDTH } from './constants';

Vue.prototype.rem = rem(MOBILE_PHONE_WIDTH);
