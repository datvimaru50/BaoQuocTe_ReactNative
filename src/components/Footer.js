
import React from 'react';
import { WebView } from 'react-native-webview';
import {
  View,
} from 'react-native';

function Footer(){
    return(
        <>
            <FooterInfo />
            <FooterCopy />
        </>
    );
}

function FooterInfo() {
    return (
      <View style={{padding: 10, backgroundColor: "#035fa1", height: 250}}>
        <WebView
          originWhitelist={['*']}
          style={{backgroundColor:"#035fa1"}}
          source={{ 
            html: `
            <style>p{font-size: 40px;color: #fff;margin-bottom: -25px;line-height:1.3}</style>
  
            <p><b>Tổng Biên tập:</b> Nguyễn Văn Trung</p>
  
            <p><b>Phó Tổng Biên tập:</b> Lê Hồng Trường, Đỗ Xuân Thông, Vũ Quang Tùng</p>
  
            <p><b>Giấy phép số:</b> 196/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 15/4/2016.</p>
  
            <p><b>Tòa soạn:</b> Số 6 Chu Văn An, Ba Đình, Hà Nội.</p>
            <p><b>Điện thoại:</b> 84-24-3799.3506</p>
  
            <p><b>Hotline:</b> 0879553979</p>
  
            <p><b>Fax:</b> 84-24-38234169</p> 
  
            <p><b>Email:</b> baoquocte2016@gmail.com</p>
            `
          }}
        />
      </View>
    );
  }
  
  function FooterCopy() {
    return (
      <View style={{padding: 10, backgroundColor: "#e2e3e5", height: 130}}>
        <WebView
          originWhitelist={['*']}
          style={{backgroundColor:"#e2e3e5"}}
          source={{ 
            html: `
            <style>p{font-size: 40px;color: #333;margin-bottom: -25px;line-height:1.3}</style>
  
            <p>© Copyright 2019 "Thế giới & Việt Nam", All rights reserved.</p>
  
            <p>® Ghi rõ nguồn "Thế giới & Việt Nam" khi bạn phát hành lại thông tin từ website này.</p>
  
            <p>Based on MasterCMS Ultimate Edition v2.9 2020</p>
  
            `
          }}
        />
      </View>
    );
  }

export default Footer;

 