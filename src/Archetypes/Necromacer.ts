import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energiType: EnergyType;
  static createInstance = 0;

  constructor(name: string) {
    super(name);
    this._energiType = 'mana';
    Necromancer.createInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energiType;
  }

  public static createdArchetypeInstances(): number {
    return this.createInstance;
  }
}

export default Necromancer;