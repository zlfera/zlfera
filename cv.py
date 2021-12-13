import cv2 as cv
import numpy as np
start = cv.getTickCount()


face_cascade = cv.CascadeClassifier("./haarcascade_frontalcatface.xml")
img = cv.imread('ren.webp')

gray_img = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(
    gray_img, scaleFactor=1.05,  minNeighbors=5)
for x, y, w, h in faces:

    img = cv.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 3)

resized = cv.resize(img, (int(img.shape[1]/7), int(img.shape[0]/7)))

cv.imshow("Gray", resized)

cv.waitKey(0)

cv.destroyAllWindows()

end = cv.getTickCount()
print((end-start)/cv.getTickFrequency())
