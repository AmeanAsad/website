import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
    return (
        <Layout
            title="About"
            description="Amean Asad about page"
            current="/about"
        >
            <h1>About</h1>
            <p>
                Currently in San Francisco building{" "}
                <a href="https://confidential.ai">confidential.ai</a>. My
                interests lie in math and engineering. I have worked a lot on
                distributed systems, security, machine learning, information
                theory, and verifiable computing. In general, the type of work I
                enjoy the most is simply building tech that people use, maybe
                with a slight bias towards math though ngl.
            </p>
            <p>
                Away from my desk, I train jiu jitsu, play tennis, and make a
                lot of tea. My current favorite dessert is Almond Biscotti from
                Trader Joe&apos;s, and my go-to comfort dinner is Koshari. I
                don&apos;t take myself too seriously.
            </p>
            <p>
                Here are some of the things I have been up to in the past few
                years:
            </p>
            <ul>
                <li>
                    2025: Co-founded{" "}
                    <a href="https://confidential.ai">confidential.ai</a> in San
                    Francisco. Building the private compute infrastructure for
                    the internet.
                </li>
                <li>
                    2024: Co-founded{" "}
                    <a href="https://mycommon.place">Commonplace</a>
                </li>
                <li>
                    2022-2024: Distributed Systems Engineer @ Protocol Labs.
                    Built the world&apos;s largest decentralized CDN{" "}
                    <a href="https://github.com/filecoin-saturn">Saturn</a>.
                    Saturn had 80 million users.
                </li>
                <li>
                    2022: Graduated Uni, studied Applied Mathematics and
                    Computer Engineering
                </li>
                <li>
                    2020: Founded Yasa, worked on early models for 3D pose
                    detection on mobile (discontinued).
                </li>
                <li>
                    2020: Filed my first{" "}
                    <a href="https://patents.google.com/patent/US20220414316A1/en?inventor=amean+asad">
                        patent in machine learning
                    </a>
                    . At the time, youngest patent holder at IBM.
                </li>
                <li>
                    2015-2016: Competed on Egypt&apos;s IMO team. I ranked 7th
                    in all of Egypt.
                </li>
            </ul>
            <p>
                Contact: first name . last name {"{"}&radic;3996001{"}"} @ gmail
                . com
            </p>
            <footer>
                <a href="https://www.linkedin.com/in/ameanasad/">LinkedIn</a>
                <a href="https://github.com/AmeanAsad">GitHub</a>
                <a href="https://twitter.com/ameanasad">Twitter</a>
            </footer>
        </Layout>
    );
};

export default About;
