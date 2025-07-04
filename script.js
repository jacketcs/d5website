// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to scroll to specific sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Expandable content functionality
function toggleExpand(button) {
    const expandedContent = button.nextElementSibling;
    const isExpanded = expandedContent.classList.contains('active');
    
    // Close all other expanded content
    document.querySelectorAll('.expanded-content.active').forEach(content => {
        if (content !== expandedContent) {
            content.classList.remove('active');
            content.previousElementSibling.textContent = content.previousElementSibling.textContent.replace('Hide', 'View').replace('Close', 'View');
        }
    });
    
    // Toggle current content
    if (isExpanded) {
        expandedContent.classList.remove('active');
        button.textContent = button.textContent.replace('Hide', 'View').replace('Close', 'View');
    } else {
        expandedContent.classList.add('active');
        button.textContent = button.textContent.replace('View', 'Hide').replace('Learn More', 'Hide Details').replace('Read More', 'Hide Details');
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadContentFromGoogleSheet();
});



// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const topic = this.querySelector('#topic').value;
        const message = this.querySelector('#message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you within 2 business days.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#0081b9'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.calendar-item, .spotlight-card, .community-card, .news-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('p');
            const text = statNumber.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
                const target = parseInt(match[1]);
                animateCounter(statNumber, target);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Hover effects for cards
document.querySelectorAll('.calendar-item, .spotlight-card, .community-card, .news-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add some interactive elements to buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add a small bounce effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Auto-update next meeting date
function updateNextMeeting() {
    const nextMeetingElement = document.querySelector('.stat-item:first-child p');
    if (nextMeetingElement) {
        const today = new Date();
        const nextTuesday = new Date();
        const daysUntilTuesday = (2 - today.getDay() + 7) % 7;
        nextTuesday.setDate(today.getDate() + daysUntilTuesday);
        
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedDate = nextTuesday.toLocaleDateString('en-US', options);
        nextMeetingElement.textContent = formattedDate;
    }
}

// Update meeting date on page load
document.addEventListener('DOMContentLoaded', updateNextMeeting);

console.log('Berkeley District 5 website loaded successfully! 🍃');

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Expand/collapse functionality
function toggleExpand(button) {
    const expandedContent = button.nextElementSibling;
    const isExpanded = expandedContent.classList.contains('active');
    
    if (isExpanded) {
        expandedContent.classList.remove('active');
        button.textContent = button.textContent.replace('Show Less', 'Learn More');
    } else {
        expandedContent.classList.add('active');
        button.textContent = button.textContent.replace('Learn More', 'Show Less');
    }
}

// Calendar functionality
async function loadCouncilMeetings() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;

    try {
        // Try multiple CORS proxies
        const proxies = [
            'https://api.allorigins.win/raw?url=',
            'https://cors-anywhere.herokuapp.com/',
            'https://thingproxy.freeboard.io/fetch/'
        ];

        let meetings = null;
        let proxyIndex = 0;

        while (!meetings && proxyIndex < proxies.length) {
            try {
                const response = await fetch(proxies[proxyIndex] + 'https://berkeleyca.gov/meetings');
                if (response.ok) {
                    const html = await response.text();
                    meetings = parseMeetingsFromHTML(html);
                }
            } catch (error) {
                console.log(`Proxy ${proxyIndex + 1} failed, trying next...`);
            }
            proxyIndex++;
        }

        if (meetings && meetings.length > 0) {
            displayMeetings(meetings);
        } else {
            showFallbackMessage();
        }
    } catch (error) {
        console.error('Error loading meetings:', error);
        showFallbackMessage();
    }
}

function parseMeetingsFromHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const meetings = [];

    // Look for meeting information in tables or lists
    const tables = doc.querySelectorAll('table');
    const lists = doc.querySelectorAll('ul, ol');

    // Process tables
    tables.forEach(table => {
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td, th');
            if (cells.length >= 2) {
                const dateText = cells[0]?.textContent?.trim();
                const titleText = cells[1]?.textContent?.trim();
                
                if (dateText && titleText && isMeetingData(dateText, titleText)) {
                    const meeting = createMeetingObject(dateText, titleText, cells);
                    if (meeting) meetings.push(meeting);
                }
            }
        });
    });

    // Process lists
    lists.forEach(list => {
        const items = list.querySelectorAll('li');
        items.forEach(item => {
            const text = item.textContent.trim();
            if (isMeetingData(text)) {
                const meeting = createMeetingObject(text);
                if (meeting) meetings.push(meeting);
            }
        });
    });

    return meetings.slice(0, 10); // Limit to 10 meetings
}

function isMeetingData(text, title = '') {
    const meetingKeywords = ['council', 'meeting', 'agenda', 'session', 'hearing', 'workshop'];
    const hasMeetingKeyword = meetingKeywords.some(keyword => 
        text.toLowerCase().includes(keyword) || title.toLowerCase().includes(keyword)
    );
    
    const hasDate = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/i.test(text) ||
                   /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/.test(text) ||
                   /\b\d{1,2}-\d{1,2}-\d{2,4}\b/.test(text);
    
    return hasMeetingKeyword && hasDate;
}

function createMeetingObject(dateText, titleText = '', cells = []) {
    try {
        // Extract date
        const dateMatch = dateText.match(/(\w+)\s+(\d{1,2}),?\s+(\d{4})/);
        if (!dateMatch) return null;

        const month = dateMatch[1];
        const day = dateMatch[2];
        const year = dateMatch[3];

        // Extract time if available
        const timeMatch = dateText.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        const time = timeMatch ? `${timeMatch[1]}:${timeMatch[2]} ${timeMatch[3].toUpperCase()}` : 'TBD';

        // Extract location if available
        const locationMatch = dateText.match(/(City Hall|Council Chambers|Berkeley)/i);
        const location = locationMatch ? locationMatch[0] : 'City Hall';

        // Extract agenda link if available
        let agendaLink = '';
        if (cells.length > 0) {
            const linkElement = cells.find(cell => cell.querySelector('a[href*="agenda"]'));
            if (linkElement) {
                const link = linkElement.querySelector('a');
                agendaLink = link.href;
            }
        }

        return {
            date: new Date(`${month} ${day}, ${year}`),
            title: titleText || 'Berkeley City Council Meeting',
            time: time,
            location: location,
            agendaLink: agendaLink
        };
    } catch (error) {
        console.error('Error creating meeting object:', error);
        return null;
    }
}

function displayMeetings(meetings) {
    const container = document.getElementById('calendarContainer');
    if (!container) return;

    container.innerHTML = '';

    meetings.forEach(meeting => {
        const meetingElement = createMeetingElement(meeting);
        container.appendChild(meetingElement);
    });
}

function createMeetingElement(meeting) {
    const div = document.createElement('div');
    div.className = 'calendar-item';
    
    const month = meeting.date.toLocaleDateString('en-US', { month: 'short' });
    const day = meeting.date.getDate();
    
    div.innerHTML = `
        <div class="calendar-date">
            <span class="day">${day}</span>
            <span class="month">${month}</span>
        </div>
        <div class="calendar-content">
            <h3>${meeting.title}</h3>
            <div class="time">
                <i class="fas fa-clock"></i>
                ${meeting.time}
            </div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                ${meeting.location}
            </div>
            <div class="calendar-summary">
                ${meeting.agendaLink ? 
                    `<a href="${meeting.agendaLink}" target="_blank" class="btn btn-secondary">View Agenda</a>` :
                    '<p>Agenda will be posted closer to the meeting date.</p>'
                }
            </div>
        </div>
    `;
    
    return div;
}

function showFallbackMessage() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="calendar-item">
            <div class="calendar-date">
                <span class="day">--</span>
                <span class="month">--</span>
            </div>
            <div class="calendar-content">
                <h3>Council Meeting Information</h3>
                <div class="calendar-summary">
                    <p>Unable to load meeting data automatically. Please visit the official Berkeley City Council website for the most up-to-date meeting information.</p>
                    <a href="https://berkeleyca.gov/meetings" target="_blank" class="btn btn-secondary">View Official Calendar</a>
                </div>
            </div>
        </div>
    `;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            // For now, just reload all meetings since we don't have detailed filtering
            loadCouncilMeetings();
        });
    });
});

// Load meetings when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCouncilMeetings();
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Content Management System - Google Sheets Integration
async function loadContentFromGoogleSheet() {
    try {
        // Use CSV format instead of JSON - more reliable
        const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThUrQ6pZlVQGT8z6-yJBBWJwIkJL6usyXrdzW8QIjI9IzU-yqjIaXUEH9G69EfVAaZ3sY_TsGSUdJn/pub?output=csv';
        
        console.log('Fetching content from Google Sheet...');
        console.log('URL:', sheetUrl);
        
        const response = await fetch(sheetUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        console.log('CSV data received:', csvText);
        
        const contentMap = {};
        
        // Parse CSV data with proper quoted content handling
        const lines = csvText.split('\n');
        for (let i = 1; i < lines.length; i++) { // Skip header row
            const line = lines[i].trim();
            if (!line) continue;
            
            // Parse CSV with proper quote handling
            const columns = [];
            let current = '';
            let inQuotes = false;
            
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    columns.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            columns.push(current.trim()); // Add the last column
            
            if (columns.length >= 2) {
                const section = columns[0].replace(/^"|"$/g, '');
                const content = columns[1].replace(/^"|"$/g, '');
                
                if (section && content) {
                    contentMap[section] = content;
                    console.log(`Loaded: ${section} = ${content}`);
                }
            }
        }
        
        console.log('Content map:', contentMap);
        
        // Update the website content
        updateWebsiteContent(contentMap);
        
    } catch (error) {
        console.error('Error loading content from Google Sheet:', error);
        // Fallback to default content
    }
}

function updateWebsiteContent(contentMap) {
    console.log('Updating website content with:', contentMap);
    
    // Update hero section
    if (contentMap.hero_subtitle) {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            console.log('Updating hero subtitle from:', heroSubtitle.textContent, 'to:', contentMap.hero_subtitle);
            heroSubtitle.textContent = contentMap.hero_subtitle;
        } else {
            console.log('Hero subtitle element not found');
        }
    } else {
        console.log('No hero_subtitle found in content map');
    }
    
    // Update issue spotlight content
    if (contentMap.issue_1_title) {
        const issue1Title = document.querySelector('#issue-spotlight .spotlight-card:nth-child(1) h3');
        if (issue1Title) {
            issue1Title.textContent = contentMap.issue_1_title;
        }
    }
    
    if (contentMap.issue_1_description) {
        const issue1Desc = document.querySelector('#issue-spotlight .spotlight-card:nth-child(1) .spotlight-description');
        if (issue1Desc) {
            issue1Desc.textContent = contentMap.issue_1_description;
        }
    }
    
    if (contentMap.issue_2_title) {
        const issue2Title = document.querySelector('#issue-spotlight .spotlight-card:nth-child(2) h3');
        if (issue2Title) {
            issue2Title.textContent = contentMap.issue_2_title;
        }
    }
    
    if (contentMap.issue_2_description) {
        const issue2Desc = document.querySelector('#issue-spotlight .spotlight-card:nth-child(2) .spotlight-description');
        if (issue2Desc) {
            issue2Desc.textContent = contentMap.issue_2_description;
        }
    }
    
    // Update contact information
    if (contentMap.contact_phone) {
        const contactPhone = document.querySelector('.help-card:nth-child(1) p');
        if (contactPhone) {
            contactPhone.textContent = contentMap.contact_phone;
        }
    }
    
    if (contentMap.contact_email) {
        const contactEmail = document.querySelector('.help-card:nth-child(2) .help-link');
        if (contactEmail) {
            contactEmail.href = `mailto:${contentMap.contact_email}`;
            contactEmail.textContent = contentMap.contact_email;
        }
    }
    
    // Update office hours
    if (contentMap.office_hours) {
        const officeHours = document.querySelector('.help-card:nth-child(1) .hours');
        if (officeHours) {
            officeHours.innerHTML = contentMap.office_hours.replace(/\n/g, '<br>');
        }
    }
    
    // Update community ideas
    if (contentMap.community_idea_1) {
        const idea1 = document.querySelector('.community-card:nth-child(1) blockquote');
        if (idea1) {
            idea1.textContent = contentMap.community_idea_1;
        }
    }
    
    if (contentMap.community_idea_2) {
        const idea2 = document.querySelector('.community-card:nth-child(2) blockquote');
        if (idea2) {
            idea2.textContent = contentMap.community_idea_2;
        }
    }
    
    if (contentMap.community_idea_3) {
        const idea3 = document.querySelector('.community-card:nth-child(3) blockquote');
        if (idea3) {
            idea3.textContent = contentMap.community_idea_3;
        }
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchCouncilMeetings();
    loadContentFromGoogleSheet();
}); 