/* Bài 1 :  Xuất 3 số theo thứ tự tăng dần
    Mô hình 3 khối :
    - Input :
        - Num1 ; Num2 ; Num3
    - Xử lý :
        - Tạo biến cho Num1 ; Num2 ; Num3
        - Tạo biến sapXep
        - Gán giá trị cho Num1 ; Num2 ; Num3
    - Output :
        -  sapXep = ??????
*/

document.getElementById('btnSort').onclick = function() {
        var Num1 = Number(document.getElementById('Num1').value);
        var Num2 = Number(document.getElementById('Num2').value);
        var Num3 = Number(document.getElementById('Num3').value);
        var sapXep = '';
        if (Num1 > Num2 && Num1 > Num3 && (Num2 > Num3 || Num2 == Num3)) {
            sapXep = Num3 + " < " + Num2 + " < " + Num1;
        } else if ((Num1 > Num3 || Num1 == Num3) && Num3 > Num2 && Num1 > Num2) {
            sapXep = Num2 + " < " + Num3 + " < " + Num1;
        } else if (Num1 > Num2 && Num3 > Num1) {
            sapXep = Num2 + " < " + Num1 + " < " + Num3;
        } else if (Num2 > Num1 && Num2 > Num3 && (Num3 > Num1 || Num3 == Num1)) {
            sapXep = Num3 + " < " + Num1 + " < " + Num2;
        } else if (Num2 > Num1 && Num3 > Num1 && Num2 > Num3) {
            sapXep = Num1 + " < " + Num3 + " < " + Num2;
        } else if (Num1 > Num3 && Num2 > Num3 && Num1 == Num2) {
            sapXep = Num3 + " < " + Num2 + " < " + Num1;
        } else {
            sapXep = Num1 + " < " + Num2 + " < " + Num3;
        }
        document.getElementById('sortNum').innerHTML = ' Thứ tự tăng dần của 3 số :' + sapXep.toString();

    }
    // document.getElementById("sortNumber").onclick = function() {
    //         var e = Number(document.getElementById("inputNum1").value),
    //             t = Number(document.getElementById("inputNum2").value),
    //             n = Number(document.getElementById("inputNum3").value),
    //             a = document.getElementById("txtSortNumber");
    //         a.innerHTML = e > t ? (t > n ? n + " < " + t + " < " + e :
    //                 e > n ? t + " < " + n + " < " + e :
    //                 t + " < " + e + " < " + n) :
    //             t > n ? (e > n ? n + " < " + e + " < " + t :
    //                 e + " < " + n + " < " + t) :
    //             e + " < " + t + " < " + n;
    //     }
    /* End Bài 1 */

/* Bài 2 : Chương trình "Chào hỏi"
 Mô hình 3 khối :
    - Input :
        - U
    - Xử lý :
        - Tạo biến cho U
        - Tạo biến hi
        - Gán giá trị cho U
    - Output :
        -  hi = ??????
*/
document.getElementById('btnHi').onclick = function() {
    var U = document.getElementById('user').value,
        hi = '';
    if (U == "B") {
        hi = "Hello Bố";
    } else if (U == "M") {
        hi = "Hello Mẹ";
    } else if (U == "A") {
        hi = " Hi Anh";
    } else if (U == "E") {
        hi = " Hi Em gái";
    } else {
        hi = " Hi mentor";
    }
    document.getElementById('txtHi').innerHTML = hi;
}

/* End Bài 2 */

/* Bài 3 : Đếm số chẵn lẻ
Mô hình 3 khối :
    - Input :
        - Num1 ; Num2 ; Num3
    - Xử lý :
       - Tạo biến cho Num1 ; Num2 ; Num3
        - Tạo biến tang
        - Gán giá trị cho Num1 ; Num2 ; Num3
        - Xét điều kiện để tăng tang = tang++ 
        - Dùng tang để đém các số chẵn , lấy tổng số biến nhập - tăng để xác định số lượng số lẻ
    - Output :
        - Số chẵn = ? ; Số lẻ = ?
*/
document.getElementById('btnCount').onclick = function() {
    var So1 = Number(document.getElementById('num1').value);
    var So2 = Number(document.getElementById('num2').value);
    var So3 = Number(document.getElementById('num3').value);
    var tang = 0;
    So1 % 2 == 0 && tang++;
    So2 % 2 == 0 && tang++;
    So3 % 2 == 0 && tang++;
    document.getElementById('txtCount').innerHTML = `Có  ${tang}  số chẵn ; Có  ${3 - tang}  số lẻ`;
}

/* End Bài 3 */

/* Bài 4 :  Đoán hình tam giác
    Mô hình 3 khối :
    - Input :
       - canh1 ,canh2 ,canh3
    - Xử lý :
        - Tạo biến cho canh1 , canh2 ,canh3
        - Tạo biến tamGiac , sS1 , sS2 , sS3
        - Gán giá trị cho canh1 , canh2 ,canh3
        - Đều: Nếu 3 cạnh bằng nhau. Vd:a = 3, b=3 c=3
        - Cân: Nếu 2 cạnh bằng nhau. Vd: a=2, b=2, c=1
        - Vuông: c^2 = a^2 + b^2. Vd: a=3, b=4, c=5
    - Output :
        - tamGiac = loại tam giác ?
*/
document.getElementById('btnEdges').onclick = function() {
        var canh1 = Number(document.getElementById('canh1').value);
        var canh2 = Number(document.getElementById('canh2').value);
        var canh3 = Number(document.getElementById('canh3').value);
        var tamGiac = '';
        var sS1 = Number(Math.sqrt(Math.pow(canh2, 2) + Math.pow(canh3, 2))),
            sS2 = Number(Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh3, 2))),
            sS3 = Number(Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh2, 2)));
        if (canh1 == canh2 && canh2 == canh3) {
            tamGiac = "Đây là tam giác đều";
        } else
        if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
            tamGiac = "Đây là tam giác cân";
        } else if (canh1 == sS1 || canh2 == sS2 || canh3 == sS3) {
            tamGiac = "Đây là tam giác vuông";
        } else {
            tamGiac = "Đây là loại tam giác chưa biết";
        }
        document.getElementById('txtEdges').innerHTML = tamGiac;
    }
    /* End Bài 4 */
/* Bài 5 : Tính ngày tháng năm
    Mô hình 3 khối:
 * - Input:
 *      + day: Number, month: Number, year: Number
 * -Xử lý: 
 *      + sử dụng switch case  để xác định từng tháng trong năm
 *      + Trường hợp btnYes => đối với tháng 1 vào ngày 1/1/nam => txtDate = 31/12/ + (year -1)
 *      + Các trường hợp còn lại => day / month / year = (day -1) / month /year. Và nếu rơi vào ngày 1 hàng tháng => tùy vào tháng sẽ có các ngày 28 || 30 || 31 + month -1 +nam
 *      + Trường hợp btnTomor => đối với tháng 12 vào ngày 31/12/year => txtDate = 1/1 + (year +1)
 *      + các trường hợp còn lại => day / month / year => (day + 1) / month / nam. Và nếu rơi vào các ngày cuối tháng như 28 || 30 || 31 => 1 / (month + 1) /year
 *      + Các trường hợp nhập sai tháng => alert('vui lòng nhập đúng tháng')
 * - Output:
 *      + txtDate = ?
*/
document.getElementById('btnYes').onclick = function() {
    var day = Number(document.getElementById('day').value),
        month = Number(document.getElementById('month').value),
        year = Number(document.getElementById('year').value),
        date = '';
    switch (month) {
        case 1:
            {
                if (day > 1 && day <= 31) {
                    date = (day - 1) + "/" + month + "/" + year;
                } else if (day == 1) {
                    date = "31 / 12" + " / " + (year - 1);
                } else { date = " Ngày nào đây"; }
            }
            break;
        case 2:
            {
                if (day > 1 && day <= 28) {
                    date = (day - 1) + " / " + month + " / " + year;
                } else if (day == 1) {
                    date = "31 /" + (month - 1) + " / " + year;
                } else { date = " Ngày nào đây"; }
            }
            break;
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                if (day > 1 && day <= 31) {
                    date = (day - 1) + " / " + month + " / " + year;
                } else if (day == 1) {
                    date = "30" + " / " + (month - 1) + " / " + year;
                } else { date = " Ngày nào đây"; }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                if (day > 1 && day <= 30) {
                    date = (day - 1) + " / " + month + " / " + year;
                } else if (day == 1) {
                    date = "31" + " / " + (month - 1) + " / " + year;
                } else { date = " Ngày nào đây"; }
            }
            break;
        default:
            date = " Ngày nào đây";
    }
    document.getElementById('txtDate').innerHTML = date;
}
document.getElementById('btnTomor').onclick = function() {
    var day = Number(document.getElementById('day').value),
        month = Number(document.getElementById('month').value),
        year = Number(document.getElementById('year').value),
        date = '';
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            {
                if (day > 0 && day < 31) {
                    date = (day + 1) + " / " + month + " / " + year;
                } else if (day == 31) {
                    date = "1 / " + (month + 1) + " / " + year;
                } else { date = "???????????????"; }
            }
            break;
        case 2:
            {
                if (day > 0 && day < 28) {
                    date = (day + 1) + " / " + month + " / " + year;
                } else if (day == 28) {
                    date = "1 / " + (month + 1) + " / " + year;
                } else { date = "???????????????"; }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                if (day > 0 && day < 30) {
                    date = (day + 1) + " / " + month + " / " + year;
                } else if (day == 30) {
                    date = "1 / " + (month + 1) + year;
                } else { date = "???????????????"; }
            }
            break;
        case 12:
            {
                if (day > 0 && day < 31) {
                    date = (day + 1) + " / " + month + " / " + year;
                } else if (day == 31) {
                    date = "01 / 01 " + (year + 1);
                } else { date = " Ngày nào đây"; }
            }
            break;
        default:
            date = " Ngày nào đây";
    }
    document.getElementById('txtDate').innerHTML = date;
}

/* End Bài 5 */
/* Bài 6 : Tính ngày
 * Mô hình 3 khối:
 * - Input: 
 *      + thang: Number, nam: Number
 * - Xử lý:
 *      + Sử dụng switch case để xác định 12 tháng cụ thể   
 *      + các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
 *      + các tháng có 30 ngày: 4, 6, 9, 11
 *      + trường hợp tháng 2 có 28 hoặc 29 ngày tùy năm nhuận:  
 *          . Sử dụng if với điều kiện ((nam % 4 == 0 && nam % 100 !== 0) || nam %400 ==0) để xác định năm có 29 ngày 
 *          . trường hợp còn lại là 28 ngày
 * - Output:    
 *      + txtDay = ?
 */
document.getElementById('btnDay').onclick = function() {
    var thang = Number(document.getElementById('month1').value),
        nam = Number(document.getElementById('year').value),
        ngay = 0;
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ngay = 31 + " Ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngay = 30 + " Ngày";
            break;
        case 2:
            {
                if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
                    ngay = 29 + " Ngày";
                } else { ngay = 28 + " Ngày"; }
            }
            break;
        default:
            ngay = '0 ngày';
    }
    document.getElementById('txtDay').innerHTML = "Có " + ngay;
}

/* End bài 6 */
/* BÀi 7 : Đọc Số 
 Mô hình 3 khối:
 * - Input:
 *      + nhapSo: Number
 * - Xử lý:
 *      + Tách số nhập vào có 3 chữ số thành 3 phần: tram, chuc, donVi:
 *          . Công thức:    
 *              1. hangTram = Math.floor(nhapSo / 100)
 *              2. hangChuc = Math.floor(nhapSo % 100 / 10);
 *              3. donVi = nhapSo % 10;
 *      + Sử dụng switch case cho từng thành phần được tách vì mỗi phần chỉ giới hạn 10 đơn vị, riêng hangTram giới hạn 9 đơn vị( trừ số 0)
 * - Output: 
 *      + docSo = hangTram + hangChuc + donVi
*/

document.getElementById('btnNum').onclick = function() {
    var nhapSo = Number(document.getElementById('So').value);
    var tram = Math.floor(nhapSo / 100);
    var chuc = Math.floor(nhapSo % 100 / 10);
    var donVi = nhapSo % 10;
    switch (tram) {
        case 1:
            {
                tram = 'Một trăm ';
            }
            break;
        case 2:
            {
                tram = 'Hai trăm ';
            }
            break;
        case 3:
            {
                tram = 'Ba trăm ';
            }
            break;
        case 4:
            {
                tram = 'Bốn trăm ';
            }
            break;
        case 5:
            {
                tram = 'Năm trăm ';
            }
            break;
        case 6:
            {
                tram = 'Sáu trăm ';
            }
            break;
        case 7:
            {
                tram = 'Bảy trăm ';
            }
            break;
        case 8:
            {
                tram = 'Tám trăm ';
            }
            break;
        case 9:
            {
                tram = 'Chín trăm ';
            }
            break;
        default:
            {
                alert('Số hàng trăm không xác định được');
                tram = '';
            }
    }
    switch (chuc) {
        case 0:
            {
                chuc = '';
            }
            break;
        case 1:
            {
                chuc = 'mười ';
            }
            break;
        case 2:
            {
                chuc = 'hai mươi ';
            }
            break;
        case 3:
            {
                chuc = 'ba mươi ';
            }
            break;
        case 4:
            {
                chuc = 'bốn mươi ';
            }
            break;
        case 5:
            {
                chuc = 'năm mươi ';
            }
            break;
        case 6:
            {
                chuc = 'sáu mươi ';
            }
            break;
        case 7:
            {
                chuc = 'bảy mươi ';
            }
            break;
        case 8:
            {
                chuc = 'tám mươi ';
            }
            break;
        case 9:
            {
                chuc = 'chín mươi ';
            }
            break;
        default:
            {
                alert('Số hàng chục không xác định được');
                chuc = '';
            }
    }
    switch (donVi) {
        case 0:
            {
                donVi = '';
            }
            break;
        case 1:
            {
                donVi = 'một';
            }
            break;
        case 2:
            {
                donVi = 'hai';
            }
            break;
        case 3:
            {
                donVi = 'ba';
            }
            break;
        case 4:
            {
                donVi = 'bốn';
            }
            break;
        case 5:
            {
                donVi = 'năm';
            }
            break;
        case 6:
            {
                donVi = 'sáu';
            }
            break;
        case 7:
            {
                donVi = 'bảy';
            }
            break;
        case 8:
            {
                donVi = 'tám';
            }
            break;
        case 9:
            {
                donVi = 'chín';
            }
            break;
        default:
            {
                alert('Số hàng đơn vị không xác định được');
                donVi = '';
            }
    }
    document.getElementById('docSo').innerHTML = 'Đọc: ' + tram + chuc + donVi;
}

/* End BÀi 7 */
/* BÀi 8 : Timg vị trí
     + sinhVien1, sinhVien2, sinhVien3: String
 *      + toaDoX1, toaDoX2, toaDoX3, toaDoX4: Number
 *      + toaDoY1, toaDoY2, toaDoY3, toaDoY4: Number
 * - Xử lý:
 *      + Tính độ quãng cách đường đi của từng sinh viên = công thức căn bậc 2 của bình phương tọa độ X trường học - tọa độ X sinh viên cộng cho bình phương tọa độ Y trường học - tọa độ Y sinh viên => sử dụng Math.pow để tính bình phương và Math.sqrt để tính căn bậc 2
 *  => var tinh? = Math.pow((toaDoX4 - toaDoX?),2) + Math.pow((toaDoY4- toaDoY?),2);
 *  => var tinhSinhVien? = Math.sqrt(tinh?)
 *      + Sau đó dùng if để tìm quãng đường nào xa nhất:    
 *  => if(tinhSinhVien1 > tinhSinhVien2 && tinhSinhVien1 >tinhSinhVien3){
        ketQuaBai8 = sinhVien1;
    }else if(tinhSinhVien2 >tinhSinhVien1 && tinhSinhVien2 > tinhSinhVien3){
        ketQuaBai8 = sinhVien2;
    }else{
        ketQuaBai8 = sinhVien3;
    }
    - Output:
            + map = ?;
*/
document.getElementById('btnTim').onclick = function() {
    var toaDoX1 = Number(document.getElementById('x1').value);
    var toaDoY1 = Number(document.getElementById('y1').value);
    var toaDoX2 = Number(document.getElementById('x2').value);
    var toaDoY2 = Number(document.getElementById('y2').value);
    var toaDoX3 = Number(document.getElementById('x3').value);
    var toaDoY3 = Number(document.getElementById('y3').value);
    var toaDoX4 = Number(document.getElementById('x4').value);
    var toaDoY4 = Number(document.getElementById('y4').value);
    var sinhVien1 = document.getElementById('ten1').value;
    var sinhVien2 = document.getElementById('ten2').value;
    var sinhVien3 = document.getElementById('ten3').value;
    var tinh = Math.pow((toaDoX4 - toaDoX1), 2) + Math.pow((toaDoY4 - toaDoY1), 2);
    var tinhSinhVien1 = Math.sqrt(tinh);
    var tinh2 = Math.pow((toaDoX4 - toaDoX2), 2) + Math.pow((toaDoY4 - toaDoY2), 2);
    var tinhSinhVien2 = Math.sqrt(tinh2);
    var tinh3 = Math.pow((toaDoX4 - toaDoX3), 2) + Math.pow((toaDoY4 - toaDoY3), 2);
    var tinhSinhVien3 = Math.sqrt(tinh3);
    var map = '';
    if (tinhSinhVien1 > tinhSinhVien2 && tinhSinhVien1 > tinhSinhVien3) {
        map = sinhVien1;
    } else if (tinhSinhVien2 > tinhSinhVien1 && tinhSinhVien2 > tinhSinhVien3) {
        map = sinhVien2;
    } else {
        map = sinhVien3;
    }
    document.getElementById('map').innerHTML = 'Sinh viên xa trường nhất: ' + map;
}

/*End bài 8 */
