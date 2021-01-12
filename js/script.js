(() => {

  const initAdvsSlider = () => {
    let li = Array.from(document.querySelectorAll('.advs-list li'));
    const ul = document.querySelector('.advs-list');
    let counter = 1;

    const advHeight = li[1].clientHeight;
    console.log(advHeight)

    ul.style.transform = `translateY(-${advHeight * counter}px)`;
    ul.style.transition = '1s';

    const showAdv = ()=> {
      setInterval(() => {

        counter++;

        ul.style.transform = `translateY(-${advHeight * counter}px)`;
        ul.style.transition = 'transform 1s ease';
      }, 3000)
    }

    showAdv();


    ul.addEventListener('webkitTransitionEnd', () => {
      if (li[counter].id === 'first-clone') {
        console.log(counter)
        ul.style.transition = 'none';
        counter = 1;
        ul.style.transform = `translateY(-${advHeight * counter}px)`;
      }

    });
  }

  const initChatBtn = () => {
    const chatBtn = document.querySelector('.chat');

    chatBtn.addEventListener('click', () => {
      chatBtn.classList.add('active');
    });

    window.addEventListener('scroll', () => {
      const currentPosition = window.pageYOffset;
      const bottom = window.innerHeight - 400;

      if (currentPosition > bottom) { 
        chatBtn.classList.add('active');
      }

    });
  }

  const toggle = (selector, className) => {
    if (selector.className.includes(className)) {
      selector.classList.remove(className);  
    } else {
      selector.classList.add(className);
    }
  }

  const initBtns = () => {

    const menu = document.querySelector('.menu');
    const list = document.querySelector('.menu-list');
    const cardBtn = document.querySelector('.card');
    const cardModal = document.querySelector('.shopping-card');

    menu.addEventListener('click', () => {
      toggle(menu, 'open');
      toggle(list, 'open');
    });

    cardBtn.addEventListener('click', () => {
      toggle(cardModal, 'open');
    });
  }

  const initFilters = () => {
    const bestSellBtn = document.querySelector('.best-sellers');
    const pages = document.querySelectorAll('.page');
    console.log(pages)
    const items = document.querySelectorAll('.card');
    const bestClass = document.querySelectorAll('.best');
    const allItems = document.querySelector('.items');

    bestSellBtn.addEventListener('click', () => {
      items.forEach(el => {
        el.style.display = 'none';
      });

      bestClass.forEach(el => {
        el.style.display = 'block';
      });


      const page = document.createElement('div');
      page.classList.add('filter-best');
      // page.appendChild(x);
      allItems.appendChild(page);
      console.log(allItems)


    });
  }

  const hideMenu = () => {
    const nav = document.querySelector('.navigation');
    const prevPosition = window.pageYOffset;

    window.addEventListener('scroll', () => {
      const currentPosition = window.pageYOffset;
      
      if (currentPosition > prevPosition) {
        nav.style.transform = 'translateY(-100px)';
      } else {
        nav.style.transform = 'translateY(0px)';
      }
    });
  }

  const initSearchBar = () => {
    const searchBar = document.getElementById('search-bar');
    const itemsArr = document.querySelectorAll('.card');
    
    searchBar.addEventListener('keyup', e => {
      const searchString = e.target.value;


    });
  }

  const initPages = () => {
    const items = Array.from(document.querySelectorAll('.items'));
    const item = Array.from(document.querySelectorAll('.items .page'));
    const page = Array.from(document.querySelectorAll('.page-count p'));
    const arrows = Array.from(document.querySelectorAll('.controls i'));
    let index = 0;

    const removeActive = () => {
      page.forEach(el => {
        el.classList.remove('active');
      });
    }

    const showPage = index => {
      items[0].style.transform = `translateX(-${100 / item.length * index}%)`;
    }
    
    let currentPage = page.forEach((el, index) => {
      el.addEventListener('click', () => {

        removeActive();
        toggle(el, 'active');

        showPage(index)
      });
    });

    if (currentPage) {
      index = currentPage;
    }

    arrows[1].addEventListener('click', () => {

      if (index >= page.length - 1) {
        return;
      }
    
      removeActive();

      index++;

      page[index].classList.add('active');
      showPage(index);
    });


    arrows[0].addEventListener('click', () => {

      if (index <= 0) {
        return;
      }
    
      removeActive();

      index--;

      page[index].classList.add('active');
      showPage(index);
    });
  }

  // initAdvsSlider();
  initChatBtn();
  initBtns();
  initFilters();
  hideMenu();
  initSearchBar();
  initPages();
})();