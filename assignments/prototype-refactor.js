/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(attribute){
//     this.createdAt = attribute.createdAt, 
//     this.name = attribute.name,
//     this.dimensions = attribute.dimensions
//   }
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game`
//   }

  class GameObject{
      constructor(att){
          this.created = att.createdAt
          this.theName = att.name
          this.theDimensions = att.dimensions
      }
      destroy(){
          return `${this.theName} was removed from the game`
      }
  }
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  // function CharacterStats() {
  //   this.healthPoints = healthPoints, 
  // }
  // CharacterStats.prototype.takeDamage = function(){
  //   return `${this.name} took damage`
  // }
  // console.log(CharacterStats);
  
//   function CharacterStats(attribute){
//     GameObject.call(this, attribute),
//     this.healthPoints = attribute.healthPoints
  
    
    
//     // this.isChild = name.isChild
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage`;
//   }
  
  class CharacterStats extends GameObject{
      constructor(attr2){
          super(attr2);
          this.thehealthPoints = attr2.healthPoints;
      }
      takeDamage(){
          return `${this.theName} took damage`
      }
  }
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(attribute){
//     CharacterStats.call(this, attribute);
//     this.team = attribute.team,
//     this.weapons = attribute.weapons,  
//     this.language = attribute.language 
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function(){
  
//     return `${this.name}, offers agreeting in ${this.language}`
//   }
   
  class Humanoid extends CharacterStats{
      constructor(attr3){
          super(attr3)
          this.theTeam = attr3.team
          this.theWeapon = attr3.weapons
          this.theLanguage = attr3.language
      }
      greet(){
          return `${this.theName}, offers agreeting in ${this.theLanguage}`
      }
  }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.created); // Today's date
    console.log(archer.theDimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.thehealthPoints); // 15
    console.log(mage.theName); // Bruce
    console.log(swordsman.theTeam); // The Round Table
    console.log(mage.theWeapon); // Staff of Shamalama
    console.log(archer.theLanguage); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  