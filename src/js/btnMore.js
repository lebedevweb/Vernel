(() => {
	const btnMore = document.querySelectorAll('.btn_more')
	const btnTop = document.querySelectorAll('.btn_top')
	const collapse = document.querySelectorAll('.landing_interview_collapse')

	for (let i = 0; i < btnMore.length; i++) {
		setListener(btnMore[i], 'click', () => {
				addClass(collapse[i],'active')
				addClass(btnTop[i],'active')
				removeClass(btnMore[i], 'active')
		})
	}

})()