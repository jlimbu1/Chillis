/* ==========================================================================
 * Chillis — Dragon Nest Guide
 * Shared site shell: header, navigation, footer, breadcrumb and home menu.
 * Single source of truth for the guide's category structure.
 * ========================================================================== */

(function () {
    'use strict';

    const THEME_KEY = 'chillis-theme';

    /* ------------------------------------------------------------------
     * Site data — the one place categories and pages are defined.
     * `image` is the landing-page menu button; `pages` link to guides.
     * ------------------------------------------------------------------ */
    const SITE = {
        name: 'Chillis',
        tagline: 'Dragon Nest Guide',
        categories: [
            {
                id: 'getting-started',
                label: 'Getting Started',
                image: 'https://i.imgur.com/IsaxemR.png',
                pages: [
                    { file: 'acronyms.html', title: 'General Acronyms' },
                    { file: 'leveling.html', title: 'Leveling Up' },
                ],
            },
            {
                id: 'gearing-up',
                label: 'Gearing Up',
                image: 'https://i.imgur.com/zRb53f0.png',
                pages: [
                    { file: 'gold.html', title: 'Gold Farming' },
                    { file: 'gears.html', title: 'Gears (In Progress)' },
                ],
            },
            {
                id: 'missions',
                label: 'Missions',
                image: 'https://i.imgur.com/Xk7RzFs.png',
                pages: [
                    { file: 'board.html', title: 'Mission Board' },
                    { file: 'invaders.html', title: 'Invaders' },
                ],
            },
            {
                id: 'rates',
                label: 'Rates',
                image: 'https://i.imgur.com/Ng15CTT.png',
                pages: [
                    { file: 'accessory.html', title: 'Accessory' },
                    { file: 'armor.html', title: 'Armor' },
                    { file: 'weapon.html', title: 'Weapon' },
                    { file: 'jade.html', title: 'Jade' },
                ],
            },
            {
                id: 'stats',
                label: 'Stats',
                image: 'https://i.imgur.com/evV45YU.png',
                pages: [
                    { file: 'penalty.html', title: 'Labyrinth Penalty' },
                    { file: 'runes.html', title: 'Runes' },
                    { file: 'conversion.html', title: 'Conversion' },
                    { file: 'talisman.html', title: 'Talisman' },
                ],
            },
            {
                id: 'guild',
                label: 'Guild',
                image: 'https://i.imgur.com/5O6ox8T.png',
                pages: [
                    { file: 'gmissions.html', title: 'Guild Missions' },
                    { file: 'conquest.html', title: 'Conquest' },
                    { file: 'pcs.html', title: 'Push Crystal Statue' },
                ],
            },
            {
                id: 'raids',
                label: 'Raids',
                image: 'https://i.imgur.com/7fgoshN.png',
                pages: [
                    { file: 'tdn.html', title: 'PTN / TDN / TTN' },
                    { file: 'ddn.html', title: 'Desert Dragon Nest (DDN)' },
                    { file: 'fdn.html', title: 'Forest Dragon Nest (FDN / FDN HC)' },
                    { file: 'gudn.html', title: 'Gust Dragon Nest (GUDN / GUDNHC)' },
                ],
            },
            {
                id: 'weekly-nests',
                label: 'Weekly Nests',
                image: 'https://i.imgur.com/nZBudUi.png',
                pages: [
                    { file: 'frozennest.html', title: 'Frozen Nest' },
                    { file: 'fm.html', title: 'Fission Maze' },
                    { file: 'fnm.html', title: 'Frozen Nightmare' },
                ],
            },
            {
                id: 'buffs',
                label: 'Buffs',
                image: 'https://i.imgur.com/LUFKRW7.png',
                pages: [
                    { file: 'adaptability.html', title: 'Frozen Adaptability' },
                    { file: 'buffs.html', title: 'Buffs' },
                ],
            },
            {
                id: 'farm',
                label: 'Farm & Hot Spring',
                image: 'https://i.imgur.com/nXM6Lsd.png',
                pages: [
                    { file: 'farm.html', title: 'Farm / Cook / Fish' },
                    { file: 'hotspring.html', title: 'Hot Spring' },
                ],
            },
        ],
    };

    /* ------------------------------------------------------------------
     * Current page resolution
     * ------------------------------------------------------------------ */
    const path = window.location.pathname;
    let currentFile = path.substring(path.lastIndexOf('/') + 1);
    if (!currentFile) currentFile = 'index.html';
    const isHome = currentFile === 'index.html';

    const pageBase = isHome ? 'pages/' : '';
    const homeHref = isHome ? 'index.html' : '../index.html';

    let currentCategory = null;
    let currentPage = null;
    for (const category of SITE.categories) {
        for (const page of category.pages) {
            if (page.file === currentFile) {
                currentCategory = category;
                currentPage = page;
                break;
            }
        }
        if (currentCategory) break;
    }

    /* ------------------------------------------------------------------
     * Small helpers
     * ------------------------------------------------------------------ */
    function esc(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function icon(name) {
        const paths = {
            sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
            moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
            warn: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        };
        return (
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            (paths[name] || '') +
            '</svg>'
        );
    }

    /* ------------------------------------------------------------------
     * Header
     * ------------------------------------------------------------------ */
    function buildHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;

        let nav = '';
        if (!isHome) {
            const items = SITE.categories
                .map((category) => {
                    const dropdownId = 'dropdown-' + category.id;
                    const expanded = currentCategory === category ? 'true' : 'false';
                    const links = category.pages
                        .map((page) => {
                            const active = currentPage === page ? ' is-active' : '';
                            const current = currentPage === page ? ' aria-current="page"' : '';
                            return (
                                '<li><a class="dropdown-link' +
                                active +
                                '" href="' +
                                esc(pageBase + page.file) +
                                '"' +
                                current +
                                '><span class="cat-dot cat-' +
                                esc(category.id) +
                                '"></span>' +
                                esc(page.title) +
                                '</a></li>'
                            );
                        })
                        .join('');

                    return (
                        '<li class="nav-item has-dropdown">' +
                        '<button class="nav-link' +
                        (currentCategory === category ? ' is-active' : '') +
                        '" type="button" aria-expanded="' +
                        expanded +
                        '" aria-controls="' +
                        dropdownId +
                        '">' +
                        esc(category.label) +
                        '<span class="nav-chevron" aria-hidden="true"></span></button>' +
                        '<ul class="dropdown' +
                        (currentCategory === category ? ' is-open' : '') +
                        '" id="' +
                        dropdownId +
                        '">' +
                        links +
                        '</ul></li>'
                    );
                })
                .join('');

            nav =
                '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation">' +
                '<span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span></button>' +
                '<ul class="nav-menu" id="nav-menu">' +
                items +
                '</ul>';
        }

        header.innerHTML =
            '<div class="header-inner">' +
            '<a class="brand" href="' +
            esc(homeHref) +
            '">' +
            '<span class="brand-mark" aria-hidden="true">C</span>' +
            '<span class="brand-text">' +
            esc(SITE.name) +
            '<small>' +
            esc(SITE.tagline) +
            '</small></span></a>' +
            '<div class="header-spacer"></div>' +
            '<nav class="main-nav" aria-label="Guide sections">' +
            nav +
            '</nav>' +
            '<button class="theme-toggle" type="button" aria-label="Toggle color theme">' +
            '<span class="icon-sun">' +
            icon('sun') +
            '</span><span class="icon-moon">' +
            icon('moon') +
            '</span></button>' +
            '</div>';
    }

    /* ------------------------------------------------------------------
     * Breadcrumb
     * ------------------------------------------------------------------ */
    function buildBreadcrumb() {
        const crumb = document.getElementById('breadcrumb');
        if (!crumb || isHome) return;

        const parts = [
            '<li><a href="' + esc(homeHref) + '">Home</a></li>',
        ];
        if (currentCategory) {
            parts.push(
                '<li><span class="cat-' +
                    esc(currentCategory.id) +
                    '">' +
                    esc(currentCategory.label) +
                    '</span></li>'
            );
        }
        parts.push(
            '<li><span aria-current="page">' +
                esc(currentPage ? currentPage.title : document.title) +
                '</span></li>'
        );

        crumb.innerHTML =
            '<ol>' + parts.join('') + '</ol>';
    }

    /* ------------------------------------------------------------------
     * Footer
     * ------------------------------------------------------------------ */
    function buildFooter() {
        const footer = document.getElementById('site-footer');
        if (!footer) return;

        const contacts = [
            {
                heading: 'Discord',
                members: [
                    ['GM', 'imfiar#5818'],
                    ['VGM', 'rae#0738'],
                    ['VGM', 'Kiritoislegit1#6618'],
                    ['VGM', 'PutetoN™#8592'],
                    ['VGM', 'Chu#1269'],
                    ['VGM', 'Cheng#6879'],
                    ['VGM', 'cecilus#8123'],
                ],
            },
            {
                heading: 'In-Game',
                members: [
                    ['GM', 'Jyuyu'],
                    ['VGM', 'Rissuu'],
                    ['VGM', 'MisakiEn'],
                    ['VGM', 'D3mokrasya'],
                    ['VGM', 'NicoleJash'],
                    ['VGM', 'xChengLord'],
                    ['VGM', 'Cecilus'],
                ],
            },
        ];

        const contactHtml = contacts
            .map((group) => {
                const items = group.members
                    .map(
                        (m) =>
                            '<li><strong>' +
                            esc(m[0]) +
                            ':</strong> ' +
                            esc(m[1]) +
                            '</li>'
                    )
                    .join('');
                return (
                    '<ul><li class="contact-heading">' +
                    esc(group.heading) +
                    '</li>' +
                    items +
                    '</ul>'
                );
            })
            .join('');

        footer.innerHTML =
            '<div class="footer-inner">' +
            '<div class="footer-col footer-about">' +
            '<h2>About Us</h2>' +
            '<img src="https://i.imgur.com/oxMmhVK.png" alt="Chillis guild base" loading="lazy" decoding="async">' +
            '<p>' +
            esc(SITE.name) +
            ' is a Level 38 International Guild with members from ' +
            '<img class="country-flag" src="https://i.imgur.com/0naAHUo.png" alt="countries" loading="lazy" decoding="async">' +
            ' and more. We are an extremely driven and active bunch of people, both in-game and on Discord. ' +
            'We want to build a better and strong community for like-minded players. Come meet us in our guild base ' +
            'located in Channel 13 Wonderful Themepark.' +
            '</p>' +
            '</div>' +
            '<div class="footer-col">' +
            '<h2>Contact Us</h2>' +
            '<div class="footer-contact">' +
            contactHtml +
            '</div>' +
            '</div>' +
            '</div>';
    }

    /* ------------------------------------------------------------------
     * Home page image menu
     * ------------------------------------------------------------------ */
    function buildHomeMenu() {
        const mount = document.getElementById('home-menu');
        if (!mount || !isHome) return;

        const items = SITE.categories
            .map((category) => {
                const links = category.pages
                    .map(
                        (page) =>
                            '<li><a href="' +
                            esc(pageBase + page.file) +
                            '"><span class="cat-dot cat-' +
                            esc(category.id) +
                            '"></span>' +
                            esc(page.title) +
                            '</a></li>'
                    )
                    .join('');
                return (
                    '<div class="menu-item cat-' +
                    esc(category.id) +
                    '">' +
                    '<button class="menu-button" type="button" aria-expanded="false">' +
                    '<img src="' +
                    esc(category.image) +
                    '" alt="' +
                    esc(category.label) +
                    '" loading="lazy" decoding="async"></button>' +
                    '<ul class="menu-dropdown">' +
                    links +
                    '</ul></div>'
                );
            })
            .join('');

        mount.innerHTML = items;
    }

    /* ------------------------------------------------------------------
     * Interactions
     * ------------------------------------------------------------------ */
    function closeAllDropdowns(except) {
        document.querySelectorAll('.dropdown.is-open').forEach((dd) => {
            if (dd !== except) {
                dd.classList.remove('is-open');
                const trigger = dd.parentElement.querySelector('.nav-link');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function closeAllMenuItems(except) {
        document.querySelectorAll('.menu-item.is-open').forEach((item) => {
            if (item !== except) {
                item.classList.remove('is-open');
                const btn = item.querySelector('.menu-button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function bindNav() {
        document.querySelectorAll('.nav-item.has-dropdown').forEach((item) => {
            const trigger = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown');
            if (!trigger || !dropdown) return;

            trigger.addEventListener('click', () => {
                const isOpen = dropdown.classList.contains('is-open');
                closeAllDropdowns(dropdown);
                dropdown.classList.toggle('is-open', !isOpen);
                trigger.setAttribute('aria-expanded', String(!isOpen));
            });
        });

        const toggle = document.querySelector('.nav-toggle');
        const menu = document.getElementById('nav-menu');
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const isOpen = menu.classList.toggle('is-open');
                toggle.setAttribute('aria-expanded', String(isOpen));
            });
        }
    }

    function bindHomeMenu() {
        document.querySelectorAll('.menu-item').forEach((item) => {
            const button = item.querySelector('.menu-button');
            if (!button) return;

            button.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                closeAllMenuItems(item);
                item.classList.toggle('is-open', !isOpen);
                button.setAttribute('aria-expanded', String(!isOpen));
            });
        });
    }

    function bindGlobalClosers() {
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.nav-item') && !event.target.closest('.nav-toggle')) {
                closeAllDropdowns();
            }
            if (!event.target.closest('.menu-item')) {
                closeAllMenuItems();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeAllDropdowns();
                closeAllMenuItems();
                const toggle = document.querySelector('.nav-toggle');
                const menu = document.getElementById('nav-menu');
                if (toggle && menu && menu.classList.contains('is-open')) {
                    menu.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
                if (event.target.closest('.nav-link') || event.target.closest('.menu-button')) {
                    event.target.closest('.nav-link, .menu-button').focus();
                }
            }
        });
    }

    /* ------------------------------------------------------------------
     * Theme
     * ------------------------------------------------------------------ */
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            /* storage may be unavailable (private mode) — ignore */
        }
    }

    function bindTheme() {
        const toggle = document.querySelector('.theme-toggle');
        if (!toggle) return;

        const stored = (function () {
            try {
                return localStorage.getItem(THEME_KEY);
            } catch (error) {
                return null;
            }
        })();

        applyTheme(stored || 'dark');

        toggle.addEventListener('click', () => {
            const next =
                document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    /* ------------------------------------------------------------------
     * Init
     * ------------------------------------------------------------------ */
    function init() {
        buildHeader();
        buildBreadcrumb();
        buildFooter();
        buildHomeMenu();
        bindNav();
        bindHomeMenu();
        bindGlobalClosers();
        bindTheme();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
