abstract class Race {
  private _name: string;
  private _desterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._desterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._desterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;