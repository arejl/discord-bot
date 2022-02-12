module.exports = message => {
  const disquettes = [
    "ton père c'est un voleur ? Il a pris toutes les étoiles du ciel pour les mettre dans tes yeux.",
    "ton père il travaille chez Nintendo ? Parce que t'as un corps de DS",
    "ça t'a fait mal ? Quand tu es tombé.e du ciel",
    "je crois qu'on s'est déjà vu.e.s quelque part... Dans mes rêves :wink:",
    "moi sans toi, c'est comme un océan sans eau.",
    "tu n'aurais pas un plan par hasard ? Je me suis perdu.e dans tes yeux :pleading_face:",
    "en temps normal je nage très bien, mais là je me perds dans tes yeux...",
    "tu travaillerais pas dans l'armée ? Parce que t'es canon :boom:",
    "ton vrai nom ça serait pas Google ? Parce que je trouve en toi tout ce que je recherche :books:",
    "si l'amour est un crime, prends-moi pour victime.",
    "j'aimerais être une larme pour naître dans tes yeux, vivre sur ta joue et mourir sur tes lèvres.",
    "ton père n'aurait pas fabriqué le Titanic ? Parce que tu as fait chavirer mon cœur.",
    "j'ai un problème avec mon portable : il manque ton numéro."
  ];
  message.react('😏');
  message.react('💌');
  message.reply(`Hé ${message.author}, ${disquettes[Math.floor(Math.random() * disquettes.length)]}`);
}