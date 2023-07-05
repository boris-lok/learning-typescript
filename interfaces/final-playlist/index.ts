export type PlaylistItem = Song | Album | Playlist;

interface Song {
    artist: string[] | string;
    length: number;
    name: string;
    type: 'song';
}

interface Album {
    songs: Song[];
    type: 'album';
}

interface Playlist {
    type: 'playlist';
    resolve(): Song[];
}

interface Artists {
    [i: string]: string[];
}

interface GroupedSongs {
    artists: Artists;
    songs: string[];
    time: number;
}

export function unrollPlaylist(items: PlaylistItem[]) {
    const grouped: GroupedSongs = {
        artists: {},
        songs: [],
        time: 0,
    };

    function addSong(song: Song) {
        const artists =
            typeof song.artist === 'string' ? [song.artist] : song.artist;

        for (const artist of artists) {
            grouped.artists[artist] ??= [];
            grouped.artists[artist].push(song.name);
        }

        grouped.time += song.length;
        grouped.songs.push(song.name);
    }

    for (const item of items) {
        switch (item.type) {
            case 'song':
                addSong(item);
                break;
            case 'album':
                item.songs.forEach(addSong);
                break;
            case 'playlist':
                item.resolve().forEach(addSong);
                break;
            default:
                break;
        }
    }

    return grouped;
}
