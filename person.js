var name = "John Doe"
function Container(param) {
    this.member = param;
}
var age = new Container(myage);

Container.prototype.birthday = function () {
    this.member = this.member+1
    return this.member;
}


myPerson = function(){
    var ssn = 555555;
    var weight = 150;

    this.gainWeight = function(weightToGain){
        weight = weight + weightToGain
    }

    this.getSSN = function(){
        console.log(ssn)
    }
    this.getWeight = function(){
        console.log(weight)
    }


}



x = new myPerson()