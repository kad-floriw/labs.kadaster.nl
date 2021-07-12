import React from "react";
export interface State {
    clickedLayer: {
        x: number;
        y: number;
        values: Array<SingleObject>;
    };
    coordinateQuery: CoordinateQuery;
    textSearchQuery: TextQuery;
    isFetching: boolean;
    mapClustered: boolean;
    searchResults: Array<SingleObject>;
    selectedObject: SingleObject;
    zoomLevel: number;
}
export declare const initialState: State;
export declare type Action = {
    type: "clickLayer";
    value: {
        x: number;
        y: number;
        values: Array<SingleObject>;
    };
} | {
    type: "closeClickedLayer";
} | {
    type: "coordinate_search_error";
} | {
    type: "coordinate_search_start";
    value: CoordinateQuery;
} | {
    type: "coordinate_search_success";
    results: State["searchResults"];
} | {
    type: "reset";
} | {
    type: "resetSelectedObject";
} | {
    type: "search_error";
} | {
    type: "search_start";
    value: TextQuery;
} | {
    type: "search_success";
    results: State["searchResults"];
} | {
    type: "selectObject";
    value: SingleObject;
} | {
    type: "setMapClustered";
    value: boolean;
} | {
    type: "zoomChange";
    value: number;
};
export interface SingleObject {
    polygon: any;
    registratie: string;
    polygonLabel: string;
}
export interface CoordinateQuery {
    lat: string;
    lng: string;
}
export interface TextQuery {
    api: string;
}
export declare const reducer: React.Reducer<State, Action>;
