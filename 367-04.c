#include <stdio.h>

int is_leap(int year) {
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)return 1;
	else return 0;
}

int main(void) {
	int year;
	printf("������ �Է��Ͻÿ� : ");
	scanf("%d", &year);
	if (is_leap(year) == 1)printf("%d���� 366���Դϴ�.",year);
	else printf("%d���� 365���Դϴ�.",year);
	return 0;
}