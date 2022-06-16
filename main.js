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
    /* En Bài 4 */
