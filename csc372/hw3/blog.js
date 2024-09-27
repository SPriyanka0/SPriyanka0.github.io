const gallery = document.querySelectorAll('img');

const foodinfo = {
  'burrito' : 'Veggie fajitas or sofritas wrapped in a warm flour tortilla with rice or beans, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  'chipsguac' : 'Fresh fried tortilla chips with in-house guacamole dip.',
  'bowl' : 'Veggie fajitas or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  'veggie_wrap' : 'New item! This veggie wrap is packed with fresh vegetalbles combined with the flavors of roasted red pepper humus, feta and unique seasoning matching the Mediterranean vibes.',
  'the_veggie' : 'A veggie sandwish with provolone cheese, dressings, vegetables and toppings of your choice',
  'pita' : 'Roasted red pepper hummus with pita chips.',
  'salad' : '[Small or Large] Romaine, arugula, cherry tomatoes, red onions, green olives, shredded parmigiano cheese with choice of dressing.',
  'soup' : 'A soup with vegetables, beans, pasta.',
  'sub' : 'A hot veggie sub with grilled eggplant, zucchini, roasted red peppers, goat cheese & balsamic vinegar.'
};

for (let index = 0; index < gallery.length; index++) {
  const element = gallery[index];
  element.addEventListener('click', expand);
}
function expand(event) {
    const smallImage = event.currentTarget;
    const bigImage = document.querySelector(".big");
    bigImage.classList.remove('big');
    bigImage.classList.add('small');
    smallImage.classList.remove('small');
    smallImage.classList.add('big');

    const chipotle = document.querySelector(".chipotle_text");
    const jjs = document.querySelector(".jj_text");
    const pizza = document.querySelector(".pizza_text");
    const imageID = smallImage.id;
    chipotle.textContent = foodinfo[imageID];
    jjs.textContent = foodinfo[imageID];
    pizza.textContent = foodinfo[imageID];
  }
  