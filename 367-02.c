#include <stdio.h>

int check_alpaha(char a) {
	if (a >= 'a' && a <= 'z')return 1;
	else return 0;
}

int main(void) {
	char msg;
	printf("���ڸ� �Է��Ͻÿ� :");
	scanf("%c", &msg);
	if (check_alpaha(msg) == 1)printf("%c�� ���ĺ� �����Դϴ�.", msg);
	else printf("%c�� ���ĺ� ���ڰ� �ƴմϴ�.", msg);
	return 0;
}