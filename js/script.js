(() => {

  const toggle = (selector, className) => {
    if (selector.className.includes(className)) {
      selector.classList.remove(className);  
    } else {
      selector.classList.add(className);
    }
  }

  const groupItems = (arr, n) => {
    const groups = [];

    for(let i = 0; i < arr.length; i += n) {
      groups.push(arr.slice(i, i + n));
    }

    return groups;
  };

  const inventory = [
    {
      id: 0,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_anthurium-pink_variant_small_balboa_black_720x.jpg?v=1608339126',
      name: 'Pink Anthurium',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 57,
      available: true,
      light: 'bright',
      size: 'medium',
      petFriendly: true,
      airPurify: false
    },
    {
      id: 1,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_birds-nest-fern_variant_medium_grant_forest_1440x.jpg?v=1609388331',
      name: 'Bird’s Nest Fern',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 43,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'medium',
      petFriendly: false,
      airPurify: false
    },
    {
      id: 2,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_haworthia-zebra_variant_mini_hyde_cream_8e2f9097-4dc8-467c-a552-f2ac1c6f9cfc_720x.jpg?v=1601670467',
      name: 'Haworthia',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 30,
      available: false,
      light: 'low',
      size: 'mini',
      petFriendly: true,
      airPurify: true
    },
    {
      id: 3,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_variant_small_balboa_mint_720x.jpg?v=1608994469',
      name: 'Parlor Palm',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 43,
      available: true,
      light: 'low',
      size: 'medium',
      petFriendly: true,
      airPurify: false
    },
    {
      id: 4,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_petite-white-orchid_featured_720x.jpg?v=1606160377',
      name: 'Petite White Orchid',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 100,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'medium',
      petFriendly: false,
      airPurify: false
    },
    {
      id: 5,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_small_prospect_mint_720x.jpg?v=1608585896',
      name: 'Snake Plant',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 36,
      available: false,
      light: 'low',
      size: 'small',
      petFriendly: false,
      airPurify: true
    },
    {
      id: 6,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_echeveria-preta_variant_small_balboa_black_720x.jpg?v=1608312631',
      name: 'Echeveria Preta',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 46,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'mini',
      petFriendly: false,
      airPurify: true
    },
    {
      id: 7,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_white-orchid_variant_small_prospect_cream_720x.jpg?v=1603636440',
      name: 'White Orchid',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 110,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'medium',
      petFriendly: true,
      airPurify: false
    },
    {
      id: 8,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_purple-orchid_variant_small_prospect_cream_720x.jpg?v=1600369110',
      name: 'Purple Orchid',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 84,
      available: false,
      bestSell: true,
      light: 'low',
      size: 'medium',
      petFriendly: true,
      airPurify: false
    },
    {
      id: 9,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_ponytail-palm_variant_acadia_white_720x.jpg?v=1606660274',
      name: 'Ponytail Palm',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 70,
      available: false,
      bestSell: true,
      light: 'low',
      size: 'medium',
      petFriendly: false,
      airPurify: false
    },
    {
      id: 10,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_navy_720x.jpg?v=1609388101',
      name: 'Monstera Deliciosa',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 65,
      available: true,
      light: 'low',
      size: 'medium',
      petFriendly: true,
      airPurify: true
    },
    {
      id: 11,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-red_variant_acadia_white_720x.jpg?v=1606660130',
      name: 'Aglaonema',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 70,
      available: true,
      bestSell: true,
      light: 'low',
      size: 'medium',
      petFriendly: true,
      airPurify: true
    },
    {
      id: 12,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_norfolk-island-pine_variant_small_balboa_cream_720x.jpg?v=1607709584',
      name: 'Norfolk Island Pine',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 60,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'small',
      petFriendly: false,
      airPurify: false
    },
    {
      id: 13,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-jade_variant_medium_grant_mint_720x.jpg?v=1609388236',
      name: 'Pothos',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 52,
      available: false,
      light: 'low',
      size: 'small',
      petFriendly: false,
      airPurify: false
    },
    {
      id: 14,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_large_pallas_almond_720x.jpg?v=1606159693',
      name: 'Large Monstera',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 150,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'large',
      petFriendly: false,
      airPurify: true
    },
    {
      id: 15,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_large-zz-plant_variant_large_grant_pale-grey_720x.jpg?v=1600813826',
      name: 'Large ZZ Plant',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 200,
      available: true,
      bestSell: true,
      light: 'bright',
      size: 'large',
      petFriendly: true,
      airPurify: true
    },
    {
      id: 16,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_large-fiddle-leaf-fig-bush_variant_large_pallas_white_720x.jpg?v=1606159741',
      name: 'Large Fiddle Leaf Fig Bush',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 200,
      available: true,
      light: 'bright',
      size: 'large',
      petFriendly: true,
      airPurify: false
    },
    {
      id: 17,
      hero: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bird-of-paradise_featured_720x.jpg?v=1606159713',
      name: 'Large Bird of Paradise',
      description: 'Lorem ipsum dolor sit amet.',
      brand: 'PlantShop',
      price: 167,
      available: false, 
      bestSell: true,
      light: 'low',
      size: 'large',
      petFriendly: true,
      airPurify: true
    },
  ];

  let filters = [];

  const productTemplate = product => `
    <div class="card" data-id="${product.id}">
      <img src="${product.hero}" alt="${product.name}">
      <div class="plant-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="brand">${product.brand}</p>
          <p class="price">${product.price}$</p>
          <p>${product.available ? 'available' : 'sold out'}</p>
          <button class="buy">Add to Card</button>
      </div>
    </div>
  `;

  const productPageTemplate = products => `
    <div class="page">
      ${products.map(p => productTemplate(p)).join('')}
    </div>
  `;

  const renderProducts = products => {
    const groups = groupItems(products, 6);
    
    const pagesHtml = groups
      .map(group => productPageTemplate(group))
      .join('');

    let pages;

    for (let i = 0; i < groups.length; i++) {
      pages += `<p>${i + 1}</p>`;

      if (i === 0) {
        pages = `<p class="active">${i + 1}</p>`;
      }
    }

    const items = document.querySelector('#catalogue .items');
    const pagesContainer = document.querySelector('.page-count');
    

    items.innerHTML = pagesHtml;
    pagesContainer.innerHTML = pages;

  };

  const cardModal = document.querySelector('.shopping-card');

  const initShoppingCard = () => {
    const cardBtn = document.querySelector('.items-card');
    const backBtn = cardModal.querySelector('.back');
    const closeBtn = cardModal.querySelector('.close');

    cardBtn.addEventListener('click', () => {
      toggle(cardModal, 'open');
    });

    backBtn.addEventListener('click', () => {
      toggle(cardModal, 'open');
    });

    closeBtn.addEventListener('click', () => {
      toggle(cardModal, 'open');
    });
  }

  const renderCardProduct = product => `
    <div class="items">
        <img src="${product.hero}" alt="${product.name}" class="items-img">
        <h5>${product.name}</h5>
        <p class="price">${product.price}$</p>
        <input type="number" value="${1}">
    </div>
  `;

  const initBuyButton = () => {
    const buyBtns = document.querySelectorAll('.buy');
    const countItems = document.querySelector('.count');
    const emptyMsg = cardModal.querySelector('.empty');
    const orderBtn = cardModal.querySelector('.order');

    let count = 0;

    buyBtns.forEach((el, index) => {
      el.addEventListener('click', () => {
        countItems.textContent = ++count;

        if (count > 0) {
          emptyMsg.textContent = '';
          orderBtn.style.display = 'inline-block';
          cardModal.style.height = '80vh';

          const container = document.querySelector('.shopping-card .container');
          let total = container.querySelector('.total');
          
          const productToBuy = renderCardProduct(inventory[index]);
          
          container.innerHTML += productToBuy;

          console.log(inventory[index].price)
          total.innerHTML += `Total price: ${inventory[index].price}`;
        } 

      });
    });
  }

  const renderBreadcrumbs = () => {
    const breadcrumps = document.querySelector('.breadcrumps');

    const renderFilter = name => `
      <p class="filter-name" data-name=${name}>${name}</p>
    `;

    const all = filters.map(f => renderFilter(f.name)).join('');

    breadcrumps.innerHTML = '<p class="all">All Products /</p>' + all;

    const deleteFilter = breadcrumps.querySelectorAll('.filter-name');

    deleteFilter.forEach(el => {
      el.addEventListener('click', () => {
        el.style.display = 'none';

        filters.splice(el, 1);

        renderFilteredInventory(filters)
      });
    });
  }

  const removeAllFilters = () => {
    const allProducts = document.querySelector('.all');

    allProducts.addEventListener('click', () => {
      const breadcrumps = document.querySelector('.breadcrumps');
      const deleteFilter = breadcrumps.querySelectorAll('.filter-name');

      deleteFilter.forEach(el => {
        el.style.display = 'none';

        filters = [];

        renderFilteredInventory(filters)
      });

    });
  }

  const renderFilteredInventory = () => {
    console.log('filters', filters.map(f => f.name));

    const filtered = inventory.filter(product => {
      return filters.every(f => f.predicate(product));
    });
    
    renderProducts(filtered);
    renderBreadcrumbs();
    removeAllFilters();
    initBuyButton();
  };

  const initBestFilter = () => {
    const bestSellBtn = document.querySelector('.best-sellers');

    bestSellBtn.addEventListener('click', () => {

      filters.push({
        name: 'Best Sellers',
        predicate: product => product.hasOwnProperty('bestSell')
      });

      renderFilteredInventory();

    });
  }

  const initLightFilter = () => {
    const low = document.getElementById('low');
    const bright = document.getElementById('bright');

    const removeFiltersLowBright = () =>
      filters.filter(f => f.name !== 'Low Light' && f.name !== 'Bright Light');

    low.addEventListener('click', () => {
      filters = removeFiltersLowBright();
      
      filters.push({
        name: 'Low Light',
        predicate: product => product.light === 'low'
      });
      
      renderFilteredInventory();
    });

    bright.addEventListener('click', () => {
      filters = removeFiltersLowBright();
      
      filters.push({
        name: 'Bright Light',
        predicate: product => product.light === 'bright'
      });      

      renderFilteredInventory();
    });
  }

  const initBenefitFilter = () => {
    const petFriendly = document.getElementById('pet');
    const airPurify = document.getElementById('air');

    petFriendly.addEventListener('click', () => {
      if(petFriendly.checked) {
        
        filters.push({
          name: 'Pet Friendly',
          predicate: product => product.petFriendly
        });

      } else {
        filters = filters.filter(f => f.name !== 'Pet Friendly');
      }

      renderFilteredInventory();

    });

    airPurify.addEventListener('click', () => {
      if(airPurify.checked) {
        
        filters.push({
          name: 'Air Purifying',
          predicate: product => product.airPurify
        });

      } else {
        filters = filters.filter(f => f.name !== 'Air Purifying');
      }

      renderFilteredInventory();
    });
  }

  const initSizeFilter = () => {
    const mini = document.getElementById('mini');
    const small = document.getElementById('small');
    const medium = document.getElementById('medium');
    const large = document.getElementById('large');

    const removeSizes = () => filters.filter(f => f.name !== 'Mini Size' && f.name !== 'Small Size' && f.name !== 'Medium Size' && f.name !== 'Large Size');
    
    mini.addEventListener('click', () => {
      filters = removeSizes();
      
      filters.push({
        name: 'Mini Size',
        predicate: product => product.size === 'mini'
      });

      renderFilteredInventory();
    });

    small.addEventListener('click', () => {
      filters = removeSizes();
      
      filters.push({
        name: 'Small Size',
        predicate: product => product.size === 'small'
      });

      renderFilteredInventory();
    });

    medium.addEventListener('click', () => {
      filters = removeSizes();
      
      filters.push({
        name: 'Medium Size',
        predicate: product => product.size === 'medium'
      });

      renderFilteredInventory();
    });

    large.addEventListener('click', () => {
      filters = removeSizes();
      
      filters.push({
        name: 'Large Size',
        predicate: product => product.size === 'large'
      });

      renderFilteredInventory();
    });
  }

  const initSearchBar = () => {
    const searchBar = document.getElementById('search-bar');
    
    searchBar.addEventListener('keyup', e => {
      const searchString = e.target.value.toLowerCase();

      const filteredProducts = inventory.filter(product => product.name.toLowerCase().includes(searchString));

      renderProducts(filteredProducts);
    });
  }

  const initFilters = () => {
    initBestFilter();
    initLightFilter();
    initBenefitFilter();
    initSizeFilter();
    initSearchBar();
  }

  const initAdvsSlider = () => {
    const container = document.querySelector('.advs');
    const ul = document.querySelector('.advs-list');
    const itemHeight = container.getBoundingClientRect().height;

    setInterval(() => {
      ul.style.transition = '.7s';
      ul.style.transform = `translateY(-${itemHeight}px)`;
    }, 3000);
    
    ul.addEventListener('transitionend', () => {
      const first = ul.querySelector('li');
      
      first.remove();
      ul.appendChild(first);

      ul.style.transition = 'none';
      ul.style.transform = 'translateY(0)';
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

  const initMenuBtn = () => {
    const menu = document.querySelector('.menu');
    const list = document.querySelector('.menu-list');

    menu.addEventListener('click', () => {
      toggle(menu, 'open');
      toggle(list, 'open');
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

  const initFiltersBtns = () => {
    const filterName = document.querySelectorAll('#filters h3');
    const filterArrow = document.querySelectorAll('#filters .fa-chevron-down');
    const filterDropDown = document.querySelectorAll('#filters .drop-down');

    filterName.forEach((el, index) => {
      el.addEventListener('click', () => {
        toggle(filterDropDown[index], 'visible');
        toggle(filterArrow[index], 'around');
      });
    });

    filterDropDown.forEach((el, index) => {
      el.addEventListener('mouseleave', () => {
        el.classList.remove('visible');
        filterArrow[index].classList.remove('around')
      });
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

      ++index;

      page[index].classList.add('active');
      showPage(index);
    });

    arrows[0].addEventListener('click', () => {

      if (index <= 0) {
        return;
      }
    
      removeActive();

      --index;

      page[index].classList.add('active');
      showPage(index);
    });
  }

  const getDataFromForm = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submit');
    
    const getData = () => {

      const nameArr = nameInput.value.split(' ');
      const emailArr = emailInput.value.split(' ');

      const dataArr = [...nameArr, ...emailArr];
      console.log(dataArr)

      const data = dataArr.reduce((acc, input) => ({
        ...acc,
        [input.id]: input.value
      }), {});

      return data;
    }

    submitBtn.addEventListener('click', e => {
      e.preventDefault();


    });
  }


  document.addEventListener('DOMContentLoaded', () => {

    renderProducts(inventory, 6);
    initBuyButton();
    initShoppingCard();
    // initAdvsSlider();
    initChatBtn();
    initMenuBtn();
    initFiltersBtns();
    initFilters();
    // hideMenu();
    initPages();
    getDataFromForm();

  });
})();