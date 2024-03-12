import isMobile from "../assets/Js-devise.js";
import ItcCollapse from "../assets/collapse.js";
// -----------------------------------------------------------------------------
const $ = {
	menuDown: document.querySelector('.menu-doun__btn-icon'),
	mediaMenu: document.querySelector('.media__menu'),
	middleRowMenu: document.querySelectorAll('.middle-row__menu'),
	menuList: document.querySelector('.middle-row'),
	burgerBttns: document.querySelector('.burger-bottom'),
	burgerMenu: document.querySelector('.burger-menu')
};
// ----------------------------(Collapse Media)---------------------------------
function _collapseMenuFooter() {
	if (isMobile.any()) {
		$.middleRowMenu.forEach((item) => {
			const trigger = item.querySelector('.middle-row__button');
			trigger.addEventListener('click', () => {
				const opened_item = $.menuList.querySelector('._open');
				_toggleItem(item);
				if (opened_item && opened_item !== item) {
					_toggleItem(opened_item);
				}
			});
		});
		const _toggleItem = (item) => {
			const collapse = new ItcCollapse(item.querySelector('._collapse'));
			if (item.classList.contains('_open')) {
				item.classList.remove('_open');
				collapse.toggle();
			} else {
				item.classList.add('_open');
				collapse.toggle();
			}
		};
	}
}
// ----------------------------(Collapse Media)---------------------------------
function _collapseMedia() {
	if (isMobile.any()) {
		const items = document.querySelectorAll('.menu-media__button');
		items.forEach((item) => {
			item.addEventListener('click', () => {
				$.mediaMenu.classList.toggle('_active');
				const opened_item = document.querySelector('._open');
				_toggleItem(item);
				if (opened_item && opened_item !== item) {
					_toggleItem(opened_item);
				}
			});
		});
		const _toggleItem = (item) => {
			const collapse = new ItcCollapse(document.querySelector('._collapse'));
			if (item.classList.contains('_open')) {
				item.classList.remove('_open');
				collapse.toggle();
			} else {
				item.classList.add('_open');
				collapse.toggle();
			}
		};
	}
}
// -----------------------(isMobile - Side Bar Menu)----------------------------
function _sideBarMenu() {
	$.burgerBttns.addEventListener('click', () => {
		document.body.classList.toggle('_heading');
		$.burgerBttns.classList.toggle('_open');
		$.burgerMenu.classList.toggle('_open');
	});
}

// -----------------------------------------------------------------------------
function _responsive() {
	$.menuDown.addEventListener('click', () => {
		let tabLink = $.menuDown.closest('.menu-doun ');
		console.log(tabLink);
		tabLink.classList.toggle('_responsive');
		$.menuDown.classList.toggle("_active");

	});
}
// -----------------------------------------------------------------------------
function _loop(els, elClosest, md) {
	for (let i = 0; i < els.length; i++) {
		let item = els[i];
		item.addEventListener('click', () => {
			switch (true) {
				case item.classList.contains(elClosest):
					item.classList.toggle(md);
					break;
				default:
					item.closest(elClosest).classList.toggle(md);
					break;
			}
		});
	}
}

// -----------------------------------------------------------------------------
export { _responsive, _collapseMedia, _collapseMenuFooter, _sideBarMenu };