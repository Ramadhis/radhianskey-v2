import { v4 } from "uuid";

const startingLayout = {
    uid: null,
    name: "",
    description: "",
    preview_image: "default.png",
    layout_data: {
        keyDownData: {
            keyDownBorder: " 1px solid blue ",
            keyDownBackground: "lightskyblue",
        },
        caseData: {
            caseTheme: {
                label: "Pink Theme",
                value: "pink",
                style: {
                    outer_border: "#706662",
                    inner_border: "#fff",
                    outer_background: "#e8c4b8",
                    inner_background: "#282828",
                },
            },
        },
        layoutData: [
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        legend: "Num", //keyLegend
                        keycapsSize: "1",
                        onKeyPress: {
                            label: "A",
                            value: "KeyA",
                        },
                        KeyConnectTop: false,
                        KeyConnectLeft: false,
                        keycapsTheme: {
                            label: "White",
                            value: "white",
                            style: [
                                {
                                    //layer1 = index 0
                                    fontFamily: "times new roman",
                                    fontSize: "15px",
                                    textPlacement: "start-left",
                                    fontColor: "#000",
                                    fontWeight: "normal",
                                },
                                {
                                    //layer2 = index 1
                                    background: "#E7E5E4",
                                    top_border: "#E7E5E4",
                                    bottom_border: "#81716C",
                                    left_border: "#E7E5E4",
                                    right_border: "#81716C",
                                },
                                {
                                    //layer3 = index 2
                                    background: "#A8A29E",
                                    top_border: "#E7E5E4",
                                    bottom_border: "#78716C",
                                    left_border: "#E7E5E4",
                                    right_border: "#78716C",
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: v4(),
                column: [],
            },
        ],
    },
};

export default startingLayout;
