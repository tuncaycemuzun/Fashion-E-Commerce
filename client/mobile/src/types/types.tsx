export type NavigationType = {
    navigate: (scene: string) => void;
};

export type DefaultPageType = {
    navigation: NavigationType;
};