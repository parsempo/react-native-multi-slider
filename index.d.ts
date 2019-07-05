declare module 'react-native-multi-slider' {
    import React, { ReactNode } from 'react'
    import { StyleProp, ViewStyle } from 'react-native'

    export type SliderValue = string | number

    export type TouchDimensions = {
        height: number;
        width: number;
        borderRadius: number;
        slipDisplacement: number;
    }
    
    export type SliderProps = {
        values?: SliderValue[];
        onValuesChangeStart?: () => void;
        onValuesChange?: (values: SliderValue[]) => void;
        onValuesChangeFinish?: (values: SliderValue[]) => void;
        onMarkersPosition?: (values: SliderValue[]) => void;
        step?: number;
        min?: number;
        max?: number;
        touchDimensions?: TouchDimensions;
        customMarker?: ReactNode;
        customMarkerLeft?: ReactNode;
        customMarkerRight?: ReactNode;
        markerOffsetX?: number;
        markerOffsetY?: number;
        sliderLength?: number;
        onToggleOne?: () => void;
        onToggleTwo?: () => void;
        enabledTwo?: boolean;
        enabledOne?: boolean;
        allowOverlap?: boolean;
        snapped?: boolean;
        containerStyle?: StyleProp<ViewStyle>;
        trackStyle?: StyleProp<ViewStyle>;
        selctedStyle?: StyleProp<ViewStyle>;
        unselectedStyle?: StyleProp<ViewStyle>;
        markerContainerStyle?: StyleProp<ViewStyle>;
        markerStyle?: StyleProp<ViewStyle>;
        pressedMarkerStyle?: StyleProp<ViewStyle>;
        valuePrefix?: string;
        valueSuffix?: string;
    }

    export default class MultiSlider extends React.Component<SliderProps>{}
}