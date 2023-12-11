const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const desk = document.querySelector('#span-desk')
const x1 = document.querySelector('#x1-text')
const x2 = document.querySelector('#x2-text')
const button = document.querySelector('#button')


button.addEventListener('click', () => {
	GetX(a.value, b.value, c.value)
})

a.addEventListener('change', () => {
	if (b.value == 1) {
		desk.innerHTML = `${a.value}x<sup>2</sup>+x+${c.value}`
	}else {
		desk.innerHTML = `${a.value}x<sup>2</sup>+${b.value}x+${c.value}`
	}


})

b.addEventListener('change', () => {
	if (b.value[0] == '-') {
		if (a.value == 1) {
			desk.innerHTML = `x<sup>2</sup>${b.value}x+${c.value}`
		} else {
			desk.innerHTML = `${a.value}x<sup>2</sup>${b.value}x+${c.value}`
		}
	} else {
		if (a.value == 1) {
			desk.innerHTML = `x<sup>2</sup>+${b.value}x+${c.value}`
		} else {
			desk.innerHTML = `${a.value}x<sup>2</sup>+${b.value}x+${c.value}`
		}
	}

})

c.addEventListener('change', () => {
	if (c.value[0] == '-') {
		if (b.value == 1 && a.value == 1){
			desk.innerHTML = `x<sup>2</sup>+x${c.value}`
		} else if (a.value == 1) {
			desk.innerHTML = `x<sup>2</sup>+${b.value}x${c.value}`
		} else if (b.value == 1) {
			desk.innerHTML = `${a.value}x<sup>2</sup>+x${c.value}`
		} else {
			desk.innerHTML = `${a.value}x<sup>2</sup>+${b.value}x${c.value}`
		}
	} else {
		if (b.value == 1 && a.value == 1){
			desk.innerHTML = `x<sup>2</sup>+x+${c.value}`
		} else if (a.value == 1) {
			desk.innerHTML = `x<sup>2</sup>+${b.value}x+${c.value}`
		} else if (b.value == 1) {
			desk.innerHTML = `${a.value}x<sup>2</sup>+x+${c.value}`
		} else {
			desk.innerHTML = `${a.value}x<sup>2</sup>+${b.value}x+${c.value}`
		}
	}

})


function GetX(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	let D = b*b - 4 * a * c
	console.log(D);

	if (D <= 0) {
		x1.textContent = 'No solutions'
		x2.textContent = 'No solutions'
	} else {
		XD = Math.sqrt(D)
		x1.textContent = ((-b+XD) / (2*a)).toFixed(1)
		x2.textContent = ((-b-XD) / (2*a)).toFixed(1)
	}
}
