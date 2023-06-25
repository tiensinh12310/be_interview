'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let data = [];
    const genderList= ['male', 'female']

    const nameList = [
      'Time', 'Past', 'Future', 'Dev',
      'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
      'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
      'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
      'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
      'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
      'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
      'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
      'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
      'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
      'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
      'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
      'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
      'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
      'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
      'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
      'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
      'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
      'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
      'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
      'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    function generateName() {
      const firstName = nameList[Math.floor(Math.random() * nameList.length)];
      const lastName = nameList[Math.floor(Math.random() * nameList.length)];

      return firstName + lastName
    };
    function generateEmail() {
      const firstName = nameList[Math.floor(Math.random() * nameList.length)];
      const lastName = nameList[Math.floor(Math.random() * nameList.length)];

      return firstName + lastName + `@yopmail.com`
    };

    function generateAddress() {
      var streetNumber = ['25489', '87459', '35478', '15975', '95125', '78965']

      var streetName = ['A street', 'B street', 'C street', 'D street', 'E street', 'F street',]

      var cityName = ['Riyadh', 'Dammam', 'Jedda', 'Tabouk', 'Makka', 'Maddena', 'Haiel']

      var stateName = ['Qassem State', 'North State', 'East State', 'South State', 'West State']

      var zipCode = ['28889', '96459', '35748', '15005', '99625', '71465']

      function getRandom(input) {
        return input[Math.floor((Math.random() * input.length))];
      }

      return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;
    }

    let amount = 10

    while(amount--) {
      data.push({
        name: generateName(),
        email:  generateEmail(),
        address: generateAddress(),
        gender: genderList[Math.floor((Math.random() * genderList.length))] || 'male',
      })
    }
    console.log(data, '====')

    await queryInterface.bulkInsert('Customers', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
