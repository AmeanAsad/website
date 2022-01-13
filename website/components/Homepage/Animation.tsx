import { PtsCanvas } from "react-pts-canvas";
import { Line, Group, Polygon, Create, Pt, Const, Num, Geom } from "pts/dist/es5";

interface Bound {
    topLeft: Array<number>;
    bottomRight: Array<number>;
}
class AnimationComponent extends PtsCanvas {
    // Use type definitions to make the constructor types defined on component
    pts: any;

    bound: Bound;

    pps:any;

    constructor(props: Record<any, any>) {
        super(props);

        this.bound = {
            topLeft: [0, 0],
            bottomRight: [0, 0],
        };
    }

    initialize() {
        this.pts = new Group();
        this.pts = Create.distributeRandom(this.space.innerBound, 100);

        this.bound.topLeft = this.space.innerBound._topLeft;
        this.bound.bottomRight = this.space.innerBound._bottomRight;
        const angle = (this.space.size.x) * Const.two_pi * 0.5;
        const offset = this.space.size.$multiply(0.2).y;
        const line = new Group(
            new Pt(0, offset),
            new Pt(this.space.size.x, this.space.size.y - offset)
        );
        const pts = Line.subpoints(line, 200);

        pts.rotate2D(0.0008, this.space.center);
        this.pps = pts.map(
            (p: any) => Geom.perpendicular(p.$subtract(line[0]).unit()).add(p)
        );
        this.pps.forEach((p: any, i: number) => {
            const t = (i / 100) * Const.two_pi + angle + Num.cycle(100);

            if (i % 2 === 0) {
                p[0].to(Geom.interpolate(pts[i], p[0], Math.sin(t) * offset * 3));
                p[1].to(pts[i]);
            } else {
                p[0].to(pts[i]);
                p[1].to(Geom.interpolate(pts[i], p[1], Math.cos(t) * offset * 2));
            }
        });
    }

    start() {
        this.initialize();
    }

    resize() {
        this.initialize();
    }

    animate() {
        // Create a line using the mouse pointer and the center of the screen.
        const centerLine = new Group(
            this.space.center.$subtract(0.1),
            this.space.pointer
        );

        const intersect = centerLine.op(Line.intersectRay2D);
        const perpend = centerLine.op(Line.perpendicularFromPt);
        // Side of is used to find where the corners are relative to the mouse and pointer
        const sideOf = centerLine.op(Line.sideOfPt2D);

        const bottomRight = this.bound.bottomRight;
        // Define the 4 corner points of the screen.
        const corner1 = new Pt(this.bound.bottomRight);
        const corner2 = new Pt(this.bound.topLeft);
        const corner3 = new Pt([bottomRight[0], 0]);
        const corner4 = new Pt([0, bottomRight[1]]);
        const set = [corner1, corner2, corner3, corner4];
        // const cornerGroup = Polygon.convexHull(set);

        // Find direction (right or left) the corners are relative to the centerLine
        const cornerDirections = set.map((pt) => {
            return sideOf(pt);
        });
        // Filter the directions to find the two corner points on the right side
        // of the centerLine always
        const filteredSet = set.filter(
            (point, idx) => cornerDirections[idx] > 0
        );

        // Define lines on the right and left hand sides of the screen
        const leftSideLine = new Group(corner1, corner3);
        const rightSideLine = new Group(corner2, corner4);

        // Find the intersections of the sidelines with the centerLine
        const intersect1 = intersect(leftSideLine);
        const intersect2 = intersect(rightSideLine);

        // Use the intersections along with the filtered directions to create
        // a polygon which creates a shape that encloses one half of the screen
        const polygonCoords = new Group(
            filteredSet[1],
            filteredSet[0],
            intersect1,
            intersect2
        );

        // Create a convex hull using the polygon coordinates
        // Should be really fast since there are only 4 points

        try {
            const poly = Polygon.convexHull(polygonCoords);

            this.form.fillOnly("#050410").polygon(poly);
        } catch (err) {
            // Ignore exception
            // Exception is ignored because the mouse is out of bounds
            // which means we do not update the polygon as the coordinates
            // will be undefined, triggering an error
        }

        this.pps.rotate2D(0.0008, this.space.center);

        this.pps.forEach((p: any, i: number) => {
            const lp = perpend(p[1]);
            const lp2 = perpend(p[0]);

            let ratio = Math.min(
                1,
                1 - lp.$subtract(p[1]).magnitude() / (this.space.size.x / 2)
            );
            this.form
                .stroke(`rgba(255, 77, 91,${ratio}`, ratio * 2)
                .line([p[1], lp2]);
            this.form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p[1], 1);

            ratio = Math.min(
                1,
                1 - lp.$subtract(p[0]).magnitude() / (this.space.size.x / 2)
            );
            this.form
                .stroke(`rgba(255, 255, 255,${ratio}`, ratio * 2)
                .line([p[0], lp]);
            this.form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p[0], 1);
        });
    }
}

export default AnimationComponent;
