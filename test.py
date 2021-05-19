from typing import NewType
num = "54345"
#回文数
flag = False
Newnum = ""
for i in range(len(num)):
    Newnum = Newnum + num[len(num)-i-1]
print(Newnum)
if Newnum == num:
    print('yes')
