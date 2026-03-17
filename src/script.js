function CreateWizard(firstName, mySpell) {
	this.name 	= firstName
	this.spell	= mySpell
}

CreateWizard.prototype.attack = function () {
		return "útok pomocou kúzla " + this.spell
	}

const wizard1 = new CreateWizard("David", "abraka")
console.log(wizard1.attack())

const wizard2 = new CreateWizard("Harry", "imobilus")
console.log(wizard2.attack())
