import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: [{  "Iphone": [
    {
      "series15": [
        {
          "series15Promax": [
            {
              "id": 1,
              "name": "Iphone 15 Promax",
              "price": "48.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694663436394_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Tự Nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 2,
              "name": "Iphone 15 Promax",
              "price": "45.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694663489370_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 3,
              "name": "Iphone 15 Promax",
              "price": "47.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547212605_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 4,
              "name": "Iphone 15 Promax",
              "price": "47.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547203351_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 5,
              "name": "Iphone 15 Promax",
              "price": "38.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662757304_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 6,
              "name": "Iphone 15 Promax",
              "price": "39.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546999806_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 7,
              "name": "Iphone 15 Promax",
              "price": "41.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547008189_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 8,
              "name": "Iphone 15 Promax",
              "price": "42.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662570501_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan tự nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 9,
              "name": "Iphone 15 Promax",
              "price": "34.590.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662388795_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "216GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 10,
              "name": "Iphone 15 Promax",
              "price": "35.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546927478_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "216GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 11,
              "name": "Iphone 15 Promax",
              "price": "36.390.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546936133_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "216GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 12,
              "name": "Iphone 15 Promax",
              "price": "37.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662335556_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan tự nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "216GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            }
          ],
          "series15Pro": [
            {
              "id": 13,
              "name": "Iphone 15 Pro",
              "price": "41.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662043980_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 14,
              "name": "Iphone 15 Pro",
              "price": "41.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546710126_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 15,
              "name": "Iphone 15 Pro",
              "price": "42.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662102812_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Tự Nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 16,
              "name": "Iphone 15 Pro",
              "price": "42.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546696808_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "1TB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 17,
              "name": "Iphone 15 Pro",
              "price": "35.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694661676186_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 18,
              "name": "Iphone 15 Pro",
              "price": "36.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546642630_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 19,
              "name": "Iphone 15 Pro",
              "price": "42.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546696808_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 20,
              "name": "Iphone 15 Pro",
              "price": "37.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694661777024_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Tự Nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 21,
              "name": "Iphone 15 Pro",
              "price": "30.290.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694661243183_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 22,
              "name": "Iphone 15 Pro",
              "price": "30.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546569542_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 23,
              "name": "Iphone 15 Pro",
              "price": "31.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694661356484_thumb_iphone_15_pro_xam_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Tự Nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 24,
              "name": "Iphone 15 Pro",
              "price": "31.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546556691_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 25,
              "name": "Iphone 15 Pro",
              "price": "27.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694590869682_thumb_iphone_15_pro_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Đen",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 26,
              "name": "Iphone 15 Pro",
              "price": "27.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694590845930_thumb_iphone_15_pro_xanh_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Xanh",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 27,
              "name": "Iphone 15 Pro",
              "price": "28.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/15/1/1694751579608_thumb_iphone_15_pro_trang_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Trắng",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            },
            {
              "id": 28,
              "name": "Iphone 15 Pro",
              "price": "28.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694613793733_iphone_15_pro_128gb_titan_tu_nhien_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Titan Tự Nhiên",
                "screenTechnology": " Super Retina XDR, Dynamic Island ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP cho ảnh có độ phân giải siêu cao và camera Telephoto 3x",
                "cpu": "A17 Pro, tạo ra cú nhảy vọt về hiệu năng đồ họa",
                "weight": "187g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 23 giờ"
              }
            }
          ],
          "series15Plus": [
            {
              "id": 29,
              "name": "Iphone 15 Plus",
              "price": "32.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694660069531_thumb_iphone_15_vang_didongvieti.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Vàng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 30,
              "name": "Iphone 15 Plus",
              "price": "33.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694548211046_thumb_iphone_15_xanh_duong_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh dương",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 31,
              "name": "Iphone 15 Plus",
              "price": "33.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694660431728_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 32,
              "name": "Iphone 15 Plus",
              "price": "28.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694659783227_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 33,
              "name": "Iphone 15 Plus",
              "price": "28.590.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694548127258_thumb_iphone_15_xanh_duong_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh dương",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 34,
              "name": "Iphone 15 Plus",
              "price": "28.590.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694659686534_thumb_iphone_15_vang_didongvieti.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Vàng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 35,
              "name": "Iphone 15 Plus",
              "price": "28.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694659897309_thumb_iphone_15_xanh_la_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh lá",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 36,
              "name": "Iphone 15 Plus",
              "price": "25.590.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694659192199_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 37,
              "name": "Iphone 15 Plus",
              "price": "25.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694659264577_thumb_iphone_15_xanh_la_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh lá",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 38,
              "name": "Iphone 15 Plus",
              "price": "25.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694548035155_thumb_iphone_15_xanh_duong_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh dương",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            },
            {
              "id": 39,
              "name": "Iphone 15 Plus",
              "price": "26.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694548045178_thumb_iphone_15.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Hồng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "1284 x 2778 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "201g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 26h đồng hồ"
              }
            }
          ],
          "series15Normal": [
            {
              "id": 40,
              "name": "Iphone 15",
              "price": "30.290.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658882170_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 41,
              "name": "Iphone 15",
              "price": "30.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658768033_thumb_iphone_15_vang_didongvieti.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Vàng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "512GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 42,
              "name": "Iphone 15",
              "price": "24.090.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547754177_thumb_iphone_15_xanh_duong_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh dương",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 43,
              "name": "Iphone 15",
              "price": "24.090.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658568516_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 44,
              "name": "Iphone 15",
              "price": "24.490.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658259247_thumb_iphone_15_vang_didongvieti.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Vàng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 45,
              "name": "Iphone 15",
              "price": "24.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658653847_thumb_iphone_15_xanh_la_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh lá",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 46,
              "name": "Iphone 15",
              "price": "24.990.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547764540_thumb_iphone_15.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Hồng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "256GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 47,
              "name": "Iphone 15",
              "price": "21.390.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658063600_thumb_iphone_15_den_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Đen",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 48,
              "name": "Iphone 15",
              "price": "21.690.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547636318_thumb_iphone_15_xanh_duong_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh dương",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 49,
              "name": "Iphone 15",
              "price": "21.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694658168741_thumb_iphone_15_xanh_la_didongviet.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Xanh lá",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 50,
              "name": "Iphone 15",
              "price": "21.790.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694657832449_thumb_iphone_15_vang_didongvieti.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Vàng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            },
            {
              "id": 51,
              "name": "Iphone 15",
              "price": "22.390.000 đ",
              "imgSrc": "https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694547644321_thumb_iphone_15.png",
              "TechnicalSpecifications": {
                "model": "Iphone 15 Series",
                "color": "Hồng",
                "screenTechnology": " Super Retina XDR OLED ",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "171g",
                "capacity": "128GB",
                "batteryLife": "Lên đến 20 giờ"
              }
            }
          ]
        }
      ],
      "series14": [
        {
          "series14Promax": [
            {
              "id": 52,
              "name": "Iphone 14 Promax",
              "price": "30.390.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b3312c8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 53,
              "name": "Iphone 14 Promax",
              "price": "30.390.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b331aae.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 54,
              "name": "Iphone 14 Promax",
              "price": "30.390.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b332271.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 55,
              "name": "Iphone 14 Promax",
              "price": "28.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b3312c8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 56,
              "name": "Iphone 14 Promax",
              "price": "28.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b331aae.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 57,
              "name": "Iphone 14 Promax",
              "price": "28.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/122705949657-14pro-tim-600x600-8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 58,
              "name": "Iphone 14 Promax",
              "price": "28.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b332271.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 59,
              "name": "Iphone 14 Promax",
              "price": "26.690.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b3312c8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 60,
              "name": "Iphone 14 Promax",
              "price": "26.690.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b331aae.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 61,
              "name": "Iphone 14 Promax",
              "price": "26.690.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/122705949657-14pro-tim-600x600-8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 62,
              "name": "Iphone 14 Promax",
              "price": "26.690.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b332271.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 63,
              "name": "Iphone 14 Promax",
              "price": "25.090.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b3312c8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 64,
              "name": "Iphone 14 Promax",
              "price": "25.090.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b331aae.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 65,
              "name": "Iphone 14 Promax",
              "price": "25.090.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/122705949657-14pro-tim-600x600-8.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4323 mAh"
              }
            },
            {
              "id": 66,
              "name": "Iphone 14 Promax",
              "price": "25.090.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632076b332271.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "1290 x 2796 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4323 mAh"
              }
            }
          ],
          "series14Pro": [
            {
              "id": 67,
              "name": "Iphone 14 Pro",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784843.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "1TB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 68,
              "name": "Iphone 14 Pro",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784f08.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "1TB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 69,
              "name": "Iphone 14 Pro",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077d4b197a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "1TB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 70,
              "name": "Iphone 14 Pro",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "1TB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 71,
              "name": "Iphone 14 Pro",
              "price": "28.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784843.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "512GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 72,
              "name": "Iphone 14 Pro",
              "price": "28.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784f08.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "512GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 73,
              "name": "Iphone 14 Pro",
              "price": "28.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077d4b197a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "512GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 74,
              "name": "Iphone 14 Pro",
              "price": "28.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "512GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 75,
              "name": "Iphone 14 Pro",
              "price": "25.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784843.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "256GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 76,
              "name": "Iphone 14 Pro",
              "price": "25.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784f08.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "256GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 77,
              "name": "Iphone 14 Pro",
              "price": "25.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077d4b197a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "256GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 78,
              "name": "Iphone 14 Pro",
              "price": "25.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "256GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 79,
              "name": "Iphone 14 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784843.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "128GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 80,
              "name": "Iphone 14 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077b784f08.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "128GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 81,
              "name": "Iphone 14 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632077d4b197a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "128GB",
                "batteryLife": "3200 mAh"
              }
            },
            {
              "id": 82,
              "name": "Iphone 14 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/587378764910-iPhone-14-Pro-series-2-650x650-1.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2556 x 1179 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "Chính 48 MP & Phụ 12 MP",
                "cpu": "Apple A16 Bionic 6 nhân",
                "weight": "206g",
                "capacity": "128GB",
                "batteryLife": "3200 mAh"
              }
            }
          ],
          "series14Plus": [
            {
              "id": 83,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157c6614bc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 84,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6320790abffbc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 85,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a80667f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 86,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a8062ba.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 87,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157d60fff2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 88,
              "name": "Iphone 14 Plus",
              "price": "22.290.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a805bee.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 89,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157c6614bc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 90,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6320790abffbc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 91,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a80667f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 92,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a8062ba.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 93,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157d60fff2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 94,
              "name": "Iphone 14 Plus",
              "price": "20.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a805bee.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 95,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157c6614bc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 96,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6320790abffbc.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 97,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a80667f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 98,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a8062ba.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 99,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641157d60fff2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            },
            {
              "id": 100,
              "name": "Iphone 14 Plus",
              "price": "18.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632078a805bee.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "4325 mAh"
              }
            }
          ],
          "series14Normal": [
            {
              "id": 101,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796ac7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 102,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795505.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 103,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796280.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 104,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641156fdd718f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 105,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/559900624251-14plus-yellodqw.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 106,
              "name": "Iphone 14",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795af3.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "512GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 107,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796ac7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 108,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795505.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 109,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796280.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 110,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641156fdd718f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 111,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/559900624251-14plus-yellodqw.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 112,
              "name": "Iphone 14",
              "price": "19.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795af3.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "256GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 113,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796ac7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 114,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795505.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 115,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f796280.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 116,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/641156fdd718f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu tím",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 117,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/559900624251-14plus-yellodqw.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu gold",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            },
            {
              "id": 118,
              "name": "Iphone 14",
              "price": "17.590.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/632079f795af3.png",
              "TechnicalSpecifications": {
                "model": "Iphone 14 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "172g",
                "capacity": "128GB",
                "batteryLife": "3279 mAh"
              }
            }
          ]
        }
      ],
      "series13": [
        {
          "series13Promax": [
            {
              "id": 119,
              "name": "Iphone 13 Promax",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b46ed30db.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 120,
              "name": "Iphone 13 Promax",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/902652087581-iphone-13-pro-max-gold-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 121,
              "name": "Iphone 13 Promax",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/485893024984-iphone-13-pro-max-silver-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 122,
              "name": "Iphone 13 Promax",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/466478711608-iphone-13-pro-max-blue-2-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 123,
              "name": "Iphone 13 Promax",
              "price": "29.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58e7952a7a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "1TB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 124,
              "name": "Iphone 13 Promax",
              "price": "26.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b46ed30db.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 125,
              "name": "Iphone 13 Promax",
              "price": "26.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/902652087581-iphone-13-pro-max-gold-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 126,
              "name": "Iphone 13 Promax",
              "price": "26.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/485893024984-iphone-13-pro-max-silver-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 127,
              "name": "Iphone 13 Promax",
              "price": "26.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/466478711608-iphone-13-pro-max-blue-2-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 128,
              "name": "Iphone 13 Promax",
              "price": "26.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58e7952a7a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "512GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 129,
              "name": "Iphone 13 Promax",
              "price": "24.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b46ed30db.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 130,
              "name": "Iphone 13 Promax",
              "price": "24.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/902652087581-iphone-13-pro-max-gold-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 131,
              "name": "Iphone 13 Promax",
              "price": "24.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/485893024984-iphone-13-pro-max-silver-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 132,
              "name": "Iphone 13 Promax",
              "price": "24.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/466478711608-iphone-13-pro-max-blue-2-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 133,
              "name": "Iphone 13 Promax",
              "price": "24.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58e7952a7a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "256GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 134,
              "name": "Iphone 13 Promax",
              "price": "23.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b46ed30db.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 135,
              "name": "Iphone 13 Promax",
              "price": "23.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/902652087581-iphone-13-pro-max-gold-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 136,
              "name": "Iphone 13 Promax",
              "price": "23.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/485893024984-iphone-13-pro-max-silver-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 137,
              "name": "Iphone 13 Promax",
              "price": "23.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/466478711608-iphone-13-pro-max-blue-2-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4352 mAh"
              }
            },
            {
              "id": 138,
              "name": "Iphone 13 Promax",
              "price": "23.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58e7952a7a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "240g",
                "capacity": "128GB",
                "batteryLife": "4352 mAh"
              }
            }
          ],
          "series13Pro": [
            {
              "id": 139,
              "name": "Iphone 13 Pro",
              "price": "26.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b98ac0680.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "1TB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 140,
              "name": "Iphone 13 Pro",
              "price": "26.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/312634899510-13-pro.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "1TB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 141,
              "name": "Iphone 13 Pro",
              "price": "26.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b99431fc0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "1TB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 142,
              "name": "Iphone 13 Pro",
              "price": "26.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/104479914573-iphone-13-pro-blue-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "1TB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 143,
              "name": "Iphone 13 Pro",
              "price": "26.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58d3c3081d.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "1TB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 144,
              "name": "Iphone 13 Pro",
              "price": "24.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b98ac0680.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 145,
              "name": "Iphone 13 Pro",
              "price": "24.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/312634899510-13-pro.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 146,
              "name": "Iphone 13 Pro",
              "price": "24.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b99431fc0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 147,
              "name": "Iphone 13 Pro",
              "price": "24.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/104479914573-iphone-13-pro-blue-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 148,
              "name": "Iphone 13 Pro",
              "price": "24.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58d3c3081d.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "512GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 149,
              "name": "Iphone 13 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b98ac0680.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 150,
              "name": "Iphone 13 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/312634899510-13-pro.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 151,
              "name": "Iphone 13 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b99431fc0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 152,
              "name": "Iphone 13 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/104479914573-iphone-13-pro-blue-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 153,
              "name": "Iphone 13 Pro",
              "price": "22.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58d3c3081d.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "256GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 154,
              "name": "Iphone 13 Pro",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b98ac0680.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 155,
              "name": "Iphone 13 Pro",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/312634899510-13-pro.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 156,
              "name": "Iphone 13 Pro",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198b99431fc0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu silver",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 157,
              "name": "Iphone 13 Pro",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/104479914573-iphone-13-pro-blue-650x650.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "3095 mAh"
              }
            },
            {
              "id": 158,
              "name": "Iphone 13 Pro",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/62b58d3c3081d.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu mint",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 120 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "203g",
                "capacity": "128GB",
                "batteryLife": "3095 mAh"
              }
            }
          ],
          "series13Normal": [
            {
              "id": 159,
              "name": "Iphone 13",
              "price": "19.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486434.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "512GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 160,
              "name": "Iphone 13",
              "price": "19.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486f48.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "512GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 161,
              "name": "Iphone 13",
              "price": "19.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e48680e.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "512GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 162,
              "name": "Iphone 13",
              "price": "19.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e485fa2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "512GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 163,
              "name": "Iphone 13",
              "price": "19.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/267183049165-13-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu hồng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "512GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 164,
              "name": "Iphone 13",
              "price": "17.890.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486434.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "256GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 165,
              "name": "Iphone 13",
              "price": "17.890.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486f48.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "256GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 166,
              "name": "Iphone 13",
              "price": "17.890.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e48680e.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "256GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 167,
              "name": "Iphone 13",
              "price": "17.890.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e485fa2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "256GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 168,
              "name": "Iphone 13",
              "price": "17.890.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/267183049165-13-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu hồng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "256GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 169,
              "name": "Iphone 13",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486434.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 170,
              "name": "Iphone 13",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486f48.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 171,
              "name": "Iphone 13",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e48680e.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đen",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 172,
              "name": "Iphone 13",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e485fa2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đỏ",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "3225 mAh"
              }
            },
            {
              "id": 173,
              "name": "Iphone 13",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/267183049165-13-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu hồng",
                "screenTechnology": "Super Retina XDR - OLED",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "3225 mAh"
              }
            }
          ],
          "series13Mini": [
            {
              "id": 174,
              "name": "Iphone 13 Mini",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486434.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu blue",
                "screenTechnology": "OLED",
                "resolution": "2340 x 1080 Pixels",
                "screen": "5.4 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "135g",
                "capacity": "128GB",
                "batteryLife": "2438 mAh"
              }
            },
            {
              "id": 175,
              "name": "Iphone 13 Mini",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e486f48.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu trắng",
                "screenTechnology": "OLED",
                "resolution": "2340 x 1080 Pixels",
                "screen": "5.4 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "135g",
                "capacity": "128GB",
                "batteryLife": "2438 mAh"
              }
            },
            {
              "id": 176,
              "name": "Iphone 13 Mini",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e48680e.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đen",
                "screenTechnology": "OLED",
                "resolution": "2340 x 1080 Pixels",
                "screen": "5.4 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "135g",
                "capacity": "128GB",
                "batteryLife": "2438 mAh"
              }
            },
            {
              "id": 177,
              "name": "Iphone 13 Mini",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6198c1e485fa2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu đỏ",
                "screenTechnology": "OLED",
                "resolution": "2340 x 1080 Pixels",
                "screen": "5.4 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "135g",
                "capacity": "128GB",
                "batteryLife": "2438 mAh"
              }
            },
            {
              "id": 178,
              "name": "Iphone 13 Mini",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/267183049165-13-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 13 Series",
                "color": "Màu hồng",
                "screenTechnology": "OLED",
                "resolution": "2340 x 1080 Pixels",
                "screen": "5.4 inch - Tần số quét 60 Hz",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A15 Bionic",
                "weight": "135g",
                "capacity": "128GB",
                "batteryLife": "2438 mAh"
              }
            }
          ]
        }
      ],
      "series12": [
        {
          "series12Promax": [
            {
              "id": 179,
              "name": "Iphone 12 Promax",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c078525d3.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "228g",
                "capacity": "256GB",
                "batteryLife": "3687 mAh"
              }
            },
            {
              "id": 180,
              "name": "Iphone 12 Promax",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c07851e14.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "228g",
                "capacity": "256GB",
                "batteryLife": "3687 mAh"
              }
            },
            {
              "id": 181,
              "name": "Iphone 12 Promax",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c078528f2.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "228g",
                "capacity": "256GB",
                "batteryLife": "3687 mAh"
              }
            },
            {
              "id": 182,
              "name": "Iphone 12 Promax",
              "price": "20.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/415635040498-6198c88ca5a8a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2778 x 1284 Pixels",
                "screen": "6.7 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "228g",
                "capacity": "256GB",
                "batteryLife": "3687 mAh"
              }
            }
          ],
          "series12Pro": [
            {
              "id": 183,
              "name": "Iphone 12 Pro",
              "price": "16.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/881111541080-6198c88ca5d54.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu xám",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "189g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 184,
              "name": "Iphone 12 Pro",
              "price": "16.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c13632c86.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu gold rose",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "189g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 185,
              "name": "Iphone 12 Pro",
              "price": "16.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c136335b7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu blue",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "189g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 186,
              "name": "Iphone 12 Pro",
              "price": "16.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c13632069.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu trắng",
                "screenTechnology": "Super Retina XDR - OLED ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "189g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            }
          ],
          "series12Normal": [
            {
              "id": 187,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe1dd7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu blue",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 188,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe375a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu trắng",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 189,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe2589.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu đen",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 190,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe1597.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu mint",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 191,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/084792201091-s2-12-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu tím",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 192,
              "name": "Iphone 12",
              "price": "15.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe2c55.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu đỏ",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "128GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 193,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe1dd7.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu blue",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 194,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe375a.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu trắng",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 195,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe2589.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu đen",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 196,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe1597.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu mint",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 197,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/084792201091-s2-12-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu tím",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            },
            {
              "id": 198,
              "name": "Iphone 12",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c4dbe2c55.png",
              "TechnicalSpecifications": {
                "model": "Iphone 12 Series",
                "color": "Màu tím",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2532 x 1170 Pixels",
                "screen": "6.1 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A14 Bionic",
                "weight": "164g",
                "capacity": "64GB",
                "batteryLife": "2815 mAh"
              }
            }
          ]
        }
      ],
      "series12Mini": [
        {
          "id": 199,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/673324203230-iphone-12-mini-white-1-650x650.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu trắng",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 200,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8a95.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu blue",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 201,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8214.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đen",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 202,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8826.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu mint",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 203,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8d0f.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu tím",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 204,
          "name": "Iphone 12 Mini",
          "price": "16.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8558.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đỏ",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "256GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 205,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/673324203230-iphone-12-mini-white-1-650x650.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đỏ",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 206,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8a95.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu blue",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 207,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8214.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đen",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 208,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8826.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu mint",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 209,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8d0f.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu tím",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 210,
          "name": "Iphone 12 Mini",
          "price": "13.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8558.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đỏ",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "128GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 211,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/673324203230-iphone-12-mini-white-1-650x650.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu trắng",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 212,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8a95.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu blue",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 213,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8214.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đen",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 214,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8826.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu mint",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 215,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8d0f.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu tím",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        },
        {
          "id": 216,
          "name": "Iphone 12 Mini",
          "price": "12.990.000 đ",
          "imgSrc": "https://www.bihouse.vn/img_data/images/6198c793d8558.png",
          "TechnicalSpecifications": {
            "model": "Iphone 12 Series",
            "color": "Màu đỏ",
            "screenTechnology": "OLED, Super Retina XDR ",
            "resolution": "2340 x 1080 Pixels",
            "screen": "5,4 inch",
            "touchGlass": "Kính cường lực Ceramic Shield",
            "frontCamera": "12 MP",
            "rearCamera": "2 camera 12 MP",
            "cpu": "Apple A14 Bionic",
            "weight": "140g",
            "capacity": "64GB",
            "batteryLife": "2227 mAh"
          }
        }
      ],
      "series11": [
        {
          "series11Promax": [
            {
              "id": 217,
              "name": "Iphone 11 Promax",
              "price": "15.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bfe6b.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu xám",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "256GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 218,
              "name": "Iphone 11 Promax",
              "price": "15.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bf69b.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu gold",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "256GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 219,
              "name": "Iphone 11 Promax",
              "price": "15.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bfbe0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu silver",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "256GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 220,
              "name": "Iphone 11 Promax",
              "price": "15.490.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/102954982072-802342774969-thumb_11-ProMAX_2-removebg-preview.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu mint",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "256GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 221,
              "name": "Iphone 11 Promax",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bfe6b.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu xám",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "64GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 222,
              "name": "Iphone 11 Promax",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bfbe0.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu silver",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "64GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 223,
              "name": "Iphone 11 Promax",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/102954982072-802342774969-thumb_11-ProMAX_2-removebg-preview.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu mint",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "64GB",
                "batteryLife": "3969 mAh"
              }
            },
            {
              "id": 224,
              "name": "Iphone 11 Promax",
              "price": "13.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b69bf69b.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu gold ",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2688 x 1242 Pixels",
                "screen": "6,5 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "226g",
                "capacity": "64GB",
                "batteryLife": "3969 mAh"
              }
            }
          ],
          "series11Pro": [
            {
              "id": 225,
              "name": "Iphone 11 Pro",
              "price": "11.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b37267c1.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu xám",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2436 x 1125 Pixels",
                "screen": "5,8 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "188g",
                "capacity": "64GB",
                "batteryLife": "3046 mAh"
              }
            },
            {
              "id": 226,
              "name": "Iphone 11 Pro",
              "price": "11.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b3726401.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu gold",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2436 x 1125 Pixels",
                "screen": "5,8 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "188g",
                "capacity": "64GB",
                "batteryLife": "3046 mAh"
              }
            },
            {
              "id": 227,
              "name": "Iphone 11 Pro",
              "price": "11.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/371892352606-61a1d32a4a7dd.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu trắng",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2436 x 1125 Pixels",
                "screen": "5,8 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "188g",
                "capacity": "64GB",
                "batteryLife": "3046 mAh"
              }
            },
            {
              "id": 228,
              "name": "Iphone 11 Pro",
              "price": "11.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/61af1b3726a61.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu mint",
                "screenTechnology": "OLED, Super Retina XDR ",
                "resolution": "2436 x 1125 Pixels",
                "screen": "5,8 inch",
                "touchGlass": "Kính cường lực Ceramic Shield",
                "frontCamera": "12 MP",
                "rearCamera": "3 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "188g",
                "capacity": "64GB",
                "batteryLife": "3046 mAh"
              }
            }
          ],
          "series11Normal": [
            {
              "id": 229,
              "name": "Iphone 11",
              "price": "10.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/786584058669-267183049165-13-thu%CC%9Bo%CC%9B%CC%80ng.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu trắng",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "128GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 230,
              "name": "Iphone 11",
              "price": "10.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e753d6.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu đen",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "128GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 231,
              "name": "Iphone 11",
              "price": "10.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e75a23.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu mint",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "128GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 232,
              "name": "Iphone 11",
              "price": "10.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e73dd9.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu tím",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "128GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 233,
              "name": "Iphone 11",
              "price": "10.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e74d7f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu đỏ",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "128GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 234,
              "name": "Iphone 11",
              "price": "9.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e7470f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu trắng",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "64GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 235,
              "name": "Iphone 11",
              "price": "9.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e753d6.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu đen",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "64GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 236,
              "name": "Iphone 11",
              "price": "9.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e75a23.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu mint",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "64GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 237,
              "name": "Iphone 11",
              "price": "9.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e73dd9.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu tím",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "64GB",
                "batteryLife": "3110 mAh"
              }
            },
            {
              "id": 238,
              "name": "Iphone 11",
              "price": "9.990.000 đ",
              "imgSrc": "https://www.bihouse.vn/img_data/images/6416c65e74d7f.png",
              "TechnicalSpecifications": {
                "model": "Iphone 11 Series",
                "color": "Màu đỏ",
                "screenTechnology": "LCD, Liquid Retina HD",
                "resolution": "828 x 1792 Pixels",
                "screen": "6,1 inch",
                "touchGlass": "Kính cường lực Ion-X",
                "frontCamera": "12 MP",
                "rearCamera": "2 camera 12 MP",
                "cpu": "Apple A13 Bionic",
                "weight": "194g",
                "capacity": "64GB",
                "batteryLife": "3110 mAh"
              }
            }
          ]
        }
      ]
    }
  ],}],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state);
    });
  },
});
