import React, { useReducer, useState } from 'react';
import Timeline, { Period, Project, Technology } from "../components/Timeline/index";
import Select from 'react-select';

const initialFilter = {
    technologies: [],
    periods: [],
    search: ""
};

const toSelect = (array) => array.map((item) => {
    return {
        value: item,
        label: item
    };
});

const ProjectsTimeline = () => {
    const [filterOptions, setFilterOptions] = useState({
        technologies: [],
        periods: [],
        projects: [],
        loading: true
    });

    const [filter, filterDispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case "FILTER_SEARCH_CHANGED":
                return { ...state, search: payload };
            case "FILTER_PERIODS_CHANGED":
                return { ...state, periods: payload };
            case "FILTER_TECH_CHANGED":
                return { ...state, technologies: payload };
            default:
                return state;
        }
    }, initialFilter);

    return (
        <div className="flex flex-col items-center">
            <header className="w-full bg-main text-center py-8">
                <h2 className="text-[4rem] text-white">Mijn projecten</h2>
            </header>
            <div className="flex gap-2 p-4">
                <div>
                    <label>Zoek op naam</label>
                    <input
                        className="outline outline-1 outline-main rounded-md px-2 py-1 ml-1"
                        defaultValue={filter.search}
                        placeholder="Naam..."
                        onChange={e => filterDispatch({
                            type: "FILTER_SEARCH_CHANGED",
                            payload: e.target.value
                        })}
                        disabled={filterOptions.loading}
                    />
                </div>
                <div className="flex items-center">
                    <label>Periode</label>
                    <Select
                        className="ml-1"
                        onChange={periods => filterDispatch({ type: "FILTER_PERIODS_CHANGED", payload: periods.map(per => per.value) })}
                        value={filter.periods.map(per => ({ value: per, label: per }))}
                        options={filterOptions.periods}
                        isLoading={filterOptions.loading}
                        isMulti
                    />
                </div>
                <div className="flex items-center">
                    <label>Technologie</label>
                    <Select
                        className="ml-1"
                        onChange={techs => filterDispatch({ type: "FILTER_TECH_CHANGED", payload: techs.map(tech => tech.value) })}
                        value={filter.technologies.map(tech => ({ value: tech, label: tech }))}
                        options={filterOptions.technologies}
                        isLoading={filterOptions.loading}
                        isMulti
                    />
                </div>
            </div>
            <Timeline
                className="px-8 py-8 items-center"
                filter={filter}
                onParsed={timeline => setFilterOptions({
                    technologies: toSelect(timeline.technologies),
                    periods: toSelect(timeline.periods),
                    projects: timeline.projects,
                    loading: false
                })}
            >
                <Period title="Voortgaande">
                    <Project
                        title="C++ game engine: ByteCat"
                        timestamp="? tot Heden"
                        text={<>
                            Omdat ik al meerdere keren opnieuw een basis renderer, shader en zulke dingen heb moeten maken elke keer als ik iets in OpenGL wilde doen.<br />
                            Ik heb besloten om een basis opzet te maken voor elke game/applicatie die iets grafisch nodig heeft. Om deze reden ben ik begonnen met het maken van mijn eigen game engine: ByteCat.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="C++" />,
                            <Technology key="2" name="OpenGL" link="https://www.opengl.org/" />,
                            <Technology key="3" name="ByteCat Engine" />,
                        ]}
                    />
                </Period>
                <Period title="Studie jaar 2" >
                    <Project
                        title="Mijn (oude) website"
                        timestamp="Periode 3"
                        text={<>
                            Ik ben begonnen met het leren van web-development. Op mijn website maak ik gebruik van HTML5, CSS en JavaScript.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Web" />,
                            <Technology key="2" name="HTML5" />,
                            <Technology key="3" name="CSS" />,
                            <Technology key="4" name="JavaScript" />,
                        ]}
                    />
                    <Project
                        title="3D OpenGL game"
                        timestamp="Periode 2 (15-03-2021)"
                        text={<>
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
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Java" />,
                            <Technology key="2" name="OpenGL" link="https://www.opengl.org/" />,
                            <Technology key="3" name="No engine" />,
                        ]}
                    />
                    <Project
                        title="OpenStreetMap Fit tracker"
                        timestamp="Periode 2 (12-01-2021)"
                        text={<>
                            Deze Android app houd je stappen bij via GPS van de hele maand.<br />
                            Daarnaast kan je in deze app gemakkelijk routes invullen door middel van de ingebouwde OpenStreetMap API.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="OpenStreetMap API" link="https://www.openstreetmap.org" />,
                            <Technology key="2" name="Mobile" />,
                            <Technology key="3" name="GPS" />,
                        ]}
                    />
                    <Project
                        title="Elektrische Step"
                        timestamp="Periode 1 & 2 (17-12-2020)"
                        text={<>
                            Deze applicatie bevat software voor een arduino die een motor aanstuurt en software voor een android app die met de arduino kan communiceren.<br />
                            De app maakt gebruik van GPS om de snelheid te berekenen van de gebruiker en Bluetooth om te communiceren met de Arduino.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Arduino" link="https://www.arduino.cc/" />,
                            <Technology key="2" name="Mobile" />,
                            <Technology key="3" name="Bluetooth" />,
                            <Technology key="4" name="GPS" />,
                        ]}
                    />
                    <Project
                        title="Discord Bot"
                        timestamp="Periode 1 (01 - 10 - 2020)"
                        text={<>
                            Deze bot is gemaakt in Java en maakt gebruik van een API om te verbinden met Discord.<br />
                            De bot heeft allemaal leuke commands + elke gebruiker van de bot kan een eigen playlist aanmaken met liedjes die de bot altijd onthoud.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Java" />,
                            <Technology key="2" name="No engine" />,
                        ]}
                    />
                </Period>
                <Period title="Studie jaar 1">
                    <Project
                        title="Online platformer"
                        timestamp="Periode 4 (25-06-2020)"
                        text={<>
                            Deze game is gemaakt vanuit niks in Java. Dit is mijn eerste online applicatie.<br />
                            In de app is er een lobby waar je kan chatten met andere players.<br />
                            Daarnaast kan je een game starten samen met een andere player en tegen hem strijden in een simpele maar toch leuke platformer.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Java" />,
                            <Technology key="2" name="No engine" />,
                        ]}
                    />
                    <Project
                        title="Getting over it"
                        timestamp="Periode 3 (31-03-2020)"
                        text={<>
                            Deze game is gebaseerd op de game: Getting over it with Bennett Foddy. <br />
                            Alleen heeft mijn versie een paar leuke extra features zoals een world maker, waar je je eigen wereld kan bouwen en er in spelen. <br />
                            Daarnaast heeft de game ook een paar secrets in de map en als je de game uitspeeld.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Java" />,
                            <Technology key="2" name="No engine" />,
                        ]}
                    />
                    <Project
                        title="Google Dino Game"
                        timestamp="Periode 1 & 2 (05 - 01 - 2020)"
                        text={<>
                            Dit is de eerste game die ik ooit heb gemaakt. De game is gebaseerd op de hidden dino game van google. <br />
                            Deze game is vanaf niks opgebouwd in Java. <br />
                            Al haal je het laatste level is er een leuke verrassing.
                        </>}
                        link="/?r=/projects/1"
                        technologies={[
                            <Technology key="1" name="Java" />,
                        ]}
                    />
                </Period>
            </Timeline>
        </div >
    );
};

export default ProjectsTimeline;