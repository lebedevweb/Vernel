(() => {
	const pentagram = document.querySelector('.landing_pentagram')
	const btnTop = document.querySelectorAll('.btn_top')
	const btnMore = document.querySelectorAll('.btn_more')
	const interview = document.querySelectorAll('.landing_interview_collapse')

	console.log(btnTop)

	for(let i = 0; i < btnTop.length; i++) {
	setListener(btnTop[i], 'click', () => {
		for (let j = 0; j < btnTop.length; j++) {
			removeClass(btnTop[j], 'active')
			removeClass(interview[j], 'active')
		}
		addClass(btnMore[i], 'active')
		pentagram.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	})
}
})()