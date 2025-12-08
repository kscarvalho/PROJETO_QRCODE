// Selecionar
const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');

// Eventos
function generateQrCode() {
  const qrCodeInpuvalue = qrCodeInput.value;

  if (!qrCodeInpuvalue) return;

  qrCodeBtn.innerText = 'Gerando código...';

  setTimeout(() => {
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInpuvalue}`;

    qrCodeImg.addEventListener('load', () => {
      container.classList.add('active');
      qrCodeBtn.innerText = 'Código gerado!';
    });
  }, 3000);
}

qrCodeBtn.addEventListener('click', () => {
  generateQrCode();
});

// Gerar QR Code ao apertar tecla enter
qrCodeInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    generateQrCode();
  }
});

// Limpar área de QR Code
qrCodeInput.addEventListener('keyup', () => {
  if (!qrCodeInput.value) {
    container.classList.remove('active');
    qrCodeBtn.innerText = 'Gerar QR Code';
  }
});
