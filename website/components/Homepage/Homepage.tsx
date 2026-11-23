import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import menu from "../menu";
import praise from "../../data/praise.json";

const AnimationComponent = dynamic(() => import("./Animation"), { ssr: false });

const QUOTE_DURATION = 4000;
const FADE_DURATION = 600;

// Cycles through the praise quotes, fading between them.
const PraiseCycle = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let fade: ReturnType<typeof setTimeout>;
        const cycle = setInterval(() => {
            setVisible(false);
            fade = setTimeout(() => {
                setIndex((current) => (current + 1) % praise.length);
                setVisible(true);
            }, FADE_DURATION);
        }, QUOTE_DURATION);
        return () => {
            clearInterval(cycle);
            clearTimeout(fade);
        };
    }, []);

    const quote = praise[index];
    return (
        <blockquote
            className="home-praise"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <p>&ldquo;{quote.content}&rdquo;</p>
            <cite>&mdash; {quote.name}</cite>
        </blockquote>
    );
};

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-canvas">
                <AnimationComponent
                    background="#faf6ea"
                    name="homepageAnimation"
                    style={{
                        minHeight: "600px",
                        height: "100vh",
                        width: "100vw",
                    }}
                />
            </div>
            <nav className="nav home-nav">
                {menu.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <a aria-current={item.href === "/" ? "page" : undefined}>
                            {item.name}
                        </a>
                    </Link>
                ))}
            </nav>
            <div className="home-center">
                <h1 className="home-name">Amean Asad</h1>
                <PraiseCycle />
            </div>
        </div>
    );
};

export default HomePage;
