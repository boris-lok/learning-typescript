// Add back imports and type annotations here! ✨

import {
    ITrick,
    getAudienceMemberFor,
    isTrick,
    isVolunteerIllusion,
    IIllusion,
    IVolunteerIllustion,
    IAudienceMember,
    IAct,
} from './show';

function showTrick(trick: ITrick) {
    console.log(`💨 Voila! ${trick.gimmick}`);
}

function showIllusion(illusion: IIllusion) {
    console.log('This is not a trick...');
    console.log(`\t${illusion.introduction()}`);

    console.log("It's my...");
    console.log(`\t${illusion.flair()}`);

    console.log('...illusion! 💥');
    console.log(`\t${illusion.payoff()}`);
}

async function showVolunteerIllusion(
    audienceMember: IAudienceMember,
    illusion: IVolunteerIllustion
) {
    console.log(
        `Let's give a big round of applause for ${audienceMember.name}! 👏`
    );

    console.log('...drumroll please... 🥁');

    await new Promise((resolve) => setTimeout(resolve, illusion.duration / 2));
    console.log('🥁 ...more drumroll please... 🥁');
    await new Promise((resolve) => setTimeout(resolve, illusion.duration / 2));

    showIllusion(illusion);
}

export async function runShow(act: IAct) {
    console.log(`Hello! I am the amazing ${act.performer}, and this...`);
    console.log(`...is ${act.name}! ✨`);

    for (const section of act.sections) {
        if (isTrick(section)) {
            showTrick(section);
            continue;
        }

        if (!isVolunteerIllusion(section)) {
            showIllusion(section);
            continue;
        }

        const audienceMember = await getAudienceMemberFor({
            duration: Math.ceil(section.duration / 60) * 60,
            title: `🔥 ${section.title} 🔥`,
        });

        await showVolunteerIllusion(audienceMember, section);
    }
}
