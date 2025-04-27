window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('billWrapper');

  const data = [
    {
      no: '01',
      quote: `Donate to Unicef together, and get a match ring`,
      date: '05/04/2025',
      media: 'video/3.mp4',
      sourceText: 'X @suncroiissant',
      sourceUrl: 'https://x.com/SweetToothTH/status/1804750226277720193 '
    },
    {
      no: '02',
      quote: `Mark choose Ohm to be 'Sant'`,
      date: '14/03/2025',
      media: 'video/5.mp4',
      sourceText: 'yt gmmtv',
      sourceUrl: 'https://youtu.be/vi7CtmrumXo?si=oMKKLN9BErmLxcaL'
    },
    {
      no: '03',
      quote: `Going merit together on Ohmtpk 23rd Bday`,
      date: '22/03/2025',
      media: 'video/4.mp4',
      sourceText: 'Tiktok @ohmtpkofficial',
      sourceUrl: 'https://x.com/ohmtpkofficial/status/1903844667889942788  '
    },
    {
      no: '04',
      quote: `Mark said ‘Ohm has his own specific charm, some charisma that’s so attractive. Ohm has good eyes. For me, I would say that he has an actor's eye, attractive eyes.`,
      date: '29/11/2024',
      media: 'video/6.mp4',
      sourceText: 'X @snolilac | Trans by: X @ohmtpkk',
      sourceUrl: ' https://x.com/ohmtpkk/status/1862465677581590643'
    },
    {
      no: '05',
      quote: `We're getting closer and trusting each other more and more in acting, and also in living life together.`,
      date: '09/01/2025',
      media: 'video/7.mp4',
      sourceText: ' X @snolilac | Trans by: X @ohmtpkk',
      sourceUrl: ' https://x.com/ohmtpkk/status/1862465677581590643'
    },
    {
      no: '06',
      quote: `Mark’s old friend flirting with Ohm`,
      date: '04/03/2024',
      media: 'video/Download.mp4',
      sourceText: 'Tiktok @ananandme',
      sourceUrl: 'https://www.tiktok.com/@ananandme/video/7342462491311525128 '
    },
    {
      no: '07',
      quote: `Mark’s first flower bouquet on valentine's made by Ohm`,
      date: '14/02/2025',
      media: 'video/valentine.mp4',
      sourceText: 'Instagram: @ohmtpk',
      sourceUrl: 'https://www.instagram.com/ohmtpk'
    },
    {
      no: '08',
      quote: `Mark said Ohm ‘Beautiful’`,
      date: '16/03/2025',
      media: 'video/8.mp4',
      sourceText: ' Tiktok @ananandme',
      sourceUrl: 'https://www.tiktok.com/@ananandme/video/7387288877947571463'
    },
    {
      no: '09',
      quote: `MarkOhm 3AM call`,
      date: '16/03/2025',
      media: 'video/9.mp4',
      sourceText: ' X @bearly_bear_ Trans by: X @@winspumpkin',
      sourceUrl: 'https://x.com/winspumpkin/status/1901149661110628686 '
    },
    {
      no: '10',
      quote: 'Drunk Mark kept looking for Ohm and teased him about his sea boy looks',
      date: '30/12/2024',
      media: 'video/10.mp4',
      sourceText: ' Tiktok @scareuhehe ',
      sourceUrl: 'https://www.tiktok.com/@scareuhehe/video/7318359584903630082'
    },
    {
      no: '11',
      quote: 'Ohm said Mark is very lovely person',
      date: '02/04/2025',
      media: 'video/11.mp4',
      sourceText: ' Source: Tiktok @chaosmoons',
      sourceUrl: 'https://www.tiktok.com/@chaosmoons/video/7467606727123340550'
    },
    {
      no: '12',
      quote: 'Ohm get blushed when Mark give him 499+ roses on tiktok live',
      date: '10/03/2025',
      media: 'video/12.mp4',
      sourceText: 'Tiktok @markohmpk ',
      sourceUrl: 'https://www.tiktok.com/@markohmpk/video/7479916119822847275'
    },
    {
      no: '13',
      quote: 'P’Aof once said ‘Nobody in GMM can control Mark, except khun Ohm',
      date: '10/05/2024',
      media: 'video/13.mp4',
      sourceText: ' Tiktok @scareuhehe ',
      sourceUrl: ' https://www.tiktok.com/@scareuhehe/video/7367673888114806032'
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
