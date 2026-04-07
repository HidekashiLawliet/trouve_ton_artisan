const artisans = [
    {
        nom: "Au pain chaud",
        specialite: "Boucher",
        note: 4.5,
        ville: "Lyon",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.",
        email: "boucherie.dumond@gmail.com",
        siteweb: "",
        categorie: "alimentation",
        top: false,
    },
    {
        nom: "Au pain chaud",
        specialite: "Boulanger",
        note: "4.8",
        ville: "Montélimar",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "aupainchaud@hotmail.com",
        categorie: "alimentation",
        top: true
    },
    {
        nom: "Chocolaterie Labbé",
        specialite: "Chocolatier",
        note: "4.9",
        ville: "Lyon",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "chocolaterie-labbe@gmail.com",
        siteweb: "https://chocolaterie-labbe.fr",
        categorie: "alimentation",
        top: true
    },
    {
        nom: "Traiteur Truchon",
        specialite: "Traiteur",
        note: "4.1",
        ville: "Lyon",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "contact@truchon-traiteur.fr",
        siteweb: "https://truchon-traiteur.fr",
        categorie: "alimentation",
        top: false
    },
    {
        nom: "Orville Salmons",
        specialite: "Chauffagiste",
        note: "5.0",
        ville: "Evian",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "o-salmons@live.com",
        categorie: "batiment",
        top: true
    },
    {
        nom: "Mont Blanc Eléctricité",
        specialite: "Electricien",
        note: "4.5",
        ville: "Chamonix",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "contact@mont-blanc-electricite.com",
        SiteWeb: "https://mont-blanc-electricite.com",
        categorie: "batiment",
        top: false
    },
    {
        nom: "Boutot & fils",
        specialite: "Menuisier",
        note: "4.7",
        ville: "Bourg-en-bresse",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "boutot-menuiserie@gmail.com",
        siteweb: "https://boutot-menuiserie.com",
        categorie: "batiment",
        top: false
    },
    {
        nom: "Vallis Bellemare",
        specialite: "Plombier",
        note: "4.0",
        ville: "Vienne",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "v.bellemare@gmail.com",
        siteweb: "https://plomberie-bellemare.com",
        categorie: "batiment",
        top: false
    },
    {
        nom: "Claude Quinn",
        specialite: "Bijoutier",
        note: "4.2",
        ville: "Aix-les-bains",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "claude.quinn@gmail.com",
        categorie: "fabrication",
        top: false
    },
    {
        nom: "Amitee Lécuyer",
        specialite: "Couturier",
        note: "4.5",
        ville: "Annecy",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "a.amitee@hotmail.com",
        siteweb: "https://lecuyer-couture.com",
        categorie: "fabrication",
        top: false
    },
    {
        nom: "Ernest Carignan",
        specialite: "Ferronier",
        note: "5.0",
        ville: "Le Puy-en-Velay",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "e-carigan@hotmail.com",
        categorie: "fabrication",
        top: false
    },
    {
        nom: "Royden Charbonneau",
        specialite: "Coiffeur",
        note: "3.8",
        ville: "Saint-Priest",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "r.charbonneau@gmail.com",
        categorie: "services",
        top: false
    },
    {
        nom: "Leala Dennis",
        specialite: "Coiffeur",
        note: "3.8",
        ville: "Chambéry",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "l.dennos@hotmail.fr",
        siteweb: "https://coiffure-leala-chambery.fr",
        categorie: "services",
        top: false
    },
    {
        nom: "C'est sup'hair",
        specialite: "Coiffeur",
        note: "4.1",
        ville: "Romans-sur-Isère",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "sup-hair@gmail.com",
        siteweb: "https://sup-hair.fr",
        categorie: "services",
        top: false
    },
    {
        nom: "Le monde des fleurs",
        specialite: "Fleuriste",
        note: "4.6",
        ville: "Annonay",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "contact@le-monde-des-fleurs-annonay.fr",
        siteweb: "https://le-monde-des-fleurs-annonay.fr",
        categorie: "services",
        top: false
    },
    {
        nom: "Valérie Laderoute",
        specialite: "Toiletteur",
        note: "4.5",
        ville: "Valence",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "v-laredoute@gmail.com",
        categorie: "services",
        top: false
    },
    {
        nom: "CM Graphisme",
        specialite: "Webdesign",
        note: "4.4",
        ville: "Valence",
        apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email: "contact@cm-graphisme.com",
        siteweb: "https://cm-graphisme.com",
        categorie: "services",
        top: false
    }
];

module.exports = { artisans };
