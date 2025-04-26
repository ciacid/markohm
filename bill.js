window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('billWrapper');
  
    const data = [
      {
        no: '01',
        quote: `"I spend time taking care of others\ninstead of myself, ohm will do that for me"`,
        date: '03/05/2024',
        media: 'asset/foto1.jpg',
        source: 'twitter.com/someone'
      },
      {
        no: '02',
        quote: `"Mark’s first flower bouquet on\nvalentine's made by Ohm"`,
        date: '04/04/2024',
        media: 'asset/valentine.mp4',
        source: 'tiktok.com/@someuser'
      }
    ];
  
    data.forEach(item => {
      const bill = document.createElement('div');
      bill.className = 'bill';
  
      // Deteksi ekstensi media
      const ext = item.media.split('.').pop().toLowerCase();
      let mediaElement = '';
  
      if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
        mediaElement = `<img src="${item.media}" alt="media" />`;
      } else if (['mp4', 'webm', 'ogg'].includes(ext)) {
        mediaElement = `<video src="${item.media}" controls></video>`;
      } else {
        mediaElement = `<div>Tidak bisa tampilkan media</div>`;
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
          ${mediaElement}
        </div>
  
        <div class="bill-source">source: ${item.source}</div>
      `;
  
      wrapper.appendChild(bill);
    });
  });
  

  