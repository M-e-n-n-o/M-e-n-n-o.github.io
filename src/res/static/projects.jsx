import ByteCatGif from "../images/Mandelbrot.gif";
import OpenGLGameImg from "../images/3DOpenGLGame.webp";
import DinosImg from "../images/Dinos.webp";
import EStepImg from "../images/EStep.webp";
import OldWebsiteImg from "../images/OldWebsite.webp";
import GettinOverItImg from "../images/GOI.webp";
import OnlinePlatformer from "../images/Platformer.webp";
import TaskRushGif from "../images/TaskRush.gif"

/*
Note: 
technologies, link, linklabel are optional.
If you exclude the end date it will assume that the project is ongoing
*/

export default [

    {
        start: { year: 2022, month: 2 },
        title: "TaskRush",
        short: <>
            After a great collaboration during an internship with Frank Datema, a 3D artist, we decided to create a game together: TaskRush.
            In this Virtual Reality (VR) application, the aim is to complete as many tasks as possible within the maximum amount of time.
            The tasks range from catching fish with a spear to eating as many sandwiches as possible! The game takes place on a stage where 
            a mysterious character commands you. The goal of this project is to release this game on online stores such as Steam and Meta.
        </>,
        shortImage: TaskRushGif,
        link: "https://discord.gg/Jxs3QcRPW2",
        linkLabel: "Discord server",
        technologies: [
            { name: "Unity", link: "https://unity.com" },
            { name: "C#" },
            { name: "VR" }
        ]
    },

    {
        start: { year: 2021, month: 4 },
        title: "Graphics engine: ByteCat",
        short: <>
            Welcome to ByteCat, my very own graphics engine! The development of this engine has started because every time I wanted to create something
            in OpenGL I've had to start over from scratch and create the same graphics components over and over again. This goal has already been reached!
            The next goal for this engine has extended way beyond this and focusses on building an extensive and enjoyable to work with engine with a 
            simple and easy to navigate user interface.
            </>,
        shortImage: ByteCatGif,
        link: "https://github.com/M-e-n-n-o/ByteCat",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "C++" },
            { name: "OpenGL", link: "https://www.opengl.org/" },
        ]
    },

    {
        start: { year: 2020, month: 12 },
        end: { year: 2021, month: 3 },
        title: "Java OpenGL game",
        short: <>
            This is my very first graphics project using OpenGL. This app is created in Java with LWJGL which is a wrapper for OpenGL
            which makes it possible to use Java to communicate with the Graphics Card. This application has the following features: 
            Water with reflection and refractrion, a lighting system, shadows, a 3D rotating collision detection system, birds with the boids algorithm, 
            inversed kinematics, an animation system, random terrain generation with coloring based on the height of the terrain, customizable particlesystems, 
            biomes in the terrain (with sounds and particles) & a simple 2D UI system.
        </>,
        shortImage: OpenGLGameImg,
        link: "https://github.com/M-e-n-n-o/3DGame",
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
        title: "Electric Scooter",
        short: <>
            This application features software for an arduino which controlls a motor mounted on a scooter. This arduino can then communicate
            using Bluetooth with an Android app which can show statistics about the motor, control the motor and calculate the speed using GPS.
        </>,
        shortImage: EStepImg,
        link: "https://github.com/M-e-n-n-o/ElektrischeStep",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "Microcontrollers", link: "https://www.arduino.cc/" },
            { name: "Android", link: "https://developer.android.com" }
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
        link: "https://github.com/M-e-n-n-o/discordBot",
        linkLabel: "Take a look at the Github",
        technologies: [
            { name: "Java" }
        ]
    },

    {
        start: { year: 2020, month: 4 },
        end: { year: 2020, month: 6 },
        title: "Online platformer",
        short: <>
            This app is made using JavaFX and is my first online application!
            In the app is a lobby where you can chat with other players or watch the chatbot send random messages.
            Besides this you can start a game with another player in the lobby to battle against in a simple but engaging platformer.
        </>,
        shortImage: OnlinePlatformer,
        link: "https://drive.google.com/file/d/14CC6SVxv3TZe4IAYSq6mjJqU0dlE1vuU/view?usp=sharing",
        linkLabel: "See the source code",
        technologies: [
            { name: "Java" },
            { name: "JavaFX", link: "https://openjfx.io" },
            { name: "Networking" }
        ]
    },

    {
        start: { year: 2020, month: 1 },
        end: { year: 2020, month: 3 },
        title: "Getting over it",
        short: <>
            This game, which is created using a very simple 2D graphics framework built by my university, is based on the popular indie game 
            "Getting over it with Bennett Foddy". The goal in this game is to reach the end of the level with only a sledgehammer to move around. 
            Besides the almost impossible standard level to complete this game also features a world editor where you can create a world of your own!
            At last there are also several hidden secrets placed all around the map.
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
            My very first side project! This game, created in Java using the AWT framework, is based on the secret dino game in Google Chrome but
            is a 100x times harder! The application exist of 6 levels with each one getting more and more difficult. After completing the last
            level there is a secret easter egg which you will have to figure out for yourself :)
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