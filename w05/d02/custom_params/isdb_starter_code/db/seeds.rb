Hero.delete_all

Hero.create(name: "Mr. Nice Guy", identity: "Edward Yu", powers: "super niceness", location: "Los Angeles", nemesis: "None", weakness: "Undying urge to open doors for people", description: "a super nice fella")

Hero.create(name: "Hackerella", identity: "La Baik", powers: "slick encrypted password stealing abilities", location: "Los Angeles", nemesis: "Grant Roy, Code Security Genius", weakness: "unreadable sloppy code", description: "nonchalant-chaotic")

50.times do
  Hero.create(name: Superhero.name, identity: Superhero.alias, powers: Superhero.power, location: Faker::Address.city, nemesis: Superhero.nemesis, weakness: Superhero.weakness, description: Superhero.alignment)
end

Hero.create(name: "Soy Sauce Man", identity: "John Kwak", powers: "super-human strength and athletic prowess ", location: "Los Angeles", nemesis: "The Barefoot Bandit", weakness: "being called a chicken", description: "chaotic-good")
