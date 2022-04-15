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
        start: { year: 2021, month: 4 },
        title: "C++ game engine: ByteCat",
        short: <>
            Omdat ik al meerdere keren opnieuw een basis renderer, shader en zulke dingen heb moeten maken elke keer als ik iets in OpenGL wilde doen.<br />
            Ik heb besloten om een basis opzet te maken voor elke game/applicatie die iets grafisch nodig heeft. Om deze reden ben ik begonnen met het maken van mijn eigen game engine: ByteCat.
        </>,
        shortImage: ByteCatImg,
        link: "https://github.com/CodingWithMenno/ByteCat",
        linkLabel: "Bekijk het op Github",
        technologies: [
            { name: "C++" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
        ]
    },

    {
        start: { year: 2021, month: 4 },
        end: { year: 2021, month: 5 },
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
        start: { year: 2020, month: 12 },
        end: { year: 2021, month: 3 },
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
        link: "https://github.com/CodingWithMenno/3DGame",
        linkLabel: "Bekijk de source",
        technologies: [
            { name: "Java" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
            { name: "No engine" }
        ]
    },

    {
        start: { year: 2020, month: 10 },
        end: { year: 2020, month: 12 },
        title: "Elektrische Step",
        short: <>
            Deze applicatie bevat software voor een arduino die een motor aanstuurt en software voor een android app die met de arduino kan communiceren.<br />
            De app maakt gebruik van GPS om de snelheid te berekenen van de gebruiker en Bluetooth om te communiceren met de Arduino.
        </>,
        shortImage: EStepImg,
        link: "https://github.com/CodingWithMenno/ElektrischeStep",
        linkLabel: "Bekijk de sourcecode",
        technologies: [
            { name: "Arduino", link: "https://www.arduino.cc/" },
            { name: "Mobile" },
            { name: "Bluetooth" },
            { name: "GPS" }
        ]
    },

    {
        start: { year: 2020, month: 9 },
        end: { year: 2020, month: 10 },
        title: "Discord Bot",
        short: <>
            Deze bot is gemaakt in Java en maakt gebruik van een API om te verbinden met Discord.<br />
            De bot heeft allemaal leuke commands + elke gebruiker van de bot kan een eigen playlist aanmaken met liedjes die de bot altijd onthoud.
        </>,
        link: "https://github.com/CodingWithMenno/discordBot",
        linkLabel: "Bekijk op Github",
        technologies: [
            { name: "Java" },
            { name: "Discord" }
        ]
    },

    {
        start: { year: 2020, month: 4 },
        end: { year: 2020, month: 6 },
        title: "Online platformer",
        short: <>
            Deze game is gemaakt vanuit niks in Java. Dit is mijn eerste online applicatie.<br />
            In de app is er een lobby waar je kan chatten met andere players.<br />
            Daarnaast kan je een game starten samen met een andere player en tegen hem strijden in een simpele maar toch leuke platformer.
        </>,
        shortImage: OnlinePlatformer,
        link: "https://drive.google.com/file/d/14CC6SVxv3TZe4IAYSq6mjJqU0dlE1vuU/view?usp=sharing",
        linkLabel: "Download",
        technologies: [
            { name: "Java" },
            { name: "No engine" }
        ]
    },

    {
        start: { year: 2020, month: 1 },
        end: { year: 2020, month: 3 },
        title: "Getting over it",
        short: <>
            Deze game is gebaseerd op de game: Getting over it with Bennett Foddy. <br />
            Alleen heeft mijn versie een paar leuke extra features zoals een world maker, waar je je eigen wereld kan bouwen en er in spelen. <br />
            Daarnaast heeft de game ook een paar secrets in de map en als je de game uitspeeld.
        </>,
        shortImage: GettinOverItImg,
        link: "https://drive.google.com/open?id=1ITomFEyggwv_WgbSMc6KsfMaIz0QTNFB",
        linkLabel: "Download de source",
        technologies: [
            { name: "Java" },
            { name: "No engine" }
        ]
    },

    {
        start: { year: 2019, month: 11 },
        end: { year: 2020, month: 1 },
        title: "Google Dino Game",
        short: <>
            Dit is de eerste game die ik ooit heb gemaakt. De game is gebaseerd op de hidden dino game van google. <br />
            Deze game is vanaf niks opgebouwd in Java. <br />
            Al haal je het laatste level is er een leuke verrassing.
        </>,
        shortImage: DinosImg,
        link: "https://drive.google.com/file/d/1VgZ6Ga8cBX992wnaTddUaUGykjNG4g5a/view?usp=sharing",
        linkLabel: "Download source",
        technologies: [
            { name: "Java" },
        ]
    },
];