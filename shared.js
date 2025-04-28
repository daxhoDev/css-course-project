//VARIABLES:

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal #no');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


//EVENT LISTENERS:

// for (var i = 0; i < selectPlanButtons.length; i++) {
//     selectPlanButtons[i].addEventListener('click', showModal);
// }

selectPlanButtons.forEach((butt) => butt.addEventListener('click', showModal))

if (modalNoButton) {
    modalNoButton.addEventListener('click', hideModal);
	backdrop.addEventListener('click', hideModal);
}

toggleButton.addEventListener('click', showMobileNav);

backdrop.addEventListener('click', hideMobileNav);


//FUNCTIONS:

function showBackdrop() {
	setTimeout(function() {
		backdrop.style.opacity = "1";
	}, 10)
    backdrop.style.display = 'block';
}

function hideBackdrop() {
	backdrop.style.opacity = "0";
	setTimeout(function() {
		backdrop.style.display = "none";
	}, 200)
}

function showModal() {
	showBackdrop();
    setTimeout(function() {
        modal.classList.add("open");
    }, 10)
    modal.style.display = "flex";
}

function hideModal() {
    hideBackdrop();
    modal.classList.remove("open");
    setTimeout(function () {
        modal.style.display = "none";
    }, 300)
}

function showMobileNav() {
    showBackdrop();
	setTimeout(function() {
			mobileNav.style.transform = 'translate(0)';
		}, 10)
    mobileNav.style.display = 'block';
}

function hideMobileNav() {
	hideBackdrop();
	mobileNav.style.transform = 'translate(-100%)';
	setTimeout(function() {
		mobileNav.style.display = 'none';
	}, 200)
}
