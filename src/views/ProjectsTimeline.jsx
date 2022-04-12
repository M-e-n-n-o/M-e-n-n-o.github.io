import React, { useReducer, useState } from 'react';
import Timeline from "../components/Timeline/index";
import Select from 'react-select';
import projects from "../res/static/projects";
import Header from "../components/Header";

const initialFilter = {
    technologies: [],
    projects: [],
    sort: "Datum ↓",
    search: ""
};

const controlStyle = {
    cursor: "default",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "38px",
    outline: "0",
    position: "relative",
    transition: "all 100ms",
    boxSizing: "border-box",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    borderColor: "rgb(36 126 0);"
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
        projects: [],
        sort: "",
        loading: true
    });

    const [filter, filterDispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case "FILTER_SEARCH_CHANGED":
                return { ...state, search: payload };
            case "FILTER_TECH_CHANGED":
                return { ...state, technologies: payload };
            case "SORT_CHANGED":
                return { ...state, sort: payload };
            default:
                return state;
        }
    }, initialFilter);

    return (
        <div className="flex flex-col items-center">
            <Header>
                <h2 className="text-[4rem] text-white">Mijn projecten</h2>
            </Header>
            <div className="flex gap-2 md:gap-4 p-8 flex-col w-11/12 children:flex children:items-center children:justify-between children:flex-col children:gap-1 sm:children:flex-row sm:w-4/5 md:flex-row md:w-fit">
                <div>
                    <label>Zoek op naam</label>
                    <input
                        className="border border-1 border-main rounded-md px-2 py-1 flex-1 h-[2.375rem] w-full sm:w-fit"
                        defaultValue={filter.search}
                        placeholder="Naam..."
                        onChange={e => filterDispatch({
                            type: "FILTER_SEARCH_CHANGED",
                            payload: e.target.value
                        })}
                        disabled={filterOptions.loading}
                    />
                </div>
                <div>
                    <label>Technologie</label>
                    <Select
                        className="flex-1 min-h-[2.375rem] w-full sm:w-fit"
                        placeholder="Selecteer..."
                        styles={{ control: () => controlStyle }}
                        onChange={techs => filterDispatch({ type: "FILTER_TECH_CHANGED", payload: techs.map(tech => tech.value) })}
                        value={filter.technologies.map(tech => ({ value: tech, label: tech }))}
                        options={filterOptions.technologies}
                        isLoading={filterOptions.loading}
                        isMulti
                    />
                </div>
                <div>
                    <label>Sorteer op</label>
                    <Select
                        className="flex-1 min-h-[2.375rem] w-full sm:w-fit"
                        styles={{ control: () => controlStyle }}
                        onChange={date => filterDispatch({ type: "SORT_CHANGED", payload: date.value })}
                        value={{ label: filter.sort, value: filter.sort }}
                        options={[
                            { label: "Datum ↓", value: "Datum ↓" },
                            { label: "Datum ↑", value: "Datum ↑" },
                            { label: "Naam ABC", value: "Naam ABC" },
                            { label: "Naam CBA", value: "Naam CBA" }
                        ]}
                        isLoading={filterOptions.loading}
                    />
                </div>
            </div>
            <Timeline
                className="p-8 items-center"
                filter={filter}
                onParsed={timeline => setFilterOptions({
                    technologies: toSelect(timeline.technologies),
                    projects: timeline.projects,
                    loading: false
                })}
                projects={projects}
            />
        </div >
    );
};

export default ProjectsTimeline;