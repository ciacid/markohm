window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('billWrapper');
  
    const data = [
      {
        no: '01',
        quote: `YBOOKFAIR x MarkOhm`,
        date: '22/06/2024',
        media: ['event/0.jpeg', 'event/1.jpeg', 'event/3.jpeg'],
        sources: [
          { text: 'X @SweetToothTH', url: 'https://x.com/SweetToothTH/status/1804750226277720193' }
        ]
      },
      {
        no: '02',
        quote: `Press conference "12 August Half Marathon\nBangkok 2024 x MarkOhm"`,
        date: '03/07/2024',
        media: ['event/6.jpeg', 'event/7.jpeg', 'event/8.jpeg', 'event/9.jpeg'],
        sources: [
          { text: 'X @ff_thegallery', url: 'https://x.com/ff_thegallery/status/1808402819739013238' }
        ]
      },
      {
        no: '03',
        quote: `OishiHKDCorn x MarkOhm`,
        date: '03/09/2024',
        media: ['event/10.jpeg', 'event/11.jpeg', 'event/12.jpeg', 'event/13.png'],
        sources: [
          { text: 'X @ff_thegallery', url: 'https://x.com/ff_thegallery/status/1830918681863618578' }
        ]
      },
      {
        no: '04',
        quote: `OISHIxGFTRIP2024 x MarkOhm`,
        date: '10-14/11/2024',
        media: ['event/14.jpeg', '4 oishi/30.jpg',  '4 oishi/32.jpg', '4 oishi/35.jpg'],
        sources: [
          { text: '', url: '' }
        ]
      },
      {
        no: '05',
        quote: `LEGOKIDSDAY x MarkOhm`,
        date: '09/01/2025',
        media: ['event/15.jpeg', 'event/lego.mp4', 'event/lego2.jpeg', 'event/lego1.jpeg'],
        sources: [
          { text: '@bearly_bear_', url: 'https:/bearly_bear_/x.com//status/1877350762591797330' },
          { text: '@ff_thegallery', url: 'https://x.com/ff_thegallery/status/1877350762591797330' },
          { text: '@fanTpkrubs', url: 'https://x.com/fanTpkrubsstatus/1877350762591797330' }
        ]
      },
      {
        no: '06',
        quote: `GrabFood No.1 ศึกชิงเจ้าสนามหิว x MarkOhm`,
        date: '06/03/2025',
        media: ['event/16.jpeg', '6 grab/grab.mp4','6 grab/grab1.jpeg', '6 grab/grab 2.jpeg', '6 grab/grab3.jpeg','6 grab/grab 4.jpeg'],
        sources: [
          { text: 'X: @GrabTH', url: 'https://x.com/GrabTH/status/1897629995155255403' }
        ]
      },
      {
        no: '07',
        quote: `Book Fair 2025 x MarkOhm`,
        date: '05/04/2025',
        media: ['event/17.jpeg', 'event/bkbbif.jpeg','event/bkbbif1.jpeg','event/bkbbif2.jpeg','event/bkbbif.mp4'],
        sources: [
          { text: 'Foto by @ff_thegallery', url:'https://x.com/ff_thegallery/status/1908487825903018315' }
        ]
      },
      {
        no: '08',
        quote: `Khaosod x MarkOhm Interview`,
        date: '05/04/2025',
        media: 'event/intv1.jpeg',
        sources: [
          { text: 'Khaosod Trans by: winspumpkin', url: 'https://x.com/winspumpkin/status/1916101858743226545' }
        ]
      },
      {
        no: '09',
        quote: `MANGU E-Magazine Issue 301 MarkOhm`,
        date: '05/04/2025',
        media: ['event/intv2.jpeg', 'event/mangu.jpeg', 'event/mangu2.jpeg', 'event/mangu3.jpeg'],
        sources: [
          { text: 'Instagram: @ohmtpk', url: 'https://www.instagram.com/ohmtpk' }
        ]
      },
      {
        no: '10',
        quote: '#PraewFavorxMarkOhm',
        date: '03/07/2024',
        media: ['event/intv3.jpeg', 'event/praew1.jpeg','event/praew2.jpeg','event/praew3.jpeg','event/praew4.jpeg','event/videopraew.mp4'],
        sources: [
          { text: 'X @Praewdaily trans video by @ohmtpkk', url: 'https://x.com/ohmtpkk/status/1908189460023656908' },
          { text: 'X @Praewdaily trans magz by @ohmtpkk', url: 'https://x.com/ohmtpkk/status/1912851760261271870' }
        ]
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
          ${item.sources.map(source => `
            <a href="${source.url}" target="_blank" rel="noopener">${source.text}</a>
          `).join(' | ')}
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
    document.addEventListener('click', function (e) {
      if (e.target.tagName === 'IMG' && e.target.closest('.slide')) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = "block";
        modalImg.src = e.target.src;
      }
    });
  
    // Tutup modal pas klik tombol close
    document.querySelector('.close').onclick = function () {
      document.getElementById('imageModal').style.display = "none";
    };
  
    // Tutup modal pas klik di luar gambar
    document.getElementById('imageModal').onclick = function (event) {
      if (event.target == this) {
        this.style.display = "none";
      }
    };
  });
  