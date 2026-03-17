function CreateWizard(firstName, mySpell) {
	// console.log("this: ", this)		// prázdny object
	this.name 	= firstName
	this.spell	= mySpell
	// console.log("this: ", this)		// naplnený object
}

CreateWizard.prototype.attack = function () {
		return "útok pomocou kúzla " + this.spell
	}

const wizard1 = new CreateWizard("David", "abraka")
const wizard2 = new CreateWizard("Harry", "imobilus")

// console.log(wizard1.__proto__)
// console.log(wizard1.prototype)
// console.log(CreateWizard.prototype)

// console.log(wizard1.__proto__ === CreateWizard.prototype)	// true

// Iba funkcie majú prototype
console.log(wizard1.prototype)		// je to object a nie funkcia
console.log(wizard2.prototype)		// je to object a nie funkcia
console.log(CreateWizard.prototype) // toto je funkcia