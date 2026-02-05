// slå dig løs her... 

const heroSection = document.querySelector(".hero")
const servicesSection = document.querySelector(".services")
const facilitiesSection = document.querySelector(".facilities")
const sitesSection = document.querySelector(".sites")
const advantagesSectionEl = document.querySelector(".advantages")
const footerSection = document.querySelector(".footer")

const highlightText = (text, word) => {
	if (!text || !word) return text
	return text.replace(word, `<span class="text-highlight">${word}</span>`)
}

heroSection.innerHTML = `
	<div class="hero__inner">
		<div class="hero__card">
			<h1 class="hero__title">${highlightText(hero.headline, "save your time")}</h1>
			<p class="hero__text">${hero.copy}</p>
			<button class="btn">
				<img class="btn__icon" src="${hero.icon}" alt="" />
				Explore
			</button>
		</div>
		<div class="hero__media">
			<img src="${hero.image}" alt="" />
		</div>
	</div>
`

servicesSection.innerHTML = `
	<div class="section__inner">
		<div class="services__grid">
			${services
				.map(
					service => `
					<article class="services__card">
						<img class="services__img" src="${service.illustration}" alt="" />
						<h3 class="services__title">${service.headline}</h3>
						<p class="services__text">${service.text}</p>
						<a class="services__link" href="#">${service.linktext}</a>
					</article>
				`
				)
				.join("")}
		</div>
	</div>
`

facilitiesSection.innerHTML = `
	<div class="section__inner">
		<h2 class="section__title">${facilities.headline}</h2>
		<div class="facilities__grid">
			${facilities.options
				.map(
					option => `
					<article class="facilities__card">
						<img class="facilities__icon" src="${option.icon}" alt="" />
						<h3 class="facilities__title">${option.headline}</h3>
						<p class="facilities__text">${option.text}</p>
						<a class="facilities__link" href="#">Show me more</a>
					</article>
				`
				)
				.join("")}
		</div>
	</div>
`

sitesSection.innerHTML = `
	<div class="section__inner sites__inner">
		<div class="sites__content">
			<h2 class="section__title">${sites.headline}</h2>
			<p class="sites__text">${sites.text}</p>
			<button class="btn btn--ghost">
				<img class="btn__icon" src="${sites.btnicon}" alt="" />
				Start
			</button>
		</div>
		<div class="sites__grid">
			${sites.places
				.map(
					place => `
					<article class="sites__card">
						<img class="sites__img" src="${place.img}" alt="" />
						<h3 class="sites__title">${place.name}</h3>
						<p class="sites__city">${place.city}</p>
						<a class="sites__link" href="#">View the Site</a>
					</article>
				`
				)
				.join("")}
		</div>
	</div>
`

advantagesSectionEl.innerHTML = `
	<div class="section__inner">
		<h2 class="section__title">${advantagesSection.headline}</h2>
		<div class="advantages__grid">
			${advantagesSection.items
				.map(
					item => `
					<article class="advantages__card">
						<img class="advantages__icon" src="${item.icon}" alt="" />
						<h3 class="advantages__title">${item.headline}</h3>
						<p class="advantages__text">${item.text}</p>
					</article>
				`
				)
				.join("")}
		</div>
	</div>
`

footerSection.innerHTML = `
	<div class="section__inner footer__inner">
		<div class="footer__brand">
			<p class="footer__brand-title">${footer.brand.title}</p>
			<h3 class="footer__brand-headline">${footer.brand.headline}</h3>
			<p class="footer__brand-copy">${footer.brand.copy}</p>
		</div>
		<div class="footer__columns">
			${footer.columns
				.map(
					column => `
					<div class="footer__column">
						<p class="footer__column-title">${column.headline}</p>
						<ul class="footer__list">
							${column.links
								.map(link => `<li><a href="#">${link}</a></li>`)
								.join("")}
						</ul>
					</div>
				`
				)
				.join("")}
		</div>
		<div class="footer__bottom">
			<p class="footer__rights">${footer.rights}</p>
			<div class="footer__bottom-links">
				${footer.bottomLinks
					.map(link => `<a href="#">${link}</a>`)
					.join("")}
			</div>
		</div>
	</div>
`
