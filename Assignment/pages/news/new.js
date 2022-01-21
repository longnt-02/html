import { $ } from './../../assets/js/constain.js'
import { renderNews } from '../../assets/js/handleRender.js';
import { windowEvent, handleSearchClick, handleMenuShow } from '../../assets/js/handleEvent.js'


(function start() {
    windowEvent();
    handleSearchClick();
    handleMenuShow();
    renderNewsList()
})();

function renderNewsList() {
    const news = JSON.parse(localStorage.getItem('NEWS'));
    const newsList = $('.news-content-list');
    renderNews({
        newsList: newsList,
        news: news,
    });
}