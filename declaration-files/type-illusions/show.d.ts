export interface ITrick {
    gimmick: string;
}

export interface IIllusion {
    introduction: () => string;
    flair: () => string;
    payoff: () => string;
}

export interface IVolunteerIllustion extends IIllusion {
    duration: number;
    title: string;
}

export interface IAudienceMember {
    name: string;
    willing: boolean;
}

type Section = IVolunteerIllustion | ITrick;

export interface IAct {
    name: string;
    performer: string;
    sections: Section[];
}

export declare const isTrick: (section: Section) => section is ITrick;

export declare const isVolunteerIllusion: (
    illustion: IIllusion
) => section is IVolunteerIllustion;

export declare const getAudienceMemberFor: ({
    duration: number,
    title: string,
}) => Promise<IAudienceMember>;
