(() => {
	const elPentagramm = document.querySelectorAll('.landing_pentagram_image')
	const blockTo = document.querySelector('.landing_interview')
	const pentDescript = document.querySelectorAll('.landing_pentagram_description')

	pentDescript.forEach(e => {
		setListener(e.children[1],'click', () => {
			blockTo.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		})
	})

	elPentagramm.forEach(e => {
		setListener(e,'click', () => {
			blockTo.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		})
	})
})()