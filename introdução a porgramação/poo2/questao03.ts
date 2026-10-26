class Animal {
  emitirSom(): string {
    return "Som";
  }
}

class Cachorro extends Animal {
  override emitirSom(): string {
    return "Au Au";
  }
}

class Gato extends Animal {
  override emitirSom(): string {
    return "Miau";
  }
}

const animais: Animal[] = [new Cachorro(), new Gato()];

for (const animal of animais) {
  console.log(`${animal.constructor.name}: ${animal.emitirSom()}`);
}
