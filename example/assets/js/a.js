class SYST {
  constructor(name = 'SYST') {
    this.name = name;
    this.version = '1.0.0';
  }

  version() {
    return `this SYST current version: ${this.version}`;
  }
}

var syst = new SYST('GULP-JSMINER');
console.log(syst.version());
