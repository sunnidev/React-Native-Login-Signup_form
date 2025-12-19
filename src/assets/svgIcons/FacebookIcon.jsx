import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FacebookIcon({ width = 24, height = 24, ...props }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
            {...props}
        >
            <Path
                fill="#1877F2"
                d="M307 513H1.075c-.025-.142-.072-.284-.072-.425C1 342.116 1 171.658 1 1.1h511.838V513H307"
            />
            <Path
                fill="#fff"
                d="M219.763 500.843a24.431 24.431 0 01-.866-6.469c-.024-52.832-.019-105.665-.019-158.497v-6.588H157.12v-70.833h61.758c0-2.297-.004-4.074 0-5.85..."
            />
        </Svg>
    );
}

export default FacebookIcon;
