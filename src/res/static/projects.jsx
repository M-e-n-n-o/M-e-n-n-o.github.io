import ByteCatGif from "../images/Mandelbrot.gif";
import OpenGLGameImg from "../images/3DOpenGLGame.webp";
import DinosImg from "../images/Dinos.webp";
import EStepImg from "../images/EStep.webp";
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
            Because I've had to recreate renderers, shaders, and other graphics component several times before every time I wanted to do something in OpenGL.<br />
            I decided to make a basic setup for every game/application that needs something with graphics. For this reason, I started making my own graphics engine: ByteCat.
        </>,
        shortImage: ByteCatGif,
        link: "https://github.com/CodingWithMenno/ByteCat",
        linkLabel: "Take a look at the Github",
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
            This is my first good application created using OpenGL. This app is created in Java with LWJGL which is a wrapper for OpenGL<br />
            which makes it possible to use Java to communicate with the Graphics Card. This application has the following features:
            <ul className="list-disc pl-4">
                <li>A 3D rotating collision detection system</li>
                <li>A simple 2D UI system</li>
                <li>A animation system</li>
                <li>Random terrain generation with coloring based on the height of the terrain</li>
                <li>Water with reflection and refractrions</li>
                <li>Shadows</li>
                <li>Customizable particlesystems</li>
                <li>Biomes in the terrain (with sounds and particles)</li>
                <li>A lighting system</li>
                <li>Birds with the boids algoritme</li>
                <li>Inversed kinematics</li>
            </ul>
        </>,
        shortImage: OpenGLGameImg,
        link: "https://github.com/CodingWithMenno/3DGame",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "Java" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
            { name: "LWJGL", link: "https://www.lwjgl.org" }
        ]
    },

    {
        start: { year: 2020, month: 10 },
        end: { year: 2020, month: 12 },
        title: "Elektrische Step",
        short: <>
            This application features software for an arduino which controlls a motor mounted on a scooter. This arduino can then communicate<br />
            using Bluetooth with an Android app which can show statistics about the motor, control the motor and calculate the speed using GPS.
        </>,
        shortImage: EStepImg,
        link: "https://github.com/CodingWithMenno/ElektrischeStep",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "Microcontrollers", link: "https://www.arduino.cc/" },
            { name: "Android" }
        ]
    },

    {
        start: { year: 2020, month: 9 },
        end: { year: 2020, month: 10 },
        title: "Discord Bot",
        short: <>
            This chatbot is made using Java and uses an API to connect to the services of Discord. <br />
            This bot has a few nice commands to for example create custom music playlist to listen to in voice channels <br />
            or get the weather info from all around the Netherlands or just send some memes.
        </>,
        link: "https://github.com/CodingWithMenno/discordBot",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "Java" },
            { name: "Bot" }
        ]
    },

    {
        start: { year: 2020, month: 4 },
        end: { year: 2020, month: 6 },
        title: "Online platformer",
        short: <>
            This app is made using JavaFX and is my first online application!<br />
            In the app is a lobby where you can chat with other players or watch the bot send random messages.<br />
            Besides this you can start a game with another player in the lobby to battle against in a simple but engaging platformer.
        </>,
        shortImage: OnlinePlatformer,
        link: "https://drive.google.com/file/d/14CC6SVxv3TZe4IAYSq6mjJqU0dlE1vuU/view?usp=sharing",
        linkLabel: "See the source code",
        technologies: [
            { name: "Java" },
            { name: "JavaFX", link: "https://openjfx.io" },
            { name: "Client-server" },
            { name: "Bot" }
        ]
    },

    {
        start: { year: 2020, month: 1 },
        end: { year: 2020, month: 3 },
        title: "Getting over it",
        short: <>
            This game is based on the popular indie game "Getting over it with Bennett Foddy" but with a twist.<br />
            This game features a creative world editor where you can create the world of your dreams!<br />
            Besides this there are several hidden secrets placed all around the map.
        </>,
        shortImage: GettinOverItImg,
        link: "https://drive.google.com/open?id=1ITomFEyggwv_WgbSMc6KsfMaIz0QTNFB",
        linkLabel: "See the source code",
        technologies: [
            { name: "Java" }
        ]
    },

    {
        start: { year: 2019, month: 11 },
        end: { year: 2020, month: 1 },
        title: "Google Dino Game",
        short: <>
            This is the first game I ever created. It is based on the hidden dino game in Google Chrome.<br />
            When completing the final level, there is a hidden secret.
        </>,
        shortImage: DinosImg,
        link: "https://drive.google.com/file/d/1VgZ6Ga8cBX992wnaTddUaUGykjNG4g5a/view?usp=sharing",
        linkLabel: "See the source code",
        technologies: [
            { name: "Java" },
            { name: "Java AWT" }
        ]
    },
];