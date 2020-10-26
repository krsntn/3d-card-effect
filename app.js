// movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizeButtons = document.querySelectorAll('.sizes button');

// moving animation event
container.addEventListener('mousemove', (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 24;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 24;

  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// animate in
container.addEventListener('mouseenter', (event) => {
  card.style.transition = 'none';

  // popout
  sneaker.style.transform = 'translateZ(150px) rotate(-25deg)';
  title.style.transform = 'translateZ(110px)';
  description.style.transform = 'translateZ(110px)';
  sizes.style.transform = 'translateZ(110px)';
  purchase.style.transform = 'translateZ(110px)';
});

// animate out
container.addEventListener('mouseleave', (event) => {
  card.style.transition = 'all 0.5 ease';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;

  // popback
  sneaker.style.transform = 'translateZ(0) rotate(0)';
  title.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
  sizes.style.transform = 'translateZ(0)';
  purchase.style.transform = 'translateZ(0)';
});

sizeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    document.querySelector('button.active').classList.remove('active');
    event.target.className = 'active';
  });
});
