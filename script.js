const texto = document.querySelector('.texto p');
const typewriter = new Typewriter(texto, {
  loop: true,
  delay: 75,
});
typewriter
  .typeString('Somos una empresa dedicada a la creación de sitios web y aplicaciones móviles.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Nos especializamos en el desarrollo de software de alta calidad.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Trabajamos con las últimas tecnologías para ofrecer soluciones innovadoras.')
  .start();