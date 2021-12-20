import React, { useState, useEffect, useRef } from "react";
import styles from "./Homepage.module.scss";
import PropTypes from "prop-types";

const HomePage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <p> test</p>
            </div>
            <div className={styles.pageContent}>
                <p> test</p>
            </div>
            <div className={styles.animationContent}>
                <p> test</p>
            </div>
        </div>
    );
};

export default HomePage;
