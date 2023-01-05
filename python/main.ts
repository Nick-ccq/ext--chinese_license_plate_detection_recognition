
//% color="#ef784c" iconWidth=50 iconHeight=40
namespace Chinese_license_plate{

    //% block="初始化摄像头直到成功 编号[CAMNUM]" blockType="command"
    //% CAMNUM.shadow="number" CAMNUM.defl="0"
    export function readcap(parameter: any, block: any) {
        let num=parameter.CAMNUM.code;
 
        Generator.addImport(`import sys\nsys.path.append("/root/Chinese_license_plate_detection_recognition")`)
        Generator.addImport(`import Recognition_plate_1\nimport cv2\nimport numpy as np`)
        
        Generator.addCode(`cap = cv2.VideoCapture(${num})`)
        Generator.addCode(`cap.set(cv2.CAP_PROP_FRAME_WIDTH, 240)`)
        Generator.addCode(`cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 320)`)
        Generator.addCode(`cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)`)
        Generator.addCode(`cv2.namedWindow('cvwindow',cv2.WND_PROP_FULLSCREEN)`)
        Generator.addCode(`cv2.setWindowProperty('cvwindow', cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)`)
        Generator.addCode(`pic_count = 0`)             
    Generator.addCode(`while not cap.isOpened():
    continue`)    
    }

    //% block="打开摄像头画面进行读取" blockType="command"
    export function readcapcapture(parameter: any, block: any) {

        Generator.addCode(`cv2.waitKey(5)
cvimg_success, img_src = cap.read()
cvimg_h, cvimg_w, cvimg_c = img_src.shape
cvimg_w1 = cvimg_h*240//320
cvimg_x1 = (cvimg_w-cvimg_w1)//2
img_src = img_src[:, cvimg_x1:cvimg_x1+cvimg_w1]
img_src = cv2.resize(img_src, (240, 320))
cvimg_src=img_src.copy()
cv2.imshow('cvwindow', cvimg_src)
`)


    }
    //% block="开始进行车牌识别" blockType="command"
    export function writecapcapture(parameter: any, block: any) {

        Generator.addCode(`cv2.imwrite( "/root/Chinese_license_plate_detection_recognition/imgs/3.png", cvimg_src)`)
    }
    //% block="获取车牌识别结果" blockType="reporter"
    export function readvalue(parameter: any, block: any) {

        Generator.addCode(`Recognition_plate_1.re()`)
    }
}
