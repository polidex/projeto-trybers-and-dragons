import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static createInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity); 
    this._maxLifePoints = 74; 
    Orc.createInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.createInstance;
  }
}

export default Orc;