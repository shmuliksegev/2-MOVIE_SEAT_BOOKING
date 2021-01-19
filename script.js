const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelected = document.getElementById('movie');

// convert from string to number
let ticketPrice = +movieSelected.value;

// or convert by the function
// const ticketPrice = parseInt(movieSelected.value)

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
   
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;


}
// Movie click
movieSelected.addEventListener('change',(e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
})

// Seat click enent
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
