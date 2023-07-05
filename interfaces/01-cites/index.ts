export interface City {
    coordinates: Coordinates;
    name: string;
    catchphrase?: string;
}

interface Coordinates {
    north: Cooedinate;
    west: Cooedinate;
}

type Cooedinate = [number, number, number];

export function describeCity(city: City) {
    return (
        `${city.name}, New York` +
        (city.catchphrase == null ? '' : `\n* "${city.catchphrase}"`) +
        coordinatesToString(city.coordinates)
    );
}

function coordinatesToString(coordinate: Coordinates) {
    return `\n* Located at ${coordinateToString(
        coordinate.north
    )}N ${coordinateToString(coordinate.west)}W`;
}

function coordinateToString(coordinate: Cooedinate) {
    return `${coordinatePadding(coordinate[0])}°${coordinatePadding(
        coordinate[1]
    )}'${coordinatePadding(coordinate[2])}"`;
}

function coordinatePadding(n: number) {
    return n.toString().padStart(2, '0');
}
