import { $ } from './constain.js';

export function windowEvent() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            $('.header').classList.add('active');
            $('.header-logo__img').classList.add('small')
        } else {
            $('.header').classList.remove('active');
            $('.header-logo__img').classList.remove('samll')
        }
    })
}

export function handleSearchClick() {
    $('#header-search-btn').onclick = () => {
        $('.header-search').classList.toggle('show');
    }
    window.addEventListener('scroll', () => {
        $('.header-search').classList.remove('show')
    })
}

export function handleMenuShow() {
    document.onclick = (e) => {
        if (e.target.closest('#header-menu-open')) {
            $('.header-menu-list').classList.add('show');
        } else {
            $('.header-menu-list').classList.remove('show');
        }
    }
    $('#header-menu-close').onclick = () => {
        $('.header-menu-list').classList.remove('show');
    }
    window.addEventListener('scroll', () => {
        $('.header-menu-list').classList.remove('show')
    })
}