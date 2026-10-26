import { Animal } from "../polimorfismo/Animal.ts";
import { Cachorro } from "../polimorfismo/Cachorro.ts";
import { Gato } from "../polimorfismo/Gato.ts";

export function executarExercicio03(): void {
  const animais: Animal[] = [new Cachorro(), new Gato()];

  for (const animal of animais) {
    console.log(`${animal.constructor.name}: ${animal.emitirSom()}`);
  }
}
