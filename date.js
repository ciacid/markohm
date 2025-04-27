window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('billWrapper');
  
    const data = [
      {
        no: '01',
        quote: `YBOOKFAIR x MarkOhm`,
        date: '22/06/2024',
        media: ['event/0.jpeg', 'event/1.jpeg', 'event/3.jpeg'],
        sourceText: 'X @SweetToothTH',
        sourceUrl: 'https://x.com/SweetToothTH/status/1804750226277720193 '
      },
      {
        no: '02',
        quote: `Press conference "12 August Half Marathon\nBangkok 2024 x MarkOhm`,
        date: '03/07/2024',
        media: ['event/6.jpeg', 'event/7.jpeg', 'event/8.jpeg','event/9.jpeg'],
        sourceText: 'X  @ff_thegallery',
        sourceUrl: ' https://x.com/ff_thegallery/status/1808402819739013238'
      },
      {
        no: '03',
        quote: `OishiHKDCorn x MarkOhm`,
        date: '03/09/2024',
        media: ['event/10.jpeg', 'event/11.jpeg', 'event/12.jpeg','event/13.png'],
        sourceText: 'X  @ff_thegallery ',
        sourceUrl: 'https://x.com/ff_thegallery/status/1830918681863618578 '
      },
      {
        no: '04',
        quote: `OISHIxGFTRIP2024 x MarkOhm`,
        date: '10-14/11/2024',
        media: ['event/14.jpeg'],
        sourceText: 'Instagram: @ohmtpk',
        sourceUrl: 'https://www.instagram.com/ohmtpk'
      },
      {
        no: '05',
        quote: `LEGOKIDSDAY x MarkOhm`,
        date: '09/01/2025',
        media: ['event/15.jpeg'],
        sourceText: 'Instagram: @ohmtpk',
        sourceUrl: 'https://www.instagram.com/ohmtpk'
      },
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
  
  window.addEventListener('DOMContentLoaded', () => {
    // Bikin semua image di dalam slide bisa diklik
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'IMG' && e.target.closest('.slide')) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = "block";
        modalImg.src = e.target.src;
      }
    });
  
    // Tutup modal pas klik tombol close
    document.querySelector('.close').onclick = function() {
      document.getElementById('imageModal').style.display = "none";
    };
  
    // Tutup modal pas klik di luar gambar
    document.getElementById('imageModal').onclick = function(event) {
      if (event.target == this) {
        this.style.display = "none";
      }
    };
  });
  