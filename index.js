function createDomElement(tagName, textContent, container) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    container.appendChild(element)
    return element;
}



const container = document.body // В якості прикладу використовуємо body як контейнер
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))



setUserInfoCookie.js

function setUserInfoCookie(key, value) {
    const safeKey = encodeURIComponent(key);
    const safeValue = encodeURIComponent(value);
    const valueForCookie = `${safeKey}=${safeValue}`

    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + 10)

    document.cookie = `userInfo=${valueForCookie}; expires=${expiryDate.toUTCString()}; path=/`;

    console.log(`Cookie збережно: ${valueForCookie}`);
}

setUserInfoCookie('language', 'en');



function saveUserInfo(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
    const value = sessionStorage.getItem(key);
    console.log(`Retrieved ${key}: ${value}`);
    return value
}


saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); // Виведе: JohnDoe


