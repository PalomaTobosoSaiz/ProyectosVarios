export interface VillanosPelis {
    id?:               string;
    villanos:         string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string; //https://google.com/img.png
}

export enum Publisher {
    Disney = "Disney",
    Pixar = "Pixar",
}
