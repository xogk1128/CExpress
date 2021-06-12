#include <stdio.h>

int check_alpaha(char a) {
	if (a >= 'a' && a <= 'z')return 1;
	else return 0;
}

int main(void) {
	char msg;
	printf("문자를 입력하시오 :");
	scanf("%c", &msg);
	if (check_alpaha(msg) == 1)printf("%c는 알파벳 문자입니다.", msg);
	else printf("%c는 알파벳 문자가 아닙니다.", msg);
	return 0;
}