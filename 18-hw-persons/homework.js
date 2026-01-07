// Деструктуризация массива: создаем массив ID, отображаем на элементы DOM, затем деструктурируем в переменные
const [id, firstName, lastName, birthdate, result, stats, addPerson] = [
    'id', 'firstName', 'lastName', 'birthdate', 'result', 'stats', 'add'
].map(id => document.getElementById(id));

const persons = [];

addPerson.onclick = function () {
    if (persons.findIndex(p => p.id === id.value) >= 0) {
        alert(`Person with id = ${id.value} exists`);
    } else {
        const person = new Person(id.value.trim(), firstName.value.trim(), lastName.value.trim(), birthdate.value);
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDel(() => {
            const index = persons.findIndex(p => p.id === person.id);
            persons.splice(index, 1);
            showStats();
        });
        li.append(buttonDel);
        result.append(li);
        showStats();
    }
    // Деструктуризация массива для очистки полей: присваиваем пустые строки всем элементам массива
    [id.value, firstName.value, lastName.value, birthdate.value] = ['', '', '', ''];
}

function showStats() {
    const divStats = document.createElement('div');
    if (persons.length) {
        const ages = persons.map(p => p.age());
        const averageAge = ages.reduce((accum, a) => accum + a, 0) / ages.length;
        // Деструктуризация массива: одновременно получаем min и max возраста
        const [minAge, maxAge] = [Math.min(...ages), Math.max(...ages)];
        // Деструктуризация массива: создаем массив элементов статистики
        const [total, h3avg, h3min, h3max] = [
            createInfoElement(`Total persons ${persons.length}`, 'h3'),
            createInfoElement(`Average age: ${averageAge.toFixed(1)}`, 'h3'),
            createInfoElement(`Min age: ${minAge}`, 'h3'),
            createInfoElement(`Max age: ${maxAge}`, 'h3')
        ];
        divStats.append(total, h3avg, h3min, h3max);
    }
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(divStats);
    }
}

function Person(id, firstName, lastName, birthdate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(birthdate);
    this.age = function () {
        const ageDiffMs = (new Date()) - this.birthdate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getUTCFullYear() - 1970;
    }
    this.toString = function () {
        return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.age()}`;
    }
}