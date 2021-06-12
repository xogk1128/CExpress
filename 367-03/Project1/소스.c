#include <stdio.h>

double cal_area(double radius) {
	return 3.14 * radius * radius;
}

int main(void) {
	double radius;
	printf("원의 반지름을 입력하시오 : ");
	scanf("%lf", &radius);
	printf("원의 면적은 %lf 입니다.", cal_area(radius));
	return 0;
}