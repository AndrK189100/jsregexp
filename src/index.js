import './js/app.js';

import { orderByProps, getSpecialAttack } from './js/sfunctions.js';
import Daemon from './js/daemon.js';

const daemon = new Daemon('Azrail');

console.log(orderByProps(daemon, ['name', 'type']));
console.log('===================================================');
console.log(getSpecialAttack(daemon));
