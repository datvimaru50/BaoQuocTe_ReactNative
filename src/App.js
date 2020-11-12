/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TabView, SceneMap } from 'react-native-tab-view';

import ScrollableTabView, { ScrollableTabBar }  from "react-native-scrollable-tab-view";


const ICON_SIZE = {width: 24, height: 24};
const GUTTER = 10;

const {width} = Dimensions.get("window");
const height = width * 0.5625;

const slides = [
  {
    img: "https://baoquocte.vn/stores/news_dataimages/huynguyen/112020/06/16/croped/tong-thu-ky-lien-hop-quoc-bo-truong-ngoai-giao-sri-lanka-gui-dien-tham-hoi-ve-tinh-hinh-mua-lu-o-mien-trung-viet-nam.jpg",
    text: "Tổng Thư ký Liên hợp quốc, Bộ trưởng Ngoại giao Sri Lanka gửi điện thăm hỏi về tình hình mưa lũ ở miền Trung",
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/tuananh/112020/07/21/thu-tuong-nguyen-xuan-phuc-gap-mat-cac-truong-co-quan-dai-dien-viet-nam-o-nuoc-ngoai-nhiem-ky-2020-2023_9.jpg?rt=20201107215718",
    text: "Thủ tướng Nguyễn Xuân Phúc gặp mặt các Trưởng cơ quan đại diện Việt Nam ở nước ngoài nhiệm kỳ 2020-2023"
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/tuananh/112020/05/15/viet-nam-australia-ky-chuong-trinh-hanh-dong-trien-khai-quan-he-doi-tac-chien-luoc-giai-doan-2020-2023.jpg?rt=20201105155820",
    text: "Việt Nam-Australia ký Chương trình hành động triển khai quan hệ Đối tác Chiến lược giai đoạn 2020-2023"
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/tuananh/112020/06/14/le-thuong-co-ky-niem-67-nam-quoc-khanh-vuong-quoc-campuchia-tai-ha-noi_11.jpg?rt=20201106140202",
    text: "Lễ thượng cờ kỷ niệm 67 năm Quốc khánh Vương quốc Campuchia tại Hà Nội"
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/huynguyen/112020/06/16/croped/thu-tuong-nguyen-xuan-phuc-dien-dam-voi-thu-tuong-thai-lan.jpg",
    text: "Thủ tướng Nguyễn Xuân Phúc điện đàm với Thủ tướng Thái Lan"
  },
]

const slides3 = [
  {
    img: "https://baoquocte.vn/stores/news_dataimages/huynguyen/112020/06/16/croped/tong-thu-ky-lien-hop-quoc-bo-truong-ngoai-giao-sri-lanka-gui-dien-tham-hoi-ve-tinh-hinh-mua-lu-o-mien-trung-viet-nam.jpg",
    text: "Tổng Thư ký Liên hợp quốc, Bộ trưởng Ngoại giao Sri Lanka gửi điện thăm hỏi về tình hình mưa lũ ở miền Trung",
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/tuananh/112020/07/21/thu-tuong-nguyen-xuan-phuc-gap-mat-cac-truong-co-quan-dai-dien-viet-nam-o-nuoc-ngoai-nhiem-ky-2020-2023_9.jpg?rt=20201107215718",
    text: "Thủ tướng Nguyễn Xuân Phúc gặp mặt các Trưởng cơ quan đại diện Việt Nam ở nước ngoài nhiệm kỳ 2020-2023"
  },
  {
    img: "https://baoquocte.vn/stores/news_dataimages/tuananh/112020/05/15/viet-nam-australia-ky-chuong-trinh-hanh-dong-trien-khai-quan-he-doi-tac-chien-luoc-giai-doan-2020-2023.jpg?rt=20201105155820",
    text: "Việt Nam-Australia ký Chương trình hành động triển khai quan hệ Đối tác Chiến lược giai đoạn 2020-2023"
  },
]

const App: () => React$Node = () => {

  let [activeSlide, setActiveSlide] = useState(0);

  function handleScroll({nativeEvent}){
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    // setActiveSlide(activeSlide ++);
    // console.log(slide);
    if(slide !== activeSlide){
      setActiveSlide(slide);
    }
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" networkActivityIndicatorVisible={true} showHideTransition={"slide"} />
      <SafeAreaView>
        <ScrollView
          nestedScrollEnabled
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}

          <View style={styles.body}>
            {/* ***************************
                      TOP BANNER
            ******************************/}
            <View>
              <Image 
                source={require("./assets/2618_Mobile_banner_ABA.png")} 
                style={{width: "100%", height: "auto", aspectRatio: 728/90}}
              />
            </View>

            {/* ***************************
                       LOGO BAR 
            ******************************/}
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,paddingHorizontal: GUTTER, paddingVertical: 5,}}>
              <Image 
                source={require("./assets/icons/menu.png")} 
              />
              <Text style={{marginLeft: -20}}>English</Text>
              <Image 
                source={require("./assets/logo-mb.png")} 
                {...ICON_SIZE}
              />
              <Image 
                source={require("./assets/icons/call-phone.png")} 
                {...ICON_SIZE}
                style={{marginRight: -20}}
              />
              <Image 
                source={require("./assets/icons/moon.png")} 
                {...ICON_SIZE}
              />
            </View>

            {/* ***************************
                       TOPIC BAR 
            ******************************/}
            <View style={styles.topicBar}>
             
              <Text style={{color: "#fff", fontWeight: "bold", textTransform: "uppercase"}}>Chủ đề:  </Text>

              <ScrollView horizontal>
                <Text style={styles.topicItem}>Hướng tới Đại hội XVIII của Đảng</Text>
                <Text style={styles.topicItem}>Bầu cử Mỹ 2020</Text>
              </ScrollView>
            </View>

            {/* ***************************
                       TIN COVER
            ******************************/}
            <View style={{width, height}}>
              <ScrollView
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                style={{width, height}}
              >
                {
                  slides.map((item, idx)=>(
                    <View style={styles.slideItem} key={idx}>
                      <Image 
                        source={{uri: item.img}}
                        style={styles.slideImage}
                      />
                      <Text style={styles.slideText}>{item.text}</Text>
                    </View>
                  ))
                }
              </ScrollView>
              <View style={styles.slidePaging}>
                <Text style={{color: "#ccc"}}>{activeSlide+1}/{slides.length}</Text>
              </View>
            </View>
            
            {/* ***************************
                       TIN NÓNG 1
            ******************************/}
            <View style={{paddingHorizontal: 10}}>
              {
                
                slides.map((item, idx) => {
                  const isLast = idx === slides.length-1;
                  return (
                    <View style={{flexDirection: "row", marginTop: 10, paddingBottom: isLast ? 0 : 10, borderBottomWidth: isLast ? 0 : 1, borderBottomColor: isLast ? "transparent" : "#ddd"}} key={idx}>
                      <Image 
                        style={{width: "40%", aspectRatio: 16/9, marginRight: 10}}
                        source={{uri: item.img}}
                      />
                      <Text style={{flexShrink: 1, fontSize: 16, color: "#333"}}>{item.text}</Text>
                    </View>
                  )
                }
                )
              }
            </View>

             
            {/* ***************************
                      QUỐC TẾ TV
            ******************************/}
            <VideoLayout imageTitleIcon />

            {/* ***************************
                       TIN NÓNG 2
            ******************************/}
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
              {
                
                slides.map((item, idx) => {
                  const isLast = idx === slides.length-1;
                  return (
                    <View style={{flexDirection: "row", marginTop: 10, paddingBottom: isLast ? 0 : 10, borderBottomWidth: isLast ? 0 : 1, borderBottomColor: isLast ? "transparent" : "#ddd"}} key={idx}>
                      <Image 
                        style={{width: "40%", aspectRatio: 16/9, marginRight: 10}}
                        source={{uri: item.img}}
                      />
                      <Text style={styles.newsTitle}>{item.text}</Text>
                    </View>
                  )
                }
                )
              }
            </View>

            {/* ***************************
                       TIN MỚI
            ******************************/}
            <View style={styles.sectionContainer}>

              <Banner300x250 />

              <View style={{...styles.sectionContainer, backgroundColor: "#fff"}}>
                  <View style={styles.tinMoititleContainer}>
                    <Text style={styles.tinMoiTitle}>
                      Tin mới
                    </Text>
                  </View>

                  <ScrollView style={{width: "100%", height: 300}} nestedScrollEnabled>
                    {
                      slides.map((item, idx)=>(
                        <View key={idx} style={styles.tinMoiItemContainer}>
                          <Text style={{color: "#999", marginRight: 5}}>16:00</Text>
                          <Text style={{...styles.newsTitle, fontWeight: "normal"}}>{item.text}</Text>
                        </View>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>
            
            <CategoryLayout1 mainTitle="Phân tích chuyện thời sự" />

            <CategoryTabScroll mainTitle="Ngoại giao" />

            <CategoryTabScroll mainTitle="Thế giới" />

            <CategoryLayout1 mainTitle="Hồ sơ" />

            <VideoLayout mainTitle="Video" />

            <View style={{...styles.sectionContainer, flexDirection: "row", justifyContent: "space-between"}}>
              <CategoryLayout2 mainTitle="Thời sự" width="48%" />
              <CategoryLayout2 mainTitle="Xã hội" width="48%" />
            </View>




          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

function VideoLayout(props){
  /* 
    FAKE api: api.baoquocte.vn/categoryID=`${props.categoryID}`
  */
  return <View style={{padding: 10, backgroundColor: "#f1f1f1", marginTop: 15}}>
            {
              props.imageTitleIcon && 
              <Image 
                style={{width: 97, height: "auto", aspectRatio: 300/74, marginBottom: 10}}
                source={require("./assets/icons/logo-tv.png")}
              />
            }

            {
              props.mainTitle &&
              <Text style={styles.mainCateTitle}>{props.mainTitle}</Text>
            }

            <View style={{width: "100%", aspectRatio: 16/9, position: "relative", marginBottom: 10}}>
              <Image 
                style={{width: "100%", height: "100%"}}
                source={{uri: "https://baoquocte.vn/stores/video_data/dangtuan/102020/30/21/medium/3602_unnamed_edit.png"}}
              />
              <Image 
                style={{width: 69, height: "auto", aspectRatio: 1, position: "absolute", top: "50%", left: "50%", marginTop: -34.5, marginLeft: -34.5}}
                source={require("./assets/icons/ico-play-x.png")}
              />
            </View>
            <Text style={{fontSize: 18}}>TRỰC TUYẾN: Con đường Ngoại giao - MOFA Open Day 2020</Text>
          </View>
}

function Banner300x250(){
  return <View style={styles.banner300x200Containner}>
          <Image 
            style={{width: 300, height: 250}}
            source={{uri: "https://baoquocte.vn/stores/ads_data/tuananh/042017/03/16/160514_PBM_300-250_Final.jpg"}}
          />
        </View>
}

function CategoryLayout1(props) {
  return <View style={{...styles.sectionContainer, backgroundColor: "#fff", ...props.styles}}>
          <Text style={styles.mainCateTitle}>{props.mainTitle}</Text>
          {
            slides3.map((item, idx)=>{
              const isFirst = idx === 0;
              return(

                <View 
                  key={idx} 
                  style={{
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    marginTop: isFirst ? 0 : 10, 
                    paddingTop: isFirst ? 0 : 10, 
                    borderTopColor: isFirst ? "transparent" : "#ddd", 
                    borderTopWidth: isFirst ? 0 : 1,
                    position: "relative",
                    paddingLeft: isFirst ? 0 : 15,
                  }}>
                  <Image 
                    style={{width: "40%", aspectRatio: 16/9, display: isFirst ? "flex" : "none"}}
                    source={{uri: item.img}}
                  />
                  <View style={{width: isFirst ? "57%" : "100%"}}>
                    <Text style={{...styles.newsTitle, fontWeight: isFirst ? "bold" : "normal"}}>{item.text}</Text>
                  </View>

                  {
                    !isFirst &&
                    <BlueBullet />
                  }
                </View>
              )
            })
          }
        </View>
}

function CategoryLayout2(props) {
  return (
    <View style={{width: props.width,}}>
      <Text style={styles.mainCateTitle}>{props.mainTitle}</Text>

      {
        slides3.map((item, idx)=>{
          const isFirst = idx === 0;
          const styleNormal = {...styles.newsTitle, padding: 10, borderTopWidth: 1, borderTopColor: "#ddd", backgroundColor: "#fff"};
          const styleFirst = {...styles.newsTitle, padding: 10, fontWeight: "bold", backgroundColor: "#fff"};
          return(

            <View 
              key={idx} 
            >

              <Image 
                style={{...styles.imgWide, display: isFirst ? "flex" : "none",}}
                source={{uri: item.img}}
              />
              
              <Text style={isFirst ? styleFirst : styleNormal}>
                {item.text}
              </Text>
            </View>
          )
        })
      }
    </View>
  );
}

function CategoryTabScroll(props) {
  let [active, setActive] = useState(0);

  function handleChangeTab(tab){
    setActive(tab.i);
  }
  return (
    <View style={{...styles.sectionContainer, paddingTop: 0}}>
      <ScrollableTabView
        style={{ marginBottom: 10 }}
        initialPage={0}
        onChangeTab={handleChangeTab}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel={props.mainTitle.toUpperCase()} />
        <Text tabLabel='Tin bộ ngoại giao' />
        <Text tabLabel='Bảo hộ công dân' />
        <Text tabLabel='Thường thức ngoại giao' />
      </ScrollableTabView>

      <View style={{backgroundColor: "#fff"}}>
        {
          slides3.map((item, idx)=>{
            const isFirst = idx === 0;
            const style169 = {position: "relative", width: "100%", aspectRatio: 16/9};
            const styleDefault = {position: "relative", width: "100%"};

            const styleNormal = {...styles.newsTitle, paddingVertical: 10, borderTopWidth: 1, borderTopColor: "#ddd"};
            return(

              <View 
                key={idx} 
                style={{
                  position: "relative",
                  paddingLeft: isFirst ? 0 : 20,
                }}>

                <View style={isFirst ? style169 : styleDefault}>
                  <Image 
                    style={{...styles.imgWide, display: isFirst ? "flex" : "none",}}
                    source={{uri: item.img}}
                  />
                  
                  <Text 
                    style={isFirst ? styles.slideText : styleNormal}
                  >
                    {item.text}
                  </Text>
                </View>

                {
                  !isFirst && 
                  <Image 
                    width={7}
                    aspectRatio={1}
                    style={styles.blueBullet}
                    source={require("./assets/icons/bl-square-blue.png")}
                  />
                  
                }
              </View>
            )
          })
        }

        <View style={styles.moreTextContainer}>
          <Text style={styles.moreText}>{"Xem thêm >>"}</Text>
        </View>

      </View>
    </View>
  );
}

function BlueBullet(){
  return <Image 
            width={7}
            height={7}
            style={{position: "absolute", top: 20, left: 0}}
            source={require("./assets/icons/bl-square-blue.png")}
          />
}

/* =====================
        STYLESHEET
  ======================
*/
const styles = StyleSheet.create({
  imgWide: {
    width: "100%",
    aspectRatio: 16/9
  },
  newsTitle: {
    flexShrink: 1, 
    fontSize: 16, 
    color: "#333"
  },
  newsDesc: {
    flexShrink: 1, 
    fontSize: 14,
  },
  blueBullet: {
    position: "absolute", 
    top: 20, 
    left: 7,
  },
  moreTextContainer: {
    paddingHorizontal: 20, 
    paddingBottom: 10, 
    alignItems: "flex-end"
  },
  moreText: {
    color: "#0066b3", 
    fontSize: 12, 
    fontWeight: "bold", 
    textTransform: "uppercase"
  },
  mainCateTitle:{
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Times New Roman",
    fontSize: 16,
    marginBottom: 10,
  },
  topicBar: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: GUTTER, 
    paddingVertical: 7, 
    backgroundColor: "#00539c",
  },
  topicItem:{
    color: "#fff", 
    fontSize: 16, 
    marginRight: 15
  },
  slideItem: {
    position: "relative",
  },
  slideImage: {
    width, 
    height, 
    resizeMode: "cover"
  },
  slidePaging: {
    position: "absolute",
    right: 0,
    bottom: 0
  },
  slideText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#00000066",
  },
  banner300x200Containner: {
    width: "100%", 
    height: 250, 
    alignItems: "center"
  },
  tinMoititleContainer: {
    backgroundColor: '#f6891a', 
    padding: 5, 
    marginBottom: 10, 
    alignSelf: 'flex-start' 
  },
  tinMoiTitle: {
    color: '#ffffff', 
    textTransform: "uppercase", 
    fontWeight: "bold"
  },
  tinMoiItemContainer: {
    flexDirection: "row", 
    paddingBottom: 10, 
    marginBottom: 10, 
    borderBottomColor: "#ddd", 
    borderBottomWidth: 1, 
    borderStyle: "dotted"
  },

  // ****************
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#e2e3e5",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
