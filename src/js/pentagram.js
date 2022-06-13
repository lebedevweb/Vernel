(() => {
	const pentagramItems = document.querySelectorAll('.landing_pentagram_image')
	const articles = document.querySelectorAll('.landing_interview_article_bg')
	// console.log(pentagramItems)
	// console.log(articles)

	for (let i = 0; i < pentagramItems.length; i++) {
		setListener(pentagramItems[i],'click', () => {

			for (let j = 0; j < articles.length; j++) {
				removeClass(articles[j],'active')
			}
			addClass(articles[i],'active')
		})
	}

	})()