const buttonForeach = document.querySelector('#foreach')
const buttonMap = document.querySelector('#map')
const buttonFilter = document.querySelector('#filter')
const buttonReduce = document.querySelector('#reduce')
const containerItems = document.querySelector('.container-items')


const renderProducts = (items) => {
    containerItems.innerHTML = ''

    items.forEach((item) => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('menu-item');

        const imageElement = document.createElement('img');
        imageElement.src = item.src;
        imageElement.alt = item.name;
        imageElement.classList.add('menu-item-image');

        const textDetailsElement = document.createElement('p');
        textDetailsElement.textContent = item.name;
        textDetailsElement.classList.add('menu-item');

        const textDetailsElement2 = document.createElement('p');
        textDetailsElement2.textContent = `R$ ${item.price.toFixed(2)}`;
        textDetailsElement2.classList.add('menu-item-price');

        itemElement.appendChild(imageElement);
        itemElement.appendChild(textDetailsElement);
        itemElement.appendChild(textDetailsElement2);

        containerItems.appendChild(itemElement);
    });
}

buttonForeach.addEventListener('click', () => {
    renderProducts(menuOptions)
})

const apply10porcentDescount = (item) => ({
    ...item,
    price: item.price * 0.9.toFixed(2)
})

buttonMap.addEventListener('click', () => {
    const productsWithDiscount = menuOptions.map(apply10porcentDescount)
    renderProducts(productsWithDiscount)
})


buttonReduce.addEventListener('click', () => {
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    containerItems.innerHTML = `
        <li>
            <p>O preço total do pedido é: R$ ${totalPrice.toFixed(2)}</p>
        </li>
    
    `
})



buttonFilter.addEventListener('click', () => {
    const veganProducts = menuOptions.filter((item) => item.vegan)
    renderProducts(veganProducts)
})

