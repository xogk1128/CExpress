#include <stdio.h>

int plus(int x,int y) {
	return x + y;
}
int minus(int x, int y) {
	return x - y;
}
int division(int x, int y) {
	return x / y;
}
int multiple(int x, int y) {
	return x * y;
}

int rest(int x, int y) {
	return x % y;
}

void menu() {
	printf("==========================\n");
	printf("MENU\n");
	printf("==========================\n");
	printf("1.덧셈\n2.뺄셈\n3.나눗셈\n4.곱셈\n5.나머지\n");
}
int main(void) {
	while (1) {
		int integer;
		int a, b;
		int result;
		char again;
		menu();
		printf("원하는 메뉴를 선택하시오(1-5) : ");
		scanf("%d", &integer);
		printf("숫자 2개를 입력하시오 :");
		scanf("%d %d", &a, &b);
		switch (integer) {
		case 1:
			result = plus(a,b);
			break;
		case 2:
			result = minus(a,b);
			break;
		case 3:
			result = division(a,b);
			break;
		case 4:
			result = multiple(a,b);
			break;
		case 5:
			result = rest(a, b);
			break;
		}
		printf("연산 결과 : %d\n",result);
		printf("계속하려면 y를 누르시오:");
		scanf(" %c", &again);
		if (again == 'y')continue;
		else break;
	}
	return 0;
}