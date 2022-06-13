(() => {
	const descriptionItems = document.querySelectorAll('.landing_pentagram_description')
	const articles = document.querySelectorAll('.landing_interview_article_bg')
	// console.log(pentagramItems)
	// console.log(articles)

	for (let i = 0; i < descriptionItems.length; i++) {
		setListener(descriptionItems[i].children[1],'click', () => {

			for (let j = 0; j < articles.length; j++) {
				removeClass(articles[j],'active')
			}
			addClass(articles[i],'active')
		})
	}

})()