import { Animal } from "./Animal.ts";

export class Cachorro extends Animal {
  override emitirSom(): string {
    return "Au Au";
  }
}
