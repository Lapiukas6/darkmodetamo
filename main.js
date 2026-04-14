// ==UserScript==
// @name         tamo
// @namespace    http://tampermonkey.net/
// @version      2026-02-23
// @description  tamo dark mode theme
// @author       lapiukas5
// @match        https://dienynas.tamo.lt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tamo.lt
// @downloadURL  https://raw.githubusercontent.com/Lapiukas6/darkmodetamo/refs/heads/main/main.js
// @updateURL    https://raw.githubusercontent.com/Lapiukas6/darkmodetamo/refs/heads/main/main.js
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement("style");
    style.textContent = `
        :root {
            --dark-tamo-bg-out: #141414;
            --dark-tamo-bg-main: #111;
            --dark-tamo-bg-border: #121212;
            --dark-tamo-bg-footer: #151515;
            --dark-tamo-bg-light: #222;
            --dark-tamo-bg-lighter: #888;
            --dark-tamo-bg-title: #1C3E50;
            --dark-tamo-bg-title-red: #770000;

            --dark-tamo-blue: #4E8FA6;
            --dark-tamo-blue-selected: #7EBFD6;

            --dark-tamo-text-white: #CCC;

            --dark-tamo-baseiconcolor: #86b3cb;

        }

        html {
            background-color: var(--dark-tamo-bg-out);
        }

        #c_main, #s_menu, .full_height_col  {
            background-color: var(--dark-tamo-bg-main);
        }

        .fad.fa-check-circle::after, .fa-check-circle::before {
           content: "";
        }

        .container {
            background-color: var(--dark-tamo-bg-border);
        }

        .more_details div {
            color: #AAA;
        }

        .more_details div label {
            color: #666;
        }

        .row, .s_menu_title span, .s_menu_title a, .s_menu_title i, body .c_tamo_tabs .tab_header li.active a, .tamo-session  {
            color: var(--dark-tamo-text-white) !important;
        }

        div[style*="color:#3F6877"] {
            color: var(--dark-tamo-blue) !important;
        }

        div[style~="border-bottom:solid"], .c_tamo_tabs .tab_header, .border-6, .border-4, .col-md-14.tcell {
            border-bottom: solid 2px #242424 !important;
        }

        #s_menu ul li ol li {
            color: var(--dark-tamo-blue);
        }

        .table td {
            color: var(--dark-tamo-text-white) !important;
            border-color: #242424 !important;
        }

        .col-md-4 div {
            color: #000 !important;
        }

        .page_header h3 {
            color: #AAA;
        }

        .is-selected {
            background-color: #151515 !important;
            color: var(--dark-tamo-blue-selected) !important;
        }

        #s_menu ol li:hover {
            background-color: #151515 !important;
            color: var(--dark-tamo-blue-selected) !important;
        }

        .s_menu_title {
            background-color: var(--dark-tamo-bg-title);
        }

        .s_menu_title.icon_mobile {
            background-color: var(--dark-tamo-bg-title-red) !important;
        }

        .s_menu_title[style*="background-color:#EC5152"]{
            background-color: var(--dark-tamo-bg-title-red) !important;
        }

        .academic_months a {
            background-image:
            linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)),
            url("/content/img/month_button.png");
            color: var(--dark-tamo-text-white);
        }

        #top_section .col-md-14 div, #header_section .col-md-14 div, #session_section .col-md-14 div, #footer_section .col-md-14 div {
            background-color: var(--dark-tamo-bg-footer);
        }

        .border-all td, .border-all th {
            border: solid 1px var(--dark-tamo-bg-light);
        }

        #s_menu {
            border-right: solid 1px #242424;
        }

        body .c_tamo_tabs .tab_header li.active {
            background-color: var(--dark-tamo-bg-title) !important;
        }

        body .c_tamo_tabs .tab_header li:hover {
            background-color: #151515 !important;
        }

        body .c_tamo_tabs .tab_header li.active:hover {
            background-color: var(--dark-tamo-bg-title) !important;
        }

        .infomessage_severity_0 {
            background: linear-gradient(to right,#1b1a1a 0%,#093e4e 50%,#3aa59c 100%)
        }

        .header-box > div > div {
            border-left: 1px solid #242424 !important;
        }

        .header-box * {
            color: var(--dark-tamo-blue-selected) !important;
        }

        .col-md-10 * {
            color: var(--dark-tamo-blue-selected) !important;
        }

        .col-md-4 .c_btn.primary, .col-md-8 select, .col-md-4 select, .col-md-3 input {
            background-color: var(--dark-tamo-bg-border) !important;
            border-color: var(--dark-tamo-bg-light) !important;
            border: 2px solid;
        }

        .col-md-3 .input-group i {
            color: var(--dark-tamo-bg-lighter) !important;
        }

        .col-md-2 .f-header {
            background-color: var(--dark-tamo-bg-light) !important;
        }



        #unread_msg_count_badge {
            color: #FFF !important;
            border-color: var(--dark-tamo-baseiconcolor) !important;
            background-color: var(--dark-tamo-bg-title-red) !important;
        }

        .namu_darbai_tabs .col-md-2 div {
            background-color: var(--dark-tamo-bg-border) !important;
        }

        .analytic-widget .title {
           background-color: var(--dark-tamo-bg-light) !important;
           border-color: var(--dark-tamo-bg-light) !important;
        }

        .analytic-widget {
          border-color: var(--dark-tamo-bg-light) !important;
        }

        .table-hover > tbody > tr:hover {
          background-color: var(--dark-tamo-bg-light) !important;
        }

        .td {
          border-color: var(--dark-tamo-bg-light) !important;
        }

        .th {
          border-color: var(--dark-tamo-bg-light) !important;
        }

        .td:hover {
          background-color: var(--dark-tamo-bg-light) !important;
        }







    `;
    document.head.appendChild(style);

    // extras

    const map = {
        "geografija": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth-icon lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>`,
        "biologija": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-microscope-icon lucide-microscope"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`,
        "lietuvi": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-a-icon lucide-book-a"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7"/><path d="M9.1 11h5.7"/></svg>`,
        "matematika": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
        "kalba": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-type-icon lucide-book-type"><path d="M10 13h4"/><path d="M12 6v7"/><path d="M16 8V6H8v2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>`,
        "istorija": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock4-icon lucide-clock-4"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        "etika": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-plus-icon lucide-smile-plus"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/></svg>`,
        "tikyba": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-plus-icon lucide-smile-plus"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/></svg>`,
        "chemija": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>`,
        "fizika": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-telescope-icon lucide-telescope"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/></svg>`,
        "gyvenimo": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/></svg>`,
        "dail": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
        "pilieti": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-plus-icon lucide-smile-plus"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/></svg>`,
    };

    const defaultsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-question-mark-icon lucide-file-question-mark"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 17h.01"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/></svg>`




    function addIcon(icon) {
        let zenklas = icon.closest(".row");

        if (icon.parentElement.dataset.replaced) return;

        // find the corresponding key column
        const col1 = zenklas.querySelector('.col-md-1');
        if (!col1){
            //console.warn("[DARK-TAMO] Couldn't find icon reference, icons may not appear")
            return;
        }

        const col13 = zenklas.querySelector('.col-md-13');
        if (!col13){
            //console.warn("[DARK-TAMO] Couldn't find key reference, icons may not appear")
            return;
        }

        let matchedSvg = defaultsvg
        const keyText = col13.textContent.trim().toLowerCase();

        for (const [key, value] of Object.entries(map)) {
            if (keyText.includes(key.toLowerCase())) {
                matchedSvg = value.trim();
                break; // stop after first match
            }
        }

        // if none match, add default

        zenklas.dataset.replaced = 'true';


        icon.parentElement.dataset.replaced = 'true';

                // remove the original icon


                // inject SVG
                const wrapper = document.createElement('div');
                wrapper.innerHTML = matchedSvg;
                icon.appendChild(wrapper.firstChild);
    }

    // run once in case elements are already loaded


    // function to attach observer to any selector
    function observeContainer(selector) {
        const el = document.querySelector(selector);
        if (!el) return;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {

                        // Or <i> inside something that was added
                        if (node.nodeType === 1) {
                            const icons = node.querySelectorAll?.("i");
                            icons?.forEach((icon) => {
                                console.log("<i> added inside:", icon);
                                addIcon(icon);
                            });
                        }
                    });
                }
            });
        });


        observer.observe(el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ["class"]
        });
    }


    observeContainer('#namu_darbai_tabs');





})();