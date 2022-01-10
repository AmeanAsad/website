import React, { Component } from "react";

import { PtsCanvas } from "react-pts-canvas";
import { Line, Group, Polygon, Create, Pt } from "pts/dist/es5";
import { Box } from "@chakra-ui/react";


interface State {
    pts: any;
    bound: any
}
class ExampleComponent<State> extends PtsCanvas  {
    constructor(props: any) {
        super(props);
        this.pts = new Group();
        this.bound = {
            topLeft: null,
            bottomRight: null,
        };
        this.pop = new Group();
    }

    start() {
        this.pts = new Group();
        this.pts = Create.distributeRandom(this.space.innerBound, 200);

        this.bound.topLeft = this.space.innerBound._topLeft;
        this.bound.bottomRight = this.space.innerBound._bottomRight;
    }

    animate(time, ftime) {
        let centerGroup = new Group(
            this.space.center.$subtract(0.1),
            this.space.pointer
        );

        let intersect = centerGroup.op(Line.intersectRay2D);
        let sideOf = centerGroup.op(Line.sideOfPt2D);
        let perpend = centerGroup.op(Line.perpendicularFromPt);

        const bound = this.bound.bottomRight;
        const bound2 = this.bound.topLeft;
        const bound3 = [bound[0], 0];
        const bound4 = [0, bound[1]];

        const pt = new Pt(bound);
        const pt2 = new Pt(bound2);
        const pt3 = new Pt(bound3);
        const pt4 = new Pt(bound4);
        let set = [pt, pt2, pt3, pt4];
        let sides = set.map((pt) => {
            return sideOf(pt);
        });
        let filter = set.filter((point, idx) => sides[idx] > 0);

        let pp = new Group(pt, pt3);
        let pp2 = new Group(pt2, pt4);

        // console.log(fromTop);
        let intersect1 = intersect(pp);
        let intersect2 = intersect(pp2);

        let po = new Group(filter[1], filter[0], intersect1, intersect2);

        let poly = Polygon.convexHull(po);
        this.form.fillOnly("rgba(255, 255, 255, 0.7)").polygon(poly);

        this.pts.rotate2D(0.0005, this.space.center);

        this.pts.forEach((p, i) => {
            // for each point, find the perpendicular to the line
            let lp = perpend(p);
            var ratio = Math.min(
                1,
                1 - lp.$subtract(p).magnitude() / (this.space.size.x / 2)
            );
            this.form
                .stroke(`rgba(255,255,255,${ratio}`, ratio * 2)
                .line([p, lp]);
            this.form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1);
        });
    }
}

var radius = 50;

export default class App extends Component {
    render() {
        return (
            <Box className="test" height="100%" width="100%">
                <ExampleComponent
                    background="black"
                    name="pts-tester"
                    height="100%"
                    width="100%"
                    style={{ opacity: 0.95, height: "100vh", width: "100vw" }}
                />
            </Box>
        );
    }
}
