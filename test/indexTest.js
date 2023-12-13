describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });

  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });

  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }
  
  const tip1 = 'generous';
  const tip2 = 'not as generous';
  const tip3 = 'thanks for everything';
  
  console.log(switchOnCharmFromTip(tip1)); 
  console.log(switchOnCharmFromTip(tip2));
  console.log(switchOnCharmFromTip(tip3)); 
})
