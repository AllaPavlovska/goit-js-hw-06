

const categoriesNumber = document.querySelector('#categories');
        const items = categoriesNumber.querySelectorAll('.item');

        console.log(`Number of categories: ${items.length}`);

        items.forEach(item => {
            const categoryTitle = item.querySelector('h2').textContent;
            const categoryItems = item.querySelectorAll('li');
            console.log(`Category: ${categoryTitle}`);
            console.log(`Elements: ${categoryItems.length}`);
        });