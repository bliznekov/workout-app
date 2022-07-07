import React from "react";

import styles from "./Counters.module.scss";

const Counters = () => {
    const counters = {
        minutes: 7,
        workouts: 1,
        kgs: 5,
    };
    return (
        <div className={styles.wrapper}>
            {Object.entries(counters).map(item => (
                <div className={styles.count} key={"_key_" + item[0]}>
                    <div className={styles.heading}>{item[0]}</div>
                    <div className={styles.number}>{item[1]}</div>
                </div>
            ))}
        </div>
    );
};

export default Counters;
