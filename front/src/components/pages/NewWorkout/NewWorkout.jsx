import React, { useState } from "react";
import Layout from "../../common/Layout";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

import styles from "./NewWorkout.module.scss";

import bgImage from "./../../../images/new-workout-bg.jpg";

const NewWorkout = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {};

    return (
        <>
            <Layout bgImage={bgImage} />
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit}>
                    <Field placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
                    <Button text="Create" callback={() => {}} />
                </form>
            </div>
        </>
    );
};

export default NewWorkout;
