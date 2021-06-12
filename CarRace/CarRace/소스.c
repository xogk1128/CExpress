#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>

void disp_car(int car_number, int distance) {
	int i;
	printf("CAR #%d", car_number);
	for (i = 0; i < distance / 10; i++) {
		printf("*");
	}
	printf("\n");
}

int main(void) {
	int i;
	int car1 = 0, car2 = 0;
	srand((unsigned)time(NULL));
	for (i = 0; i < 6; i++) {
		car1 += rand() % 100;
		car2 += rand() % 100;
		disp_car(1, car1);
		disp_car(2, car2);
		printf("--------------------\n");
		_getch();
	}
	return 0;
}