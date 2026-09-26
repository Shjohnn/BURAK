# TASK N:

# Shunday function yozing, u string qabul qilsin va string
#  palindrom yani togri oqilganda ham, orqasidan oqilganda
#  ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

# MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

def palindromCheck(text):
    reverse = text[::-1]
    return text == reverse

print(palindromCheck("dad"))  # True
print(palindromCheck("son"))  # False



# Shunday function yozing, u raqamlardan tashkil topgan array 
# qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha 
# raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
# MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


# def getSquareNumbers(numbers):
#     result=[]
#     for number in numbers:
#         square=number**2
#         obj={"number":number,"square":square}
#         result.append(obj)

#     return result

# natija=getSquareNumbers([1,2,3])
# print(natija)