import { channels } from './data.js';
import { createChannelCard } from './components/card.js';
import { Pagination } from './utils/pagination.js';
import { setupSearch } from './utils/search.js';
import { animateOnScroll } from './utils/animations.js';
import { setupTheme } from './utils/theme.js';

function initializeApp() {
    const devContainer = document.getElementById('devChannels');
    const othersContainer = document.getElementById('otherChannels');

    setupTheme();

    new Pagination(channels.dev, devContainer, createChannelCard);
    new Pagination(channels.others, othersContainer, createChannelCard);

    setupSearch();

    animateOnScroll();
}

document.addEventListener('DOMContentLoaded', initializeApp);