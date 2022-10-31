import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;

export default function App() {
    const [data] = useState([...new Array(4).keys()]);
    const [isVertical] = useState(false);
    const [isFast] = useState(false);
    const [isAutoPlay] = useState(false);
    const [isPagingEnabled] = useState(true);
    const ref = React.useRef<ICarouselInstance>(null);

    const baseOptions = isVertical
        ? ({
            vertical: true,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH / 2,
        } as const)
        : ({
            vertical: false,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH / 2,
        } as const);

    return (
        // <View style={styles.container}>
        //     <Text>Open up App.tsx to start working on your app!</Text>
        //     <StatusBar style="auto" />
        // </View>

        <View style={{ flex: 1 }}>
            <Carousel
                {...baseOptions}
                loop
                ref={ref}
                style={{ width: "100%" }}
                autoPlay={isAutoPlay}
                autoPlayInterval={isFast ? 100 : 2000}
                data={data}
                pagingEnabled={isPagingEnabled}
                onSnapToItem={index => console.log("current index:", index)}
                renderItem={({ index }) => <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {index}
                    </Text>
                </View>}
            />
        </View>

        // <View style={{ flex: 1 }}>
        //     <Carousel
        //         loop
        //         width={PAGE_WIDTH}
        //         height={PAGE_WIDTH / 2}
        //         autoPlay={true}
        //         data={[...new Array(6).keys()]}
        //         scrollAnimationDuration={1000}
        //         onSnapToItem={(index) => console.log('current index:', index)}
        //         renderItem={({ index }) => (
        //             <View
        //                 style={{
        //                     flex: 1,
        //                     borderWidth: 1,
        //                     justifyContent: 'center',
        //                 }}
        //             >
        //                 <Text style={{ textAlign: 'center', fontSize: 30 }}>
        //                     {index}
        //                 </Text>
        //             </View>
        //         )}
        //     />
        // </View>
    );
}
