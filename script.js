// // let ism = prompt('Ismingizni kiriting!');
// // let familiya = prompt('Familiyangizni kiriting!');

// // let fullName = { fistName: ism, lastName: familiya };

// // console.log(fullName);

// // let images = [
// // 	'image1.jpg',
// // 	'image2.jpg',
// // 	'image3.jpg',
// // 	'image4.jpg',
// // 	'image5.jpg',
// // 	'image6.jpg',
// // 	'image7.jpg',
// // 	'image8.jpg',
// // 	'image9.jpg',
// // 	'image10.jpg'
// // ];

// // let button = document.getElementById('showImageBtn');
// // let imgElement = document.getElementById('randomImage');

// // button.addEventListener('click', () => {
// // 	const randomIndex = Math.floor(Math.random() * images.length);
// // 	imgElement.src = images[randomIndex];
// // 	imgElement.style.display = 'block';
// // });

// let images = [
// 	'https://avatars.mds.yandex.net/get-mpic/4353087/img_id1567071194246313391.jpeg/orig',
// 	'https://i.pinimg.com/originals/53/ad/82/53ad828ad989c4042cc6a1f41071bbe0.jpg',
// 	'https://trashbox.ru/ifiles/1721119_10cbe5_logo3/nasa-obnaruzhila-na-marse-krater-ot-meteorita-diametrom-150-metrov-vokrug-nego-zamechen-lyod-1.jpg',
// 	'https://avatars.dzeninfra.ru/get-zen_doc/1901404/pub_61628d5e0c4ddd7b4decea93_61628d96a493184ae19049c1/scale_1200',
// 	'https://avatars.dzeninfra.ru/get-zen_doc/5286086/pub_610698b39bd3fc59f0b72372_610698e9b4685518d3730986/scale_1200',
// 	'https://www.glam.com/img/gallery/our-guide-to-neptunes-meaning-in-astrology/l-intro-1677852384.jpg',
// 	'https://trashbox.ru/ifiles/1721119_10cbe5_logo3/nasa-obnaruzhila-na-marse-krater-ot-meteorita-diametrom-150-metrov-vokrug-nego-zamechen-lyod-1.jpg',
// 	'https://trashbox.ru/ifiles/1721119_10cbe5_logo3/nasa-obnaruzhila-na-marse-krater-ot-meteorita-diametrom-150-metrov-vokrug-nego-zamechen-lyod-1.jpg',
// 	'https://trashbox.ru/ifiles/1721119_10cbe5_logo3/nasa-obnaruzhila-na-marse-krater-ot-meteorita-diametrom-150-metrov-vokrug-nego-zamechen-lyod-1.jpg',
// 	'https://trashbox.ru/ifiles/1721119_10cbe5_logo3/nasa-obnaruzhila-na-marse-krater-ot-meteorita-diametrom-150-metrov-vokrug-nego-zamechen-lyod-1.jpg',
// ]
// function bg() {
// 	let randomIndex = Math.floor(Math.random() * images.length)
// 	document.body.style.backgroundImage = `url(${images[randomIndex]})`
// 	document.body.style.backgroundSize = 'cover'
// 	document.body.style.backgroundRepeat = 'no-repeat'
// }

// console.log(bg.randomIndex)




let body = document.getElementById('body');
let h1 = document.getElementById('h1');

function bg1() {
	body.style.backgroundColor = 'red'
	h1.style.color = 'black'
}
function bg2() {
	body.style.backgroundColor = 'green'
	
}
function bg3() {
	body.style.backgroundColor = 'blue'
}
function bg4() {
	body.style.backgroundColor = 'yellow'
}