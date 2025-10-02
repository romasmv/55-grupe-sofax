export function slider1() {

    const HTML = `
    <div class="container-slider1">
      <div class="slider-Top-Row">
        <h2>Trusted by 1600+ of the world's most popular companies</h2>
      </div>
      <div class="slider-Bottom-Row">
        <div aria-hidden="true" class="slider-companylist">
        <img src="../img/Slider/alterbone.png" alt="alterbone">
        <img src="../img/Slider/carbonia.png" alt="carbonia">
        <img src="../img/Slider/logoipsum.png" alt="logoipsum">
        <img src="../img/Slider/tinygone.png" alt="tinygone">
        <img src="../img/Slider/waverio.png" alt="waverio">
        <img src="../img/Slider/alterbone.png" alt="alterbone">
        <img src="../img/Slider/carbonia.png" alt="carbonia">
        <img src="../img/Slider/logoipsum.png" alt="logoipsum">
        <img src="../img/Slider/tinygone.png" alt="tinygone">
        <img src="../img/Slider/waverio.png" alt="waverio">
        <img src="../img/Slider/alterbone.png" alt="alterbone">
        <img src="../img/Slider/carbonia.png" alt="carbonia">
        <img src="../img/Slider/logoipsum.png" alt="logoipsum">
        <img src="../img/Slider/tinygone.png" alt="tinygone">
        <img src="../img/Slider/waverio.png" alt="waverio">
        </div>
      </div>
    </div>
  `;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}