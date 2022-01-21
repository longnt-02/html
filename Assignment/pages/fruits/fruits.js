import { $ } from '../../assets/js/constain.js'
import { renderProduct } from '../../assets/js/handleRender.js';
import { windowEvent, handleSearchClick, handleMenuShow } from '../../assets/js/handleEvent.js'


(function start() {
    windowEvent();
    handleSearchClick();
    handleMenuShow();
    renderFruits()
})();

function renderFruits() {
    const fruits = JSON.parse(localStorage.getItem('FRUITS'));
    const fruitsList = $('#fruits-list');
    renderProduct({
        productlist: fruitsList,
        products: fruits,
    });
}