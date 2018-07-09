'use strict';
function o (el) {
    return document.getElementById(el);
}
// ------------------------------------------------------------------interface logic and object containing variables starting up here--------------------------------------------------------

var box = {
    navButtonTop: o('nav-extend-button'),
    navDropTop: o('nav-extend-drop-block'),
    navTopState: false,
    navButtonBottom: o('bottom-section-extend-button'),
    navDropBottom: o('bottom-section-extend-drop-block'),
    navBottomState: false,
    mobileSearchBlock: o('mobile-search-block'),
    mobileSearchButton: o('mobile-search-button'),
    mobileDropWrap: o('mobile-search-wrap'),
    mobileSearchForm: o('mobile-search-form'),
    mobileSearchInput: o('mobile-search-input'),
    mobileCloseSearchButton: o('mobile-close-search'),
    mobileSearchState: false,
    desktopSearchBlock: o('desktop-search-block'),
    desktopSearchButton: o('desktop-search-button'),
    desktopDropWrap: o('desktop-search-wrap'),
    desktopSearchForm: o('desktop-search-form'),
    desktopSearchInput: o('desktop-search-input'),
    desktopCloseSearchButton: o('desktop-close-search-button'),
    desktopSearchState: false,
    subheaderLinksBlock: o('desktop-subheader-bottom'),
    mostReadedBlock: o('most-readed-block'),
    mobileCategoryBlock: o('mobile-category-block'),
    mobileCategoryButton: o('mobile-chosen-button'),
    mobileChevronWrap: o('mobile-chevron-wrap'),
    mobileCategoryDrop: o('mobile-categories-drop'),
    mobileCategoryState: false,
    desktopCategoryBlock: o('desktop-category-block'),
    desktopCategoryButton: o('desktop-chosen-button'),
    desktopChevronWrap: o('desktop-chevron-wrap'),
    desktopCategoryDrop: o('desktop-categories-drop'),
    desktopCategoryState: false,
};
// -----------------------------------mobile buttons for extending menu starting up here-------------------------------------------------------------
box.navButtonTop.onclick = function (e) {
    e.stopPropagation();
    while(box.navBottomState || box.mobileSearchState) {
        box.navDropBottom.style.display = 'none';
        box.navBottomState = false;
        box.mobileSearchBlock.style.position = 'static';
        box.mobileSearchBlock.style.border = '1px solid transparent';
        box.mobileDropWrap.style.width = 0;
        box.mobileDropWrap.style.visibility = 'hidden';
        box.mobileSearchInput.style.width = 0;
        box.mobileSearchButton.classList.add('search-collapsed');
        box.mobileSearchState = false;
    }
    if (!box.navTopState) {
        box.navDropTop.style.display = 'block';
        box.navTopState = true;
    } else {
        box.navDropTop.style.display = 'none';
        box.navTopState = false;
    }
};
box.navButtonBottom.onclick = function(e) {
    e.stopPropagation();
    while(box.navTopState || box.mobileSearchState) {
        box.navDropTop.style.display = 'none';
        box.navTopState = false;
        box.mobileSearchBlock.style.position = 'static';
        box.mobileSearchBlock.style.border = '1px solid transparent';
        box.mobileDropWrap.style.width = 0;
        box.mobileDropWrap.style.visibility = 'hidden';
        box.mobileSearchInput.style.width = 0;
        box.mobileSearchButton.classList.add('search-collapsed');
        box.mobileSearchState = false;
    }
    if (!box.navBottomState) {
        box.navDropBottom.style.display = 'block';
        box.navBottomState = true;
    } else {
        box.navDropBottom.style.display = 'none';
        box.navBottomState = false;
    }
};
// -----------------------------------search form and buttons logic starting up here-------------------------------------------------------------
box.mobileSearchButton.onclick = function(e) {
    e.stopPropagation();
    box.mobileSearchBlock.style.position = 'absolute';
    box.mobileSearchBlock.style.border = '1px solid rgb(205, 213, 217)';
    box.mobileDropWrap.style.width = '100%';
    box.mobileDropWrap.style.visibility = 'visible';
    box.mobileSearchInput.style.width = 'calc(96vw - 79px)';
    box.mobileSearchInput.focus();
    box.mobileSearchButton.classList.remove('search-collapsed');
    box.mobileSearchState = true;
};
box.mobileCloseSearchButton.onclick = function(e) {
    e.stopPropagation();
    box.mobileSearchBlock.style.position = 'static';
    box.mobileSearchBlock.style.border = '1px solid transparent';
    box.mobileDropWrap.style.width = 0;
    box.mobileDropWrap.style.visibility = 'hidden';
    box.mobileSearchInput.style.width = 0;
    box.mobileSearchForm.reset();
    box.mobileSearchButton.classList.add('search-collapsed');
    box.mobileSearchState = false;
};

box.desktopSearchButton.onclick = function(e) {
    e.stopPropagation();
    box.desktopSearchBlock.style.position = 'relative';
    box.desktopSearchBlock.style.border = '1px solid rgb(205, 213, 217)';
    box.desktopDropWrap.style.width = '100%';
    box.desktopDropWrap.style.visibility = 'visible';
    box.desktopSearchInput.style.width = '715px';
    box.desktopSearchInput.focus();
    box.desktopSearchButton.classList.remove('search-collapsed');
    box.subheaderLinksBlock.style.display = 'none';
    box.desktopSearchState = true;
};
box.desktopCloseSearchButton.onclick = function(e) {
    e.stopPropagation();
    box.desktopSearchBlock.style.position = 'static';
    box.desktopSearchBlock.style.border = '1px solid transparent';
    box.desktopDropWrap.style.width = 0;
    box.desktopDropWrap.style.visibility = 'hidden';
    box.desktopSearchInput.style.width = 0;
    box.desktopSearchForm.reset();
    box.desktopSearchButton.classList.add('search-collapsed');
    box.subheaderLinksBlock.style.display = 'flex';
    box.desktopSearchState = false;
};
// -----------------------------------buttons logic for chosen categories starting up here-------------------------------------------------------------
box.mobileCategoryButton.onclick = function(e) {
    e.stopPropagation();
    if(!box.mobileCategoryState) {
        box.mobileCategoryDrop.style.display = 'block';
        box.mobileCategoryButton.classList.add('active-category-button');
        box.mobileCategoryBlock.classList.add('active-categories-block');
        box.mobileChevronWrap.classList.add('active-chevron');
        box.mobileCategoryState = true;
    } else {
        box.mobileCategoryDrop.style.display = 'none';
        box.mobileCategoryButton.classList.remove('active-category-button');
        box.mobileCategoryBlock.classList.remove('active-categories-block');
        box.mobileChevronWrap.classList.remove('active-chevron');
        box.mobileCategoryState = false;
    }
};
box.desktopCategoryButton.onclick = function(e) {
    e.stopPropagation();
    if(!box.desktopCategoryState) {
        box.desktopCategoryDrop.style.display = 'block';
        box.desktopCategoryButton.classList.add('active-category-button');
        box.desktopCategoryBlock.classList.add('active-categories-block');
        box.desktopChevronWrap.classList.add('active-chevron');
        box.desktopCategoryState = true;
    } else {
        box.desktopCategoryDrop.style.display = 'none';
        box.desktopCategoryButton.classList.remove('active-category-button');
        box.desktopCategoryBlock.classList.remove('active-categories-block');
        box.desktopChevronWrap.classList.remove('active-chevron');
        box.desktopCategoryState = false;
    }
};

// var scrollState = false;
// // function sticky() {
    
//     function stick(t) {
//         scrollState = true;
//         var currentPos = document.body.scrollTop;
//         if(document.body.scrollTop > 700 && document.body.scrollTop < 3675) {
//             box.mostReadedBlock.style.position = 'absolute';
//             box.mostReadedBlock.style.top = currentPos + 20 + 'px';
//         } else if(document.body.scrollTop < 700) {
//             box.mostReadedBlock.style.position = 'static';
//             box.mostReadedBlock.style.top = '20px';
//         } else if(document.body.scrollTop > 3675) {
//             box.mostReadedBlock.style.position = 'absolute';
//             box.mostReadedBlock.style.top = '3701px';
//         }
//         // if(box.mostReadedBlock.style.top !== '20px' && box.mostReadedBlock.style.top !== '3701px') {
//         //     window.requestAnimationFrame(stick);
//         //     scrollState = true;
//         // } else {
//         //     scrollState = false;
//         // }
//         window.requestAnimationFrame(stick);
//     }
// // }
// window.requestAnimationFrame(stick);

// // if (window.getComputedStyle(box.mostReadedBlock, null).display === 'block') {
// //     if (box.mostReadedBlock.style!=='20px' && !scrollState) {
// //         setInterval(sticky, 100);
// //     }
    
// // }

// -----------------------------------sticky rated-news block logic starting up here-------------------------------------------------------------
if (window.getComputedStyle(box.mostReadedBlock, null).display === 'block') {
    window.addEventListener('scroll', sticky, false);
    function sticky() {
        window.requestAnimationFrame(stick);
        function stick(t) {
            var scrollPos = document.documentElement.scrollTop;
            if(scrollPos > 700 && scrollPos < 3675) {
                box.mostReadedBlock.style.position = 'fixed';
                box.mostReadedBlock.style.top = '20px';
            } else if(scrollPos < 700) {
                box.mostReadedBlock.style.position = 'static';
            } else if(scrollPos > 3675) {
                box.mostReadedBlock.style.position = 'absolute';
                box.mostReadedBlock.style.top = '3701px';
            }
        }
    }
}
// -----------------------------------state watcher for interface elements starting up here-------------------------------------------------------------
window.addEventListener('click', stateWatch, false);
function stateWatch(e) {
    if (box.navTopState) {
        box.navDropTop.style.display = 'none';
        box.navTopState = false;
    }
    if (box.navBottomState) {
        box.navDropBottom.style.display = 'none';
        box.navBottomState = false;
    }
}