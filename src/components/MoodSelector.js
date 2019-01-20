import React, { Component } from 'react';
import './MoodSelector.css';

class MoodSelector extends Component {

	toggleMenu() { //expands and shrinks mood selection menu
		let ul = document.querySelector('.cat1');
		let icon = document.querySelector('.fa-smile');

		icon.classList.toggle('active');
		if (ul.classList.length === 1) { ul.classList.toggle('slide-in');}
		else {
			if (ul.classList.contains('slide-in')){
				let innerLists = document.querySelectorAll('ol');

				innerLists.forEach( function(element, index) {
					if (element.classList.contains('expand')) { 
						element.classList.toggle('expand');
						element.classList.toggle('shrink');
					}
				});		

			}
			ul.classList.toggle('slide-in');
			ul.classList.toggle('slide-out');
		}
	}

	toggleCategory(event) { //expands and shrinks mood selection sub categories

		if (event.target.classList.contains('mood')){
			let colorBox = document.querySelector('#colorBox');
			colorBox.style = `background: url('images/${event.target.innerHTML.toLowerCase()}.jpg');`;
			colorBox.style.backgroundSize = '600% 600%';
		} else if (event.target.classList.contains('category')){
			let ol = event.target.childNodes[1];

			if (ol.classList.length === 1) { ol.classList.toggle('expand');}
			else {
				ol.classList.toggle('expand');
				ol.classList.toggle('shrink');
			}
		}
	}

	render() {
		return (
			<div className="mood-selector-wrapper">
			<a id="mood-selector" onClick={ this.toggleMenu }><i className="far fa-smile"></i></a>
			<ul className="cat1">
				<li className="category" onClick={ this.toggleCategory }> Emotions
					<ol className="cat2">
						<li className="mood">Happiness</li>
						<hr/>
						<li className="mood">Love</li>
						<hr/>
						<li className="mood">Sadness</li>
						<hr/>
					</ol>
				</li>
				<hr/>
				
				<li className="category" onClick={ this.toggleCategory }> Holidays
					<ol className="cat2">
						<li className="mood">Christmas</li>
						<hr/>
						<li className="mood">Halloween</li>
						<hr/>
					</ol>
				</li>
				<hr/>
				
				<li className="category" onClick={ this.toggleCategory }> Seasons
					<ol className="cat2">
						<li className="mood">Spring</li>
						<hr/>
						<li className="mood">Summer</li>
						<hr/>
						<li className="mood">Autumn</li>
						<hr/>
						<li className="mood">Winter</li>
						<hr/>
					</ol>
				</li>
				<hr/>
				
				<li className="category" onClick={ this.toggleCategory }> Vibes
					<ol className="cat2">
						<li className="mood">City</li>
						<hr/>
						<li className="mood">Gamer</li>
						<hr/>
						<li className="mood">Sunset</li>
						<hr/>
						<li className="mood">Rainbow</li>
						<hr/>
					</ol>
				</li>
				<hr/>
				
			</ul>
			</div>
		)
	}
}

export default MoodSelector;