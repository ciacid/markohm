window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('billWrapper');
  
    const data = [
      {
        no: '01',
        quote: `"First bouquet from Ohm"`,
        date: '03/05/2024',
        media: ['1bookfair/0.jpeg', '1bookfair/1.jpeg', '1bookfair/3.jpeg'],
        sourceText: 'Tiktok: @someuser',
        sourceUrl: 'https://www.tiktok.com/@someuser'
      },
      {
        no: '02',
        quote: `"Second memory with Ohm"`,
        date: '04/04/2024',
        media: 'video/valentine.mp4',
        sourceText: 'Instagram: @ohmtpk',
        sourceUrl: 'https://www.instagram.com/ohmtpk'
      }
    ];
  
    data.forEach((item, index) => {
      const bill = document.createElement('div');
      bill.className = 'bill';
  
      let mediaSlides = '';
  
      if (Array.isArray(item.media)) {
        item.media.forEach(file => {
          const ext = file.split('.').pop().toLowerCase();
          if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
            mediaSlides += `<div class="slide"><img src="${file}" alt="media" /></div>`;
          } else if (['mp4', 'webm', 'ogg'].includes(ext)) {
            mediaSlides += `<div class="slide"><video src="${file}" controls></video></div>`;
          }
        });
      } else {
        const ext = item.media.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
          mediaSlides = `<div class="slide"><img src="${item.media}" alt="media" /></div>`;
        } else if (['mp4', 'webm', 'ogg'].includes(ext)) {
          mediaSlides = `<div class="slide"><video src="${item.media}" controls></video></div>`;
        }
      }
  
      bill.innerHTML = `
        <div class="bill-number">${item.no}</div>
  
        <div class="bill-quote-wrapper">
          <div class="quote-top"></div>
          <div class="bill-quote">${item.quote.replace(/\n/g, '<br/>')}</div>
          <div class="quote-bottom"></div>
        </div>
  
        <div class="bill-date">${item.date}</div>
  
        <div class="bill-media">
          <div class="slider" id="slider-${index}">
            ${mediaSlides}
          </div>
          ${
            Array.isArray(item.media)
            ? `
            <button class="nav-button left" onclick="slideLeft(${index})">&#8592;</button>
            <button class="nav-button right" onclick="slideRight(${index})">&#8594;</button>
            `
            : ''
          }
        </div>
  
        <div class="bill-source">
          source: 
          <a href="${item.sourceUrl}" target="_blank" rel="noopener">
            ${item.sourceText}
          </a>
        </div>
      `;
  
      wrapper.appendChild(bill);
    });
  });
  
  // Functions buat geser tombol
  function slideLeft(id) {
    const slider = document.getElementById(`slider-${id}`);
    const slideWidth = slider.clientWidth;
    slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  }
  
  function slideRight(id) {
    const slider = document.getElementById(`slider-${id}`);
    const slideWidth = slider.clientWidth;
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
  }
  
  