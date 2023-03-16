const aliens = [
    { name: "Zalamero", planet: "Eden", age: 4029 },
    { name: "Paktu", planet: "Andromeda", age: 32 },
    { name: "Cucushumushu", planet: "Marte", age: 503021 },
  ];

  const mutations = [
    {
      name: "Porompompero",
      description:
        "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
    },
    {
      name: "Fly me to the moon",
      description: "Permite volar, solo y exclusivamente a la luna",
    },
    {
      name: "Andando que es gerundio",
      description: "Invoca a un señor mayor como Personal Trainer",
    },
  ];

  const cucu = aliens.find ((element) =>  element.name == 'Cucushumushu');
  const poro = mutations.find ((muta) =>  muta.name == 'Porompompero');
  aliens[2].push(poro);


  console.log(aliens);