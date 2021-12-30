export default class Difference {
	constructor(oldOfficer, newOfficer, items) {
		try {
			this.oldOfficer = document.querySelector(oldOfficer);
			this.newOfficer = document.querySelector(newOfficer);
			this.oldItems = this.oldOfficer.querySelectorAll(items);
			this.newItems = this.newOfficer.querySelectorAll(items);
			this.oldCounter = 0;
			this.newCounter = 0;
		} catch (e) {}
	}

	bindTriggers() {
		const addElem = (elems, counter) => {
			elems[elems.length - 1]
				.querySelector('.plus')
				.addEventListener('click', () => {
					if (counter !== elems.length - 2) {
						elems[counter].style.display = 'flex';
						counter++;
					} else {
						elems[counter].style.display = 'flex';
						elems[elems.length - 1].remove();
					}
				});
		};

		addElem(this.oldItems, this.oldCounter);
		addElem(this.newItems, this.newCounter);
	}

	hideItems() {
		const hideItems = (elems) => {
			elems.forEach((item, i, arr) => {
				if (i !== arr.length - 1) {
					item.style.display = 'none';
				}
			});
		};

		hideItems(this.oldItems);
		hideItems(this.newItems);
	}

	init() {
		try {
			this.hideItems();
			this.bindTriggers();
		} catch (e) {}
	}
}
