window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('billWrapper');
  
    const data = [
      {
        no: '01',
        quote: `Thrift date`,
        date: '28/06/2024',
        media: 'video/2.mp4',
        sourceText: 'Ig @ohmtpk',
        sourceUrl: 'https://www.instagram.com/reel/C8wr2TqyU7Z/'
      },
      {
        no: '02',
        quote: 'Baking class date',
        date: '10/11/2024',
        media: ['bakingdate/6.mp4', 'bakingdate/1.JPG', 'bakingdate/2.JPG', 'bakingdate/3.mp4', 'bakingdate/4.mp4'],
        sourceText: 'Ig @ohmtpk',
        sourceUrl: ' https://www.instagram.com/reel/DA72W2ZSdwN/ '
      },
      {
        no: '03',
        quote: `Hirono Exhibition Date`,
        date: '12/07/2024',
        media: ['hirono/hirono.mp4','hirono/hirono1.jpeg', 'hirono/hirono3.jpeg', 'hirono/hirono4.jpeg'],
        sourceText: ' X @Nattha2538 ',
        sourceUrl: 'https://x.com/Nattha2538/status/1806729394926583954  '
      },
      {
        no: '04',
        quote: 'Valentine`s date',
        date: '14/02/2025',
        media: 'video/valentine.mp4',
        sourceText: 'Instagram: @ohmtpk',
        sourceUrl: 'https://www.instagram.com/ohmtpk'
      },
      {
        no: '05',
        quote: 'Dinner Night Date',
        date: '20/04/2025',
        media: ['dinnerdate/horsamut.mp4', 'dinnerdate/1.PNG', 'dinnerdate/2.JPG', 'dinnerdate/3.JPG', 'dinnerdate/4.JPG'],
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
  