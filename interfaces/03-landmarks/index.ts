export type Landmark =
    | Fort
    | Lake
    | Lighthouse
    | Mountain
    | Park
    | River
    | Waterfall;

interface LandmarkBase {
    name: string;
    type:
        | 'fort'
        | 'lake'
        | 'lighthouse'
        | 'mountain'
        | 'park'
        | 'river'
        | 'waterfall';
}

interface Fort extends LandmarkBase {
    type: 'fort';
}

interface Lake extends LandmarkBase {
    miles: number;
    type: 'lake';
}

interface Lighthouse extends LandmarkBase {
    height: number;
    lit: number;
    type: 'lighthouse';
}

interface Mountain extends LandmarkBase {
    height: number;
    type: 'mountain';
}

interface Park extends LandmarkBase {
    acres: number;
    type: 'park';
}

interface River extends LandmarkBase {
    depth: number;
    length: number;
    type: 'river';
}

interface Waterfall extends LandmarkBase {
    height: number;
    type: 'waterfall';
}
const extraInformation = {
    waterfall: (w: Waterfall) => `\nIt is ${w.height} feet high.`,
    river: (r: River) =>
        `\nIt flows for ${r.length} miles and is ${r.depth} feet deep at its deepest.`,
    park: (p: Park) => `\nIt covers ${p.acres} square acres.`,
    mountain: (m: Mountain) => `\nIts peak is ${m.height} feet high.`,
    lighthouse: (l: Lighthouse) =>
        `\nIt was first lit in ${l.lit} and is ${l.height} feet high.`,
    lake: (l: Lake) => `\nIt covers ${l.miles} square miles of water.`,
    fort: (_: Fort) => '',
};

export function describeLandmark(landmark: Landmark) {
    let s = '';
    switch (landmark.type) {
        case 'waterfall':
            s = extraInformation[landmark.type](landmark);
            break;
        case 'river':
            s = extraInformation[landmark.type](landmark);
            break;
        case 'park':
            s = extraInformation[landmark.type](landmark);
            break;
        case 'mountain':
            s = extraInformation[landmark.type](landmark);
            break;
        case 'lighthouse':
            s = extraInformation[landmark.type](landmark);
            break;
        case 'lake':
            s = extraInformation[landmark.type](landmark);
            break;
        default:
            break;
    }

    return `${landmark.name} is a ${landmark.type} in Upstate New York.` + s;
}
