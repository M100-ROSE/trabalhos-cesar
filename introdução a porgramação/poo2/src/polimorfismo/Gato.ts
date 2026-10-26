import { Animal } from "./Animal.ts";

export class Gato extends Animal {
  override emitirSom(): string {
    return "Miau";
  }
}
