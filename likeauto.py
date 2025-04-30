import pyautogui
import webbrowser
import time

print(pyautogui.size()) #muestra el tamaño de la pantalla fruta¿¿¿¿

webbrowser.open("https://www.youtube.com")
time.sleep(3)

pyautogui.moveTo(x=99, y=248)
time.sleep(1)

pyautogui.click()
time.sleep(1.5)

pyautogui.press("f")
time.sleep(1.5)

pyautogui.moveTo(x=922, y=326)
time.sleep(1.5)
def banana():
    pyautogui.click()
    time.sleep(1.5)
    pyautogui.scroll(-500)
    time.sleep(1.5)
    
banana = [
    0
]
for i in banana:
    banana()