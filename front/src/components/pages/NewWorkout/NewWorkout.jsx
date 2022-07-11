import React, { useState } from "react";
import ReactSelect from "react-select";
import Layout from "../../common/Layout";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

import bgImage from "./../../../images/new-workout-bg.jpg";
import { Link } from "react-router-dom";

const NewWorkout = () => {
    const [name, setName] = useState("");
    const [exercises, setExercises] = useState([]);

    const handleSubmit = () => {};

    return (
        <>
            <Layout bgImage={bgImage} heading="Create new workout" />
            <div className="wrapper-inner-page">
                <form onSubmit={handleSubmit}>
                    <Field placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
                    <Link to="/new-exercise" className="dark-link">
                        Add new exercise
                    </Link>
                    <ReactSelect
                        classNamePrefix="select2-selection"
                        placeholder="Exercises..."
                        title="Exercises"
                        options={[
                            { value: "afsdfasd", label: "Push-ups" },
                            { value: "affasd", label: "Pull-ups" },
                        ]}
                        value={exercises}
                        onChange={setExercises}
                        isMulti={true}
                    />
                    <Button text="Create" callback={() => {}} />
                </form>
            </div>
        </>
    );
};

export default NewWorkout;
