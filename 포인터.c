#include <stdio.h>

void swap(int *px, int *py);

int main(void) {
	int a=100, b=200;

	printf("%d %d", a, b);
	swap(&a, &, b);
	printf("%d %d", a, b);

	return 0;
}

void swap(int* px, int* py) {
	int* tmp;
	tmp = px;
	px = py;
	py = tmp;
}