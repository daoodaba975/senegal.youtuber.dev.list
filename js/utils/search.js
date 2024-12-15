import { channels } from '../data.js';
import { createChannelCard } from '../components/card.js';
import { Pagination } from './pagination.js';

export function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
    
            const filteredDevChannels = channels.dev.filter(channel => 
                channel.name.toLowerCase().includes(searchTerm)
            );
            const filteredOtherChannels = channels.others.filter(channel => 
                channel.name.toLowerCase().includes(searchTerm)
            );
    
        
            const devContainer = document.getElementById('devChannels');
            const othersContainer = document.getElementById('otherChannels');
            new Pagination(filteredDevChannels, devContainer, createChannelCard);
            new Pagination(filteredOtherChannels, othersContainer, createChannelCard);
        }, 300);
    });
}    