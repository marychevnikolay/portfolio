window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  //аккордион

  const accordions = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
      this.classList.toggle('is-open');

      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        // accordion is currently open, so close it
        content.style.maxHeight = null;
      } else {
        // accordion is currently closed, so open it
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  }


  const buyNow = document.querySelectorAll('.btn-modal');
  const popupOrder = document.querySelector('.popup.popup-consultation')

  for (const btnBuyNow of buyNow) {
  	btnBuyNow.addEventListener('click', () => {
  		popupOrder.style.display = 'block';
  	})
  }

  const allPopup = document.querySelectorAll('.popup');

  allPopup.forEach((popup) => {
  	popup.addEventListener('click', (event) => {
  		const target = event.target;

  		const popupForm = target.closest('.main-form');

  		if(!popupForm) {
  			popupOrder.style.display = '';
  		}
  	})
  })


  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
  	form.addEventListener('submit', event => {
  		event.preventDefault();

  		const body = new FormData(form);

  		fetch(form.action, {
  			method: 'POST', 
  			body, 
  		}).then(response => {

  			form.reset();
  			allPopup.forEach(popup => {
  				if (popup.classList.contains('thankyou')) {
  					popup.style.display = 'block';
  				} else {
  					popup.style.display = '';
  				}
  			})
  			return response.text()
  		}).then(data => console.log(data))
  	})
  })	
  //модальное окно
    //peremenaya
  // const btn = document.querySelector('.btn-modal'),
  //       popup = document.querySelector('.popup-consultation'),
  //       close = document.querySelector('.popup-close');
  //       // scroll = calcScroll;

  // btn.addEventListener('click', function() {
  //   popup.style.display = 'block';
  //   document.body.style.overflow = 'hidden';
  //    // document.body.style.marginRight = `${scroll}px`;

  // });
  // close.addEventListener('click', function() {
  //     popup.style.display = 'none';
  //     document.body.style.overflow = '';
  //     // document.body.style.marginRight = `0px`;
  // });

  

  // 	// const forms = document.querySelectorAll('.form');

  // 	// forms.forEach(form => {
  // 	// 	form.addEventListener('submit', event => {
  // 	// 		event.preventDefault();

  // 	// 		const body = new FormData(form);

  // 	// 		fetch(form.action, {
  // 	// 			method: 'POST',
  // 	// 			body,
  // 	// 		}).then(response => {
		// 	// 	form.reset();
		// 	// 	allPopup.forEach(popup => {
		// 	// 		if (popup.classList.contains('thankyou')) {
		// 	// 		popup.style.display = 'block';
		// 	// 		} else {
		// 	// 		popup.style.display = '';
		// 	// 		}
		// 	// 	})
		// 	// 	return response.text()
		// 	// }).then(data => console.log(data))		
  // 	// 	})
  // 	// })


  // //форма
  // const message = {
  //   loading: 'Загрузка...',
  //   success: 'Спасибо! Мы скоро с Вами свяжемся!',
  //   failure: 'Что пошло не так...'
  // }

  //   const forms = document.querySelectorAll('.form'),
  //       // input = form.getElementsByClassName('input'),
  //       statusMessage = document.createElement('div');

  //       statusMessage.classList.add('status');

  //       forms.forEach(form => {

  //       	form.addEventListener('submit', function(event) {
  //       		event.preventDefault();
  //       		form.appendChild(statusMessage);
  //       })


  //      let request = new XMLHttpRequest();
  //      request.open('POST', 'server.php');
  //      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //      let formData = new FormData(form);

  //      let obj = {};
  //      formData.forEach(function(value, key) {
  //          obj[key] = value;
  //      });
  //      let json = JSON.stringify(obj);

  //      request.send(json);

  //      request.addEventListener('readystatechange', function() {
  //          if (request.readyState < 4) {
  //              statusMessage.innerHTML = message.loading;
  //          } else if(request.readyState === 4 && request.status == 200) {
  //              statusMessage.innerHTML = message.success;
  //          } else {
  //              statusMessage.innerHTML = message.failure;
  //          }
  //      });

  //      // for (let i = 0; i < input.length; i++) {
  //      //     input[i].value = '';
  //      // }
  // }); 




        
});  