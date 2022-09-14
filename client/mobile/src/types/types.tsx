export type NavigationType = {
    navigate: (scene: string) => void;
};

export type DefaultPageType = {
    navigation: NavigationType;
};

export type CircleType = {
    size: number,
    color: string,
    left: number,
    top: number
}