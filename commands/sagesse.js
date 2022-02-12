module.exports = message => {
  const dictons = [
    "Qui pisse dans le vent se rince les dents.",
    "Qui s'endort avec le cul qui gratte se réveille avec le doigt qui pue.",
    "Slip ou caleçon, l'essentiel est d'être à l'aise dans ses sous-vêtements.",
    "Neige en novembre, Noël en décembre.",
    "Pingouins dans les champs, hiver méchant.",
    "Quand le coucou chante en mai, c'est qu'avril est terminé.",
    "Bière qui coule ramasse la mousse.",
    "Donne un poisson à un homme et il mangera un jour, apprends-lui à pêcher et il restera toute la journée à glander au bord de l'eau en buvant du Muscadet.",
    "Qui pète et rote bien se porte.",
    "Quand tu marches vers le Nord, tu as le sudoku.",
    "Si tu as perdu ton cheval, regarde sous la selle.",
    "Caleçon qui gratte, morpions qui squattent.",
    "Il y a trois sortes de personnes dans le monde : celles qui savent compter et celles qui ne savent pas.",
    "Mouette qui pète, gare à la tempête.",
    "Soleil en août, pâté en croûte."
  ];
  message.react('🧠');
  message.react('🍺');
  message.reply(`${dictons[Math.floor(Math.random() * dictons.length)]}`);
}