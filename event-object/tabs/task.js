const tabContainers = document.querySelectorAll('.tabs');

tabContainers.forEach((container) => {
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.tab__content');

    let activeTab = container.querySelector('.tab_active');
    let activeContent = container.querySelector('.tab__content_active');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (activeTab) activeTab.classList.remove('tab_active');
            if (activeContent) activeContent.classList.remove('tab__content_active');

            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');

            activeTab = tab;
            activeContent = contents[index];
        });
    });
});
