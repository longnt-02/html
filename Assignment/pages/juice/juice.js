import { $ } from '../../assets/js/constain.js'
import { renderProduct } from '../../assets/js/handleRender.js';
import { windowEvent, handleSearchClick, handleMenuShow } from '../../assets/js/handleEvent.js'


(function start() {
    windowEvent();
    handleSearchClick();
    handleMenuShow();
    renderJuice()
})();

function renderJuice() {
    const juices = JSON.parse(localStorage.getItem('JUICE'));
    const juiceList = $('#juice-list');
    renderProduct({
        productlist: juiceList,
        products: juices,
    });
}