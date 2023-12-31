from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    saved_lucky_numbers = models.JSONField(default=list)
    birthdate = models.DateField(null=True, blank=True)
    sign = models.CharField(max_length=20, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def calculate_zodiac_sign(self):
        if self.birthdate:
            day = self.birthdate.day
            month = self.birthdate.month
            if (month == 3 and day >= 21) or (month == 4 and day <= 19):
                return 'Aries'
            elif (month == 4 and day >= 20) or (month == 5 and day <= 20):
                return 'Taurus'
            elif (month == 5 and day >= 21) or (month == 6 and day <= 21):
                return 'Gemini'
            elif (month == 6 and day >= 22) or (month == 7 and day <= 22):
                return 'Cancer'
            elif (month == 7 and day >= 23) or (month == 8 and day <= 22):
                return 'Leo'
            elif (month == 8 and day >= 23) or (month == 9 and day <= 22):
                return 'Virgo'
            elif (month == 9 and day >= 23) or (month == 10 and day <= 23):
                return 'Libra'
            elif (month == 10 and day >= 24) or (month == 11 and day <= 21):
                return 'Scorpio'
            elif (month == 11 and day >= 22) or (month == 12 and day <= 21):
                return 'Sagittarius'
            elif (month == 12 and day >= 22) or (month == 1 and day <= 19):
                return 'Capricorn'
            elif (month == 1 and day >= 20) or (month == 2 and day <= 18):
                return 'Aquarius'
            elif (month == 2 and day >= 19) or (month == 3 and day <= 20):
                return 'Pisces'
            else:
                return None  # Invalid birthdate or format
        return None  # Birthdate not provided

    def save(self, *args, **kwargs):
        self.sign = self.calculate_zodiac_sign()
        super().save(*args, **kwargs)



# Aries: March 21 - April 19
# Taurus: April 20 – May 20
# Gemini: May 21- June 21
# Cancer: June 22- July 22
# Leo: July 23 – August 22
# Virgo: August 23 – September 22
# Libra: September 23 – October 23
# Scorpio: October 24 – November 21
# Sagittarius: November 22 – December 21
# Capricorn: December 22 – January 19
# Aquarius: January 20 – February 18
# Pisces: February 19 – March 20
