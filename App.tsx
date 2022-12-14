import React, { useState } from 'react'
import { View, Text, SafeAreaView } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './src/CarouselCardItem'
import data from './data'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = useState(0)

  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        autoplay={true}
        // lockScrollWhileSnapping={true}
        // loop
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </SafeAreaView>
  )
}


export default CarouselCards