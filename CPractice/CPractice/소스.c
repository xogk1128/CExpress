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
	printf("1.����\n2.����\n3.������\n4.����\n5.������\n");
}
int main(void) {
	while (1) {
		int integer;
		int a, b;
		int result;
		char again;
		menu();
		printf("���ϴ� �޴��� �����Ͻÿ�(1-5) : ");
		scanf("%d", &integer);
		printf("���� 2���� �Է��Ͻÿ� :");
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
		printf("���� ��� : %d\n",result);
		printf("����Ϸ��� y�� �����ÿ�:");
		scanf(" %c", &again);
		if (again == 'y')continue;
		else break;
	}
	return 0;
}