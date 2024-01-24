import { NavigationStackProp } from "react-navigation-stack";

type RootStackParamList = {
    Search: undefined;
    ResultsShow: undefined;
};

export interface navProp {
    navigation: NavigationStackProp<RootStackParamList, 'Search'>;
}