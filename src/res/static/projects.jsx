import ByteCatImg from "../images/ByteCat.webp";
import OpenGLGameImg from "../images/3DOpenGLGame.webp";
import DinosImg from "../images/Dinos.webp";
import EStepImg from "../images/EStep.webp";
import FitTrackerImg from "../images/FitTracker.webp";
import OldWebsiteImg from "../images/OldWebsite.webp";
import GettinOverItImg from "../images/GOI.webp";
import OnlinePlatformer from "../images/Platformer.webp";

/*
Note: 
technologies, link, linklabel are optional.
If you exclude the end date it will assume that the project is ongoing
*/

export default [

    {
        start: new Date("2021"),
        title: "C++ game engine: ByteCat",
        short: <>
            Omdat ik al meerdere keren opnieuw een basis renderer, shader en zulke dingen heb moeten maken elke keer als ik iets in OpenGL wilde doen.<br />
            Ik heb besloten om een basis opzet te maken voor elke game/applicatie die iets grafisch nodig heeft. Om deze reden ben ik begonnen met het maken van mijn eigen game engine: ByteCat.
        </>,
        description: "",
        shortImage: ByteCatImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "C++" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
            { name: "ByteCat Engine" }
        ]
    },

    {
        start: new Date("2021"),
        end: new Date("2021"),
        title: "Mijn (oude) website",
        short: <>Ik ben begonnen met het leren van web-development. Op mijn website maak ik gebruik van HTML5, CSS en JavaScript.</>,
        shortImage: OldWebsiteImg,
        technologies: [
            { name: "Web" },
            { name: "HTML5" },
            { name: "CSS" },
            { name: "JavaScript" }
        ]
    },

    {
        start: new Date("2021"),
        end: new Date("2021"),
        title: "3D OpenGL game",
        short: <>
            Dit is mijn eerste 3D game. Deze game is gemaakt zonder een engine in Java met OpenGL. De game bevat o.a.:
            <ul className="list-disc pl-4">
                <li>Een 3d roterend botsing detectie systeem</li>
                <li>Een simpel 2D UI systeem</li>
                <li>Een animatie systeem</li>
                <li>Willekeurig terrein generatie met terrein kleur a.d.h.v. hoogte</li>
                <li>Water met reflectie en breking</li>
                <li>Schaduwen</li>
                <li>Een entiteit systeem</li>
                <li>Een particlesysteem</li>
                <li>Biomes in het terrein (met geluid en particles)</li>
                <li>Een lichtsysteem</li>
                <li>Vogels met het boids algoritme</li>
                <li>Omgekeerde kinematica</li>
            </ul>
        </>,
        shortImage: OpenGLGameImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Java" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
            { name: "No engine" }
        ]
    },

    {
        start: new Date("2021"),
        end: new Date("2021"),
        title: "OpenStreetMap Fit tracker",
        short: <>
            Deze Android app houd je stappen bij via GPS van de hele maand.<br />
            Daarnaast kan je in deze app gemakkelijk routes invullen door middel van de ingebouwde OpenStreetMap API.
        </>,
        shortImage: FitTrackerImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "OpenStreetMap API", link: "https://www.openstreetmap.org" },
            { name: "Mobile" },
            { name: "GPS" }
        ]
    },

    {
        start: new Date("2020"),
        end: new Date("2021"),
        title: "Elektrische Step",
        short: <>
            Deze applicatie bevat software voor een arduino die een motor aanstuurt en software voor een android app die met de arduino kan communiceren.<br />
            De app maakt gebruik van GPS om de snelheid te berekenen van de gebruiker en Bluetooth om te communiceren met de Arduino.
        </>,
        shortImage: EStepImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Arduino", link: "https://www.arduino.cc/" },
            { name: "Mobile" },
            { name: "Bluetooth" },
            { name: "GPS" }
        ]
    },

    {
        start: new Date("2020"),
        end: new Date("2020"),
        title: "Discord Bot",
        short: <>
            Deze bot is gemaakt in Java en maakt gebruik van een API om te verbinden met Discord.<br />
            De bot heeft allemaal leuke commands + elke gebruiker van de bot kan een eigen playlist aanmaken met liedjes die de bot altijd onthoud.
        </>,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Java" },
            { name: "Discord" }
        ]
    },

    {
        start: new Date("2020"),
        end: new Date("2020"),
        title: "Online platformer",
        short: <>
            Deze game is gemaakt vanuit niks in Java. Dit is mijn eerste online applicatie.<br />
            In de app is er een lobby waar je kan chatten met andere players.<br />
            Daarnaast kan je een game starten samen met een andere player en tegen hem strijden in een simpele maar toch leuke platformer.
        </>,
        shortImage: OnlinePlatformer,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Java" },
            { name: "No engine" }
        ]
    },

    {
        start: new Date("2020"),
        end: new Date("2020"),
        title: "Getting over it",
        short: <>
            Deze game is gebaseerd op de game: Getting over it with Bennett Foddy. <br />
            Alleen heeft mijn versie een paar leuke extra features zoals een world maker, waar je je eigen wereld kan bouwen en er in spelen. <br />
            Daarnaast heeft de game ook een paar secrets in de map en als je de game uitspeeld.
        </>,
        shortImage: GettinOverItImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Java" },
            { name: "No engine" }
        ]
    },

    {
        start: new Date("2020"),
        end: new Date("2020"),
        title: "Google Dino Game",
        short: <>
            Dit is de eerste game die ik ooit heb gemaakt. De game is gebaseerd op de hidden dino game van google. <br />
            Deze game is vanaf niks opgebouwd in Java. <br />
            Al haal je het laatste level is er een leuke verrassing.
        </>,
        shortImage: DinosImg,
        link: "https://www.opengl.org/",
        linkLabel: "Download Source",
        technologies: [
            { name: "Java" },
        ]
    },
];