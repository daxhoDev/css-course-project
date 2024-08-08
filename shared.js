//VARIABLES:

var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal #no');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


//EVENT LISTENERS:

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', showModal);
}

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