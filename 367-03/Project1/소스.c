#include <stdio.h>

double cal_area(double radius) {
	return 3.14 * radius * radius;
}

int main(void) {
	double radius;
	printf("���� �������� �Է��Ͻÿ� : ");
	scanf("%lf", &radius);
	printf("���� ������ %lf �Դϴ�.", cal_area(radius));
	return 0;
}