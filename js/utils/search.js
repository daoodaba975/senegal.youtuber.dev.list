import { channels } from '../data.js';
import { createChannelCard } from '../components/card.js';
import { Pagination } from './pagination.js';

export function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const devContainer = document.getElementById('devChannels');
    const othersContainer = document.getElementById('otherChannels');
    
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
            
            Pagination(filteredDevChannels, devContainer, createChannelCard);
            new Pagination(filteredOtherChannels, othersContainer, createChannelCard);
            
            
            document.querySelectorAll('.grid > div').forEach(card => {
                card.classList.add('animate-fade-in');
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50);
            });
        }, 300);
    });
}